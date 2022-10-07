import { UniqueEntityID } from "../../../core/domain/UniqueEntityID"
import { Mapper } from "../../../core/infra/Mapper"
import { Result } from "../../../core/logic/Result"
import { ShopId } from "../../shop/domain/shopId"
import { Product } from "../domain/product"
import { ProductCategoryId } from "../domain/productCategoryId"
import { Slug } from "../domain/slug"
import { CreateProductResponseDTO } from "../useCases/createProduct/createProductDTO"
import { GetPaginatedProductsResponseDTO } from "../useCases/getProducts/getProductsDTO"

export class ProductMap extends Mapper<Product> {
  public static toPersistence(product: Product): any {
    return {
      product_id: product.id.toString(),
      product_name: product.productName,
      category_id: product.productCategoryId.id.toString(),
      product_description: product.productDescription,
      product_slug: product.productSlug.value,
      product_web_id: product.productWebId,
      shop_id: product.shopId.id.toString(),
      is_active: product.isActive,
    }
  }

  public static toDomain(raw: any): Product {
    const productSlugOrError = Slug.createFromExisting(raw.product_slug)
    const productCategoryIdOrError = UniqueEntityID.isValidId(raw.product_category_id) ? ProductCategoryId.create(raw.product_category_id) : Result.fail<ProductCategoryId>("invalid Category Id  ")
    const shopIdOrError = ShopId.create(raw.shop_id)

    const combinedPropsResult = Result.combine([productSlugOrError, shopIdOrError, productCategoryIdOrError])

    if (!combinedPropsResult.isFailure) {
      const ProductOrError = Product.create(
        {
          productName: raw.product_name,
          productDescription: raw.product_description,
          productCategoryId: productCategoryIdOrError.getValue(),
          productSlug: productSlugOrError.getValue(),
          productWebId: Number(raw.product_web_id),
          shopId: shopIdOrError.getValue(),
          isActive: raw.is_active,
        },
        new UniqueEntityID(raw.product_id),
      )

      ProductOrError.isFailure ? console.log(ProductOrError.error) : ""
      return ProductOrError.isSuccess ? ProductOrError.getValue() : null
    }

    return combinedPropsResult.errorValue()
  }

  public static toResponeDto(product: Product): CreateProductResponseDTO {
    const response = {
      id: product.id.toString(),
      name: product.productName,
    }

    return response
  }

  public static toPagination(data: any, page, limit): GetPaginatedProductsResponseDTO {
    const { count: totalProducts, rows: products } = data
    const currentPage = page ? +page : 0
    const totalPages = Math.ceil(totalProducts / limit)

    return { totalProducts, products, totalPages, currentPage }
  }
}
