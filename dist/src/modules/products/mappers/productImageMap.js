"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductImageMap = void 0;
const Mapper_1 = require("../../../core/infra/Mapper");
class ProductImageMap extends Mapper_1.Mapper {
    static toPersistence(productImage) {
        return {
            product_image_id: productImage.id.toString(),
            variant_name: productImage.variantName,
            image_url: productImage.imageUrl.value,
            alt_text: productImage.altText,
            // thumbnail_url: productImage.thumbnailUrl
            thumbnail_url: "thumbnail",
        };
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
    static toResponeDto(productImage) {
        const response = {
            id: productImage.id.toString(),
            image_url: productImage.imageUrl.value,
        };
        return response;
    }
}
exports.ProductImageMap = ProductImageMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdEltYWdlTWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvbWFwcGVycy9wcm9kdWN0SW1hZ2VNYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdURBQW1EO0FBSW5ELE1BQWEsZUFBZ0IsU0FBUSxlQUFvQjtJQUNoRCxNQUFNLENBQUMsYUFBYSxDQUFDLFlBQTBCO1FBQ3BELE9BQU87WUFDTCxnQkFBZ0IsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUM1QyxZQUFZLEVBQUUsWUFBWSxDQUFDLFdBQVc7WUFDdEMsU0FBUyxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsS0FBSztZQUN0QyxRQUFRLEVBQUUsWUFBWSxDQUFDLE9BQU87WUFDOUIsMkNBQTJDO1lBQzNDLGFBQWEsRUFBRSxXQUFXO1NBQzNCLENBQUE7SUFDSCxDQUFDO0lBRUQseURBQXlEO0lBQ3pELDRFQUE0RTtJQUM1RSx3REFBd0Q7SUFFeEQsbURBQW1EO0lBQ25ELDRCQUE0QjtJQUM1Qix1QkFBdUI7SUFDdkIsVUFBVTtJQUVWLDRDQUE0QztJQUM1QywrQ0FBK0M7SUFDL0MsWUFBWTtJQUNaLDJDQUEyQztJQUMzQyx5REFBeUQ7SUFDekQsd0RBQXdEO0lBQ3hELHNEQUFzRDtJQUN0RCw4Q0FBOEM7SUFDOUMscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYiw2Q0FBNkM7SUFDN0MsV0FBVztJQUVYLDJFQUEyRTtJQUMzRSw0RUFBNEU7SUFDNUUsUUFBUTtJQUVSLCtDQUErQztJQUMvQyxNQUFNO0lBRUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxZQUEwQjtRQUNuRCxNQUFNLFFBQVEsR0FBRztZQUNmLEVBQUUsRUFBRSxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUM5QixTQUFTLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLO1NBQ3ZDLENBQUE7UUFFRCxPQUFPLFFBQVEsQ0FBQTtJQUNqQixDQUFDO0NBQ0Y7QUFqREQsMENBaURDIn0=