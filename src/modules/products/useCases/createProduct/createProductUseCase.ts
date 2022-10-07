import { UniqueEntityID } from "../../../../core/domain/UniqueEntityID"
import { UseCase } from "../../../../core/domain/UseCase"
import { GenericAppError } from "../../../../core/logic/AppError"
import { Either, left, Result, right } from "../../../../core/logic/Result"
import { Url } from "../../../../shared/domain_types/Url"
import { TextUtils } from "../../../../utils/TextUtils"
import { ShopId } from "../../../shop/domain/shopId"
import { Product } from "../../domain/product"
import { Product360Video } from "../../domain/product360Video"
import { ProductCategoryId } from "../../domain/productCategoryId"
import { Slug } from "../../domain/slug"
import { IProduct360VideoRepo } from "../../repos/product360VideoRepo"
import { IProductImageRepo } from "../../repos/productImageRepo"
import { IProductInventoryRepo } from "../../repos/productInventoryRepo"
import { IProductRepo } from "../../repos/productRepo"
import { IProductStockRepo } from "../../repos/productStockRepo"
import { ITagProductAttributeValueRepo } from "../../repos/tagProductAtrtibuteValueRepo"
import { ProductService, VariantsResponse } from "../../services/productService"
import { CreateProductImageErrors } from "../createProductImage/createProductImageErrors"
import { CreateProductDTO } from "./createProductDTO"
import { CreateProductErrors } from "./createProductErrors"

type Response = Either<
  | GenericAppError.UnexpectedError
  | CreateProductErrors.GuardError
  | CreateProductErrors.ProductMustHaveVariants
  | CreateProductErrors.ProductAlreadyExists
  | CreateProductImageErrors.InvalidImageUrl
  | Result<any>,
  Result<Product>
>

export class CreateProductUseCase implements UseCase<CreateProductDTO, Promise<Response>> {
  private productRepo: IProductRepo
  private productInventoryRepo: IProductInventoryRepo
  private productImageRepo: IProductImageRepo
  private product360VideoRepo: IProduct360VideoRepo
  private tagProductAttributeValueRepo: ITagProductAttributeValueRepo
  private productStock: IProductStockRepo

  constructor(
    productRepo: IProductRepo,
    productInventoryRepo: IProductInventoryRepo,
    productImageRepo: IProductImageRepo,
    product360VideoRepo: IProduct360VideoRepo,
    tagProductAttributeValueRepo: ITagProductAttributeValueRepo,
    productStock: IProductStockRepo,
  ) {
    this.productRepo = productRepo
    this.productInventoryRepo = productInventoryRepo
    this.productImageRepo = productImageRepo
    this.product360VideoRepo = product360VideoRepo
    this.tagProductAttributeValueRepo = tagProductAttributeValueRepo
    this.productStock = productStock
  }

  async execute(req: CreateProductDTO): Promise<Response> {
    const productSlug = Slug.create(req.product_name)
    const shopIdOrError = UniqueEntityID.isValidId(req.shop_id) ? ShopId.create(new UniqueEntityID(req.shop_id)) : Result.fail<ShopId>("Invalid shop id")

    const productCategoryIdOrError = UniqueEntityID.isValidId(req.product_category_id)
      ? ProductCategoryId.create(new UniqueEntityID(req.product_category_id))
      : Result.fail<ProductCategoryId>("Invalid category id")

    const productWebId = TextUtils.createRandomNumericString(7)

    const combinedPropsResult = Result.combine([shopIdOrError, productCategoryIdOrError])

    if (combinedPropsResult.isFailure) {
      return left(new CreateProductErrors.GuardError(combinedPropsResult.error)) as Response
    }

    const productOrError = Product.create({
      productName: req.product_name,
      productDescription: req.product_description,
      productCategoryId: productCategoryIdOrError.getValue(),
      shopId: shopIdOrError.getValue(),
      productWebId: Number(productWebId),
      productSlug: productSlug.getValue(),
      isActive: true,
    })

    if (productOrError.isFailure) {
      return left(Result.fail<void>(productOrError.error)) as Response
    }

    const product: Product = productOrError.getValue()

    const v360UrlOrError = Url.create(req.product_360_video_url)

    if (v360UrlOrError.isFailure) {
      return left(new CreateProductErrors.GuardError(v360UrlOrError.error.toString())) as Response
    }

    const product360VideoOrError = Product360Video.create({
      productId: product.id,
      url: v360UrlOrError.getValue(),
    })

    if (product360VideoOrError.isFailure) {
      return left(new CreateProductErrors.GuardError(product360VideoOrError.error.toString())) as Response
    }

    const product360Video = product360VideoOrError.getValue()

    let variantsResponse: VariantsResponse[]

    if (req.variants.length) {
      // validate all variants
      const result = ProductService.validateAllVariants(req.variants, product.productId)

      if (result.isLeft()) {
        return left(new CreateProductErrors.GuardError(result.value.error as string)) as Response
      }

      variantsResponse = result.value

      const allProdAttrResults = ProductService.getAllProductAttrValuesResultFromVaraints(variantsResponse)
      const allProdImageResults = ProductService.getAllProductImagesResultFromVaraints(variantsResponse)

      const combinedAttrPropsResult = Result.combine([...allProdAttrResults])
      const combinedProdImagesPropsResult = Result.combine([...allProdImageResults])

      if (combinedAttrPropsResult.isFailure) {
        return left(Result.fail<void>(combinedAttrPropsResult.error)) as Response
      }

      if (combinedProdImagesPropsResult.isFailure) {
        return left(Result.fail<void>(combinedProdImagesPropsResult.error)) as Response
      }

      const productAlreadyExists = await this.productRepo.existsInShop(product.productName, product.shopId.id.toString())

      if (productAlreadyExists) {
        return left(new CreateProductErrors.ProductAlreadyExists(product.productName)) as Response
      }

      const allProdInventory = ProductService.getAllProductInventoryFromVariants(variantsResponse)
      const allTagProdAttrs = ProductService.getAllTagProductAttrFromResults(allProdAttrResults)
      const allProdImages = ProductService.getAllProductImagesFromResults(allProdImageResults)
      const allProductStockRes = ProductService.createAllProductInventoryStock(allProdInventory)
      const allProductStock = ProductService.getAllProductInventoryStock(allProductStockRes)
      const transaction = await this.productRepo.createTransaction()

      try {
        //save product data
        await this.productRepo.saveTransaction(product, transaction)

        console.log("product created")

        //save product 360 video
        await this.product360VideoRepo.saveTransaction(product360Video, transaction)

        console.log("product 360 video created")

        //save bulk variants
        await this.productInventoryRepo.saveBulkTransaction(allProdInventory, transaction)

        console.log("product inventory saved")

        //save bulk product stock
        this.productStock.saveBulkTranscation(allProductStock, transaction)

        console.log("product stocks saved")

        //save bulk tag attr product attributes
        await this.tagProductAttributeValueRepo.saveBulkTransaction(allTagProdAttrs, transaction)

        console.log("tag product attr")
        //save bulk product images

        await this.productImageRepo.saveBulkTranscation(allProdImages, transaction)

        console.log("product images")

        // commit transaction
        await transaction.commit()
      } catch (err) {
        console.log("rollback")

        await transaction.rollback()
        return left(new GenericAppError.UnexpectedError(err)) as Response
      }

      return right(Result.ok<Product>(product)) as Response
    } else {
      return left(new CreateProductErrors.ProductMustHaveVariants()) as Response
    }
  }
}
