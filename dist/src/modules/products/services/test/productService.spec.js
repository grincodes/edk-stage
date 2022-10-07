"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UniqueEntityID_1 = require("../../../../core/domain/UniqueEntityID");
const Result_1 = require("../../../../core/logic/Result");
const Url_1 = require("../../../../shared/domain_types/Url");
const TextUtils_1 = require("../../../../utils/TextUtils");
const shopId_1 = require("../../../shop/domain/shopId");
const product_1 = require("../../domain/product");
const product360Video_1 = require("../../domain/product360Video");
const productCategoryId_1 = require("../../domain/productCategoryId");
const slug_1 = require("../../domain/slug");
const productService_1 = require("../productService");
let productDTO = {
    product_name: "gucci top",
    product_description: "gucci mane top",
    product_category_id: "e89abbb8-4607-4812-a697-97ee359a5287",
    shop_id: "0dde96fa-8d6b-4c5e-8db8-b8ee8017771f",
    product_360_video_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
    variants: [
        {
            variant_name: "red-velvet",
            retail_price: 0,
            sizes: [{
                    attr_val_id: "d988475c-9093-4c1f-9fb7-7116a6dfbd62",
                    price: 3000,
                    quantity: 40
                }],
            images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"]
        },
        {
            variant_name: "blue-velvet",
            retail_price: 0,
            sizes: [{
                    attr_val_id: "d988475c-9093-4c1f-9fb7-7116a6dfbd62",
                    price: 3000,
                    quantity: 40
                }],
            images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"]
        },
        {
            variant_name: "red-velvet",
            retail_price: 0,
            sizes: [{
                    attr_val_id: "d988475c-9093-4c1f-9fb7-7116a6dfbd62",
                    price: 2000,
                    quantity: 20
                }],
            images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"]
        },
    ]
};
describe("Product Service", () => {
    beforeEach(() => {
        productDTO;
    });
    it("should return an array of 3 objects if dto is valid", () => {
        // craft out product from dto
        let product = craftProductFromDTO(productDTO);
        let product360Video = product != null ? craftProduct360Video(productDTO.product_360_video_url, product.id) : null;
        let res = productService_1.ProductService.validateAllVariants(productDTO.variants, product.productId);
        if (res.isLeft()) {
            throw new Error("product validation error");
        }
        expect(res.value).toHaveLength(3);
    });
    // it("should throw if product category is invalid",()=>{
    //     //invalid prod cat
    //     productDTO.product_category_id = "lmb"
    //     // craft out product from dto
    //     expect(()=>{
    //         craftProductFromDTO(productDTO)
    //     }).toThrow()
    // })
    // it("should throw if product service cannot validate productDto",()=>{
    //     // craft out product from dto
    //     let product = craftProductFromDTO(productDTO)
    //     // invalid prod variant name
    //     productDTO.variants[0].variant_name=""
    //     let res =ProductService.validateAllVariants(productDTO.variants,product.productId)
    //     expect(()=>{
    //         validateVariants(res)
    //     }).toThrow()
    // })
});
function craftProductFromDTO(req) {
    const productSlug = slug_1.Slug.create(req.product_name);
    const shopIdOrError = UniqueEntityID_1.UniqueEntityID.isValidId(req.shop_id) ? shopId_1.ShopId.create(new UniqueEntityID_1.UniqueEntityID(req.shop_id)) : Result_1.Result.fail('Invalid shop id');
    const productCategoryIdOrError = UniqueEntityID_1.UniqueEntityID.isValidId(req.product_category_id)
        ? productCategoryId_1.ProductCategoryId.create(new UniqueEntityID_1.UniqueEntityID(req.product_category_id))
        : Result_1.Result.fail('Invalid category id');
    const productWebId = TextUtils_1.TextUtils.createRandomNumericString(7);
    const combinedPropsResult = Result_1.Result.combine([shopIdOrError, productCategoryIdOrError]);
    if (combinedPropsResult.isFailure) {
        throw new Error(combinedPropsResult.error);
    }
    const productOrError = product_1.Product.create({
        productName: req.product_name,
        productDescription: req.product_description,
        productCategoryId: productCategoryIdOrError.getValue(),
        shopId: shopIdOrError.getValue(),
        productWebId: Number(productWebId),
        productSlug: productSlug.getValue(),
        isActive: true
    });
    if (productOrError.isFailure) {
        throw new Error(productOrError.error.toString());
    }
    const product = productOrError.getValue();
    return product;
}
function craftProduct360Video(product_360_video_url, product_id) {
    const v360UrlOrError = Url_1.Url.create(product_360_video_url);
    if (v360UrlOrError.isFailure) {
        throw new Error(v360UrlOrError.error.toString());
    }
    const product360VideoOrError = product360Video_1.Product360Video.create({
        productId: product_id,
        url: v360UrlOrError.getValue()
    });
    if (product360VideoOrError.isFailure) {
        throw new Error(product360VideoOrError.error.toString());
    }
    const product360Video = product360VideoOrError.getValue();
    return product360Video;
}
function validateVariants(res) {
    if (res.isLeft()) {
        throw new Error(res.error.toString());
    }
    return res.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdFNlcnZpY2Uuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3NlcnZpY2VzL3Rlc3QvcHJvZHVjdFNlcnZpY2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJFQUF3RTtBQUN4RSwwREFBdUQ7QUFDdkQsNkRBQTBEO0FBQzFELDJEQUF3RDtBQUN4RCx3REFBcUQ7QUFDckQsa0RBQStDO0FBQy9DLGtFQUErRDtBQUMvRCxzRUFBbUU7QUFDbkUsNENBQXlDO0FBRXpDLHNEQUFxRTtBQUVyRSxJQUFJLFVBQVUsR0FBRztJQUNkLFlBQVksRUFBRSxXQUFXO0lBQzFCLG1CQUFtQixFQUFFLGdCQUFnQjtJQUNyQyxtQkFBbUIsRUFBRSxzQ0FBc0M7SUFDM0QsT0FBTyxFQUFFLHNDQUFzQztJQUMvQyxxQkFBcUIsRUFBRSw2SUFBNkk7SUFDcEssUUFBUSxFQUFFO1FBQ047WUFDRSxZQUFZLEVBQUUsWUFBWTtZQUMxQixZQUFZLEVBQUUsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDO29CQUNKLFdBQVcsRUFBQyxzQ0FBc0M7b0JBQ2xELEtBQUssRUFBQyxJQUFJO29CQUNWLFFBQVEsRUFBQyxFQUFFO2lCQUNkLENBQUM7WUFDRixNQUFNLEVBQUUsQ0FBQyw2SUFBNkksQ0FBQztTQUN4SjtRQUVEO1lBQ0UsWUFBWSxFQUFFLGFBQWE7WUFDM0IsWUFBWSxFQUFFLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQztvQkFDSixXQUFXLEVBQUMsc0NBQXNDO29CQUNsRCxLQUFLLEVBQUMsSUFBSTtvQkFDVixRQUFRLEVBQUMsRUFBRTtpQkFDZCxDQUFDO1lBQ0YsTUFBTSxFQUFFLENBQUMsNklBQTZJLENBQUM7U0FDeEo7UUFFRDtZQUNFLFlBQVksRUFBRSxZQUFZO1lBQzFCLFlBQVksRUFBRSxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUM7b0JBQ0osV0FBVyxFQUFDLHNDQUFzQztvQkFDbEQsS0FBSyxFQUFDLElBQUk7b0JBQ1YsUUFBUSxFQUFDLEVBQUU7aUJBQ2QsQ0FBQztZQUNGLE1BQU0sRUFBRSxDQUFDLDZJQUE2SSxDQUFDO1NBQ3hKO0tBRUo7Q0FDRixDQUFBO0FBSUQsUUFBUSxDQUFDLGlCQUFpQixFQUFDLEdBQUUsRUFBRTtJQUMzQixVQUFVLENBQUMsR0FBRSxFQUFFO1FBQ1gsVUFBVSxDQUFBO0lBQ2QsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMscURBQXFELEVBQUMsR0FBRSxFQUFFO1FBRXpELDZCQUE2QjtRQUM3QixJQUFJLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUU3QyxJQUFJLGVBQWUsR0FDbkIsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLHFCQUFxQixFQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUEsSUFBSSxDQUFBO1FBRXhGLElBQUksR0FBRyxHQUFFLCtCQUFjLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFbEYsSUFBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUM7WUFDWixNQUFNLElBQUksS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7U0FFL0M7UUFJRCxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUVyQyxDQUFDLENBQUMsQ0FBQTtJQUVGLHlEQUF5RDtJQUN6RCx5QkFBeUI7SUFDekIsNkNBQTZDO0lBQzdDLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsMENBQTBDO0lBQzFDLG1CQUFtQjtJQUVuQixLQUFLO0lBRUwsd0VBQXdFO0lBQ3hFLG9DQUFvQztJQUNwQyxvREFBb0Q7SUFFcEQsbUNBQW1DO0lBQ25DLDZDQUE2QztJQUM3Qyx5RkFBeUY7SUFFekYsbUJBQW1CO0lBQ25CLGdDQUFnQztJQUNoQyxtQkFBbUI7SUFDbkIsS0FBSztBQUtULENBQUMsQ0FBQyxDQUFBO0FBS0YsU0FBUyxtQkFBbUIsQ0FBQyxHQUFvQjtJQUU3QyxNQUFNLFdBQVcsR0FBRyxXQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsRCxNQUFNLGFBQWEsR0FBRywrQkFBYyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSwrQkFBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFNLENBQUMsSUFBSSxDQUFTLGlCQUFpQixDQUFDLENBQUM7SUFFdEosTUFBTSx3QkFBd0IsR0FBRywrQkFBYyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUM7UUFDaEYsQ0FBQyxDQUFDLHFDQUFpQixDQUFDLE1BQU0sQ0FBQyxJQUFJLCtCQUFjLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDdkUsQ0FBQyxDQUFDLGVBQU0sQ0FBQyxJQUFJLENBQW9CLHFCQUFxQixDQUFDLENBQUM7SUFFMUQsTUFBTSxZQUFZLEdBQUcscUJBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU1RCxNQUFNLG1CQUFtQixHQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFhLEVBQUUsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO0lBRXRGLElBQUksbUJBQW1CLENBQUMsU0FBUyxFQUFFO1FBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7S0FFNUM7SUFFRCxNQUFNLGNBQWMsR0FBRyxpQkFBTyxDQUFDLE1BQU0sQ0FBQztRQUNwQyxXQUFXLEVBQUUsR0FBRyxDQUFDLFlBQVk7UUFDN0Isa0JBQWtCLEVBQUUsR0FBRyxDQUFDLG1CQUFtQjtRQUMzQyxpQkFBaUIsRUFBRSx3QkFBd0IsQ0FBQyxRQUFRLEVBQUU7UUFDdEQsTUFBTSxFQUFFLGFBQWEsQ0FBQyxRQUFRLEVBQUU7UUFDaEMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFDbEMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxRQUFRLEVBQUU7UUFDbkMsUUFBUSxFQUFFLElBQUk7S0FDZixDQUFDLENBQUM7SUFFSCxJQUFJLGNBQWMsQ0FBQyxTQUFTLEVBQUU7UUFDNUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7S0FFbEQ7SUFFRCxNQUFNLE9BQU8sR0FBWSxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUM7SUFFcEQsT0FBTyxPQUFPLENBQUE7QUFFakIsQ0FBQztBQUVELFNBQVMsb0JBQW9CLENBQUMscUJBQTRCLEVBQUMsVUFBeUI7SUFDL0UsTUFBTSxjQUFjLEdBQUcsU0FBRyxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBRTFELElBQUksY0FBYyxDQUFDLFNBQVMsRUFBRTtRQUMzQixNQUFNLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztLQUVuRDtJQUVELE1BQU0sc0JBQXNCLEdBQUcsaUNBQWUsQ0FBQyxNQUFNLENBQUM7UUFDcEQsU0FBUyxFQUFFLFVBQVU7UUFDckIsR0FBRyxFQUFFLGNBQWMsQ0FBQyxRQUFRLEVBQUU7S0FDL0IsQ0FBQyxDQUFDO0lBRUgsSUFBSSxzQkFBc0IsQ0FBQyxTQUFTLEVBQUU7UUFDcEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztLQUUxRDtJQUVELE1BQU0sZUFBZSxHQUFHLHNCQUFzQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFELE9BQU8sZUFBZSxDQUFBO0FBRTFCLENBQUM7QUFFRCxTQUFTLGdCQUFnQixDQUFDLEdBQUc7SUFDekIsSUFBRyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUM7UUFDWixNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztLQUN6QztJQUNELE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQTtBQUNwQixDQUFDIn0=