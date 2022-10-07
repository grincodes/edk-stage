
import { UniqueEntityID } from "../../../core/domain/UniqueEntityID"
import { Either, left, Result, right } from "../../../core/logic/Result"
import { Url } from "../../../shared/domain_types/Url"
import { Price } from "../domain/Price"
import { ProductId } from "../domain/productId"
import { ProductImage } from "../domain/productImage"
import { Currency, ProductInventory } from "../domain/productInventory"
import { ProductInventoryId } from "../domain/productInventoryId"
import { ProductStock } from "../domain/productStock"
import { Sku } from "../domain/sku"
import { TagProductAttributValue } from "../domain/tagProductAttributeValue"
import { VariantName } from "../domain/variantName"
import { Unit, Weight } from "../domain/Weight"
import { Variant } from "../useCases/createProduct/createProductDTO"
import { CreateProductImageErrors } from "../useCases/createProductImage/createProductImageErrors"

type validationResponse = Either<Result<ProductInventory>, VariantsResponse[]>

export interface VariantsResponse {
  productInventory?: ProductInventory
  productInventories: ProductInventory[]
  productAttributes: Result<TagProductAttributValue>[]
  productImages: Result<ProductImage>[]
  hasVaraints: boolean
}

export class ProductService {
  public static validateAllVariants(variants: Variant[], productId: ProductId): validationResponse {
    let _productAttributes: Result<TagProductAttributValue>[] = []
    let _productImages: Result<ProductImage>[] = []
    const variantsResponse: VariantsResponse[] = []
    const _hasVariants = true

    for (let i = 0; i < variants.length; i++) {
      variants[i].product_id = productId.id.toString()
      const _allProdInventory: ProductInventory[] = []
      if (variants[i].sizes.length) {
        const _allResProdInventory = ProductService.createAllProductInventory(variants[i])

        const combinedPropsResult = Result.combine([..._allResProdInventory])

        if (combinedPropsResult.isFailure) {
          return left(combinedPropsResult)
        }
        //loop through each allProdInventory
        _allResProdInventory.forEach((_prodInventory) => {
          if (_prodInventory.isFailure) {
            console.log("invalid attr id")
            return left(_prodInventory)
          }

          const _productInventory = _prodInventory.getValue()
          _allProdInventory.push(_productInventory)
        })

        _productAttributes = ProductService.createTagProductAttributeValues(_allProdInventory)

        if (variants[i].images.length) {
          const [prodInventory] = _allProdInventory
          // validate images and map to domain for persistence
          _productImages = ProductService.createInventoryImages(variants[i].images, prodInventory.variantName.value)
        }

        variantsResponse.push({
          productInventories: _allProdInventory,
          productAttributes: _productAttributes,
          productImages: _productImages,
          hasVaraints: _hasVariants,
        })
      } else {
        // todo Implementation is left to the business if all product must have a varaint
      }
    }

    return right(variantsResponse)
  }

  private static createAllProductInventory(variant: Variant): Result<ProductInventory>[] {
    const variantNameOrError = VariantName.create(variant.variant_name)

    const productInventories = variant.sizes.map((vsize) => {
      const skuOrError = Sku.create(variant.variant_name)
      const productIdOrError = UniqueEntityID.isValidId(variant.product_id) ? ProductId.create(new UniqueEntityID(variant.product_id)) : Result.fail<ProductId>("Invalid product id")

      const prodAttributeValueIdOrError = UniqueEntityID.isValidId(vsize.attr_val_id)
        ? Result.ok<UniqueEntityID>(new UniqueEntityID(vsize.attr_val_id))
        : Result.fail<UniqueEntityID>("Invalid attribute id")
      const retailPriceOrError = Price.create(Number(vsize.price))
      const weightOrError = Weight.create({ value: 3, unit: Unit.Kilogram })
      const quantityOrError = vsize.quantity > 0 ? Result.ok<number>(vsize.quantity) : Result.fail<number>("quantity must be more than 0")
      //todo product_type_id and product_brand_id

      const combinedPropsResult = Result.combine([variantNameOrError, skuOrError, productIdOrError, prodAttributeValueIdOrError, retailPriceOrError, weightOrError, quantityOrError])

      if (combinedPropsResult.isSuccess) {
        const ProductInventoryOrError = ProductInventory.create({
          sku: skuOrError.getValue(),
          variantName: variantNameOrError.getValue(),
          productId: productIdOrError.getValue().id,
          productAttributeValueId: prodAttributeValueIdOrError.getValue(),
          retailPrice: retailPriceOrError.getValue(),
          weight: weightOrError.getValue(),
          currency: Currency.NGN,
          quantity: quantityOrError.getValue(),
          isActive: true,
        })

        ProductInventoryOrError.isFailure ? console.log(ProductInventoryOrError.error) : ""
        return ProductInventoryOrError.isSuccess ? ProductInventoryOrError : Result.fail<ProductInventory>(ProductInventoryOrError.errorValue())
      } else {
        return Result.fail<ProductInventory>(combinedPropsResult.errorValue())
      }
    })

    return productInventories
  }

  private static createProductInventory(variant: Variant): Result<ProductInventory> {
    const variantNameOrError = VariantName.create(variant.variant_name)
    const skuOrError = Sku.create(variant.variant_name)
    const productIdOrError = UniqueEntityID.isValidId(variant.product_id) ? ProductId.create(new UniqueEntityID(variant.product_id)) : Result.fail<ProductId>("Invalid product id")
    const retailPriceOrError = Price.create(Number(variant.retail_price))
    const weightOrError = Weight.create({ value: 3, unit: Unit.Kilogram })
    const quantityOrError = variant.quantity > 0 ? Result.ok<number>(variant.quantity) : Result.fail<number>("quantity must be more than 0")
    //todo product_type_id and product_brand_id

    const combinedPropsResult = Result.combine([variantNameOrError, skuOrError, productIdOrError, retailPriceOrError, weightOrError, quantityOrError])

    if (!combinedPropsResult.isFailure) {
      const ProductInventoryOrError = ProductInventory.create({
        sku: skuOrError.getValue(),
        variantName: variantNameOrError.getValue(),
        productId: productIdOrError.getValue().id,
        retailPrice: retailPriceOrError.getValue(),
        weight: weightOrError.getValue(),
        currency: Currency.NGN,
        quantity: quantityOrError.getValue(),
        isActive: true,
      })

      ProductInventoryOrError.isFailure ? console.log(ProductInventoryOrError.error) : ""
      return ProductInventoryOrError.isSuccess ? ProductInventoryOrError : Result.fail<ProductInventory>(ProductInventoryOrError.errorValue())
    }

    return Result.fail<ProductInventory>(combinedPropsResult.errorValue())
  }

  private static createTagProductAttributeValues(all_product_inventory: ProductInventory[]): Result<TagProductAttributValue>[] {
    const tagProductAttrValues = all_product_inventory.map((prodInventory) => {
      const tagProdAttrValueOrError = TagProductAttributValue.create({
        productAttributeValueId: prodInventory.productAttributeValueId,
        productInventoryId: prodInventory.ProductInventoryId,
      })

      if (tagProdAttrValueOrError.isSuccess) {
        return Result.ok<TagProductAttributValue>(tagProdAttrValueOrError.getValue())
      }
    })

    return tagProductAttrValues
  }

  public static createAllProductInventoryStock(all_product_inventory: ProductInventory[]): Result<ProductStock>[] {
    const allProduStock = all_product_inventory.map((prodInventory) => {
      const productStockOrError = ProductStock.create({
        productInventoryId: prodInventory.ProductInventoryId,
        units: prodInventory.quantity,
        unitSold: 0,
      })

      if (productStockOrError.isSuccess) {
        return Result.ok<ProductStock>(productStockOrError.getValue())
      }
    })

    return allProduStock
  }

  private static createInventoryImages(img_urls: string[], variant_name: string): Result<ProductImage>[] {
    const productImagesOrError = img_urls.map((img_url) => {
      const imgUrlOrError = Url.create(img_url)
      if (imgUrlOrError.isFailure) {
        return Result.fail<ProductImage>(new CreateProductImageErrors.InvalidImageUrl(img_url).error)
      }

      const productImageorError = ProductImage.create({
        imageUrl: imgUrlOrError.getValue(),
        altText: "edekee img",
        variantName: variant_name,
      })

      if (productImageorError.isFailure) {
        return Result.fail<ProductImage>(productImageorError.error)
      }

      return Result.ok<ProductImage>(productImageorError.getValue())
    })

    return productImagesOrError
  }

  public static getAllProductInventoryFromVariants(variants: VariantsResponse[]): ProductInventory[] {
    const allProdInventory: ProductInventory[] = []

    variants.forEach((v) => {
      allProdInventory.push(...v.productInventories)
    })

    return allProdInventory
  }

  public static getAllProductInventoryStock(productStockResults: Result<ProductStock>[]): ProductStock[] {
    const allProdStock: ProductStock[] = productStockResults.map((stock) => {
      return stock.getValue()
    })

    return allProdStock
  }

  public static getAllProductAttrValuesResultFromVaraints(variants: VariantsResponse[]): Result<TagProductAttributValue>[] {
    const allProdAttrResultVals: Result<TagProductAttributValue>[] = []

    variants.forEach((v) => {
      allProdAttrResultVals.push(...v.productAttributes)
    })

    return allProdAttrResultVals
  }

  public static getAllProductImagesResultFromVaraints(variants: VariantsResponse[]): Result<ProductImage>[] {
    let allProdResultImages: Result<ProductImage>[] = []
    variants.forEach((v) => {
      allProdResultImages = [...v.productImages]
    })
    return allProdResultImages
  }

  public static getAllTagProductAttrFromResults(prod_attr_results: Result<TagProductAttributValue>[]): TagProductAttributValue[] {
    const allProdAttrs: TagProductAttributValue[] = prod_attr_results.map((attr) => {
      return attr.getValue()
    })

    return allProdAttrs
  }

  public static getAllProductImagesFromResults(prod_img_results: Result<ProductImage>[]): ProductImage[] {
    const allProdImages: ProductImage[] = prod_img_results.map((prodImg) => {
      return prodImg.getValue()
    })

    return allProdImages
  }
}
