import { Mapper } from "../../../core/infra/Mapper"
import { ProductImage } from "../domain/productImage"
import { CreateProductImageResponseDTO } from "../useCases/createProductImage/createProductImageDTO"

export class ProductImageMap extends Mapper<ProductImage> {
  public static toPersistence(productImage: ProductImage): any {
    return {
      product_image_id: productImage.id.toString(),
      variant_name: productImage.variantName,
      image_url: productImage.imageUrl.value,
      alt_text: productImage.altText,
      // thumbnail_url: productImage.thumbnailUrl
      thumbnail_url: "thumbnail",
    }
  }

  //   public static toDomain(raw: any): ProductInventory {
  //     const productSlugOrError = Slug.createFromExisting(raw.product_slug);
  //     const shopIdOrError = ShopId.create(raw.shop_id);

  //     const combinedPropsResult = Result.combine([
  //       productSlugOrError,
  //       shopIdOrError,
  //     ]);

  //     if (!combinedPropsResult.isFailure) {
  //       const ProductOrError = Product.create(
  //         {
  //           productName: raw.product_name,
  //           productDescription: raw.product_description,
  //           productSlug: productSlugOrError.getValue(),
  //           productWebId: Number(raw.product_web_id),
  //           shopId: shopIdOrError.getValue(),
  //           isActive: raw.is_active,
  //         },
  //         new UniqueEntityID(raw.product_id)
  //       );

  //       ProductOrError.isFailure ? console.log(ProductOrError.error) : "";
  //       return ProductOrError.isSuccess ? ProductOrError.getValue() : null;
  //     }

  //     return combinedPropsResult.errorValue();
  //   }

  public static toResponeDto(productImage: ProductImage): CreateProductImageResponseDTO {
    const response = {
      id: productImage.id.toString(),
      image_url: productImage.imageUrl.value,
    }

    return response
  }
}
