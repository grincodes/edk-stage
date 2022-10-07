"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMap = void 0;
const UniqueEntityID_1 = require("../../../core/domain/UniqueEntityID");
const Mapper_1 = require("../../../core/infra/Mapper");
const Result_1 = require("../../../core/logic/Result");
const shopId_1 = require("../../shop/domain/shopId");
const product_1 = require("../domain/product");
const productCategoryId_1 = require("../domain/productCategoryId");
const slug_1 = require("../domain/slug");
class ProductMap extends Mapper_1.Mapper {
    static toPersistence(product) {
        return {
            product_id: product.id.toString(),
            product_name: product.productName,
            category_id: product.productCategoryId.id.toString(),
            product_description: product.productDescription,
            product_slug: product.productSlug.value,
            product_web_id: product.productWebId,
            shop_id: product.shopId.id.toString(),
            is_active: product.isActive,
        };
    }
    static toDomain(raw) {
        const productSlugOrError = slug_1.Slug.createFromExisting(raw.product_slug);
        const productCategoryIdOrError = UniqueEntityID_1.UniqueEntityID.isValidId(raw.product_category_id) ? productCategoryId_1.ProductCategoryId.create(raw.product_category_id) : Result_1.Result.fail("invalid Category Id  ");
        const shopIdOrError = shopId_1.ShopId.create(raw.shop_id);
        const combinedPropsResult = Result_1.Result.combine([productSlugOrError, shopIdOrError, productCategoryIdOrError]);
        if (!combinedPropsResult.isFailure) {
            const ProductOrError = product_1.Product.create({
                productName: raw.product_name,
                productDescription: raw.product_description,
                productCategoryId: productCategoryIdOrError.getValue(),
                productSlug: productSlugOrError.getValue(),
                productWebId: Number(raw.product_web_id),
                shopId: shopIdOrError.getValue(),
                isActive: raw.is_active,
            }, new UniqueEntityID_1.UniqueEntityID(raw.product_id));
            ProductOrError.isFailure ? console.log(ProductOrError.error) : "";
            return ProductOrError.isSuccess ? ProductOrError.getValue() : null;
        }
        return combinedPropsResult.errorValue();
    }
    static toResponeDto(product) {
        const response = {
            id: product.id.toString(),
            name: product.productName,
        };
        return response;
    }
    static toPagination(data, page, limit) {
        const { count: totalProducts, rows: products } = data;
        const currentPage = page ? +page : 0;
        const totalPages = Math.ceil(totalProducts / limit);
        return { totalProducts, products, totalPages, currentPage };
    }
}
exports.ProductMap = ProductMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdE1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL21hcHBlcnMvcHJvZHVjdE1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3RUFBb0U7QUFDcEUsdURBQW1EO0FBQ25ELHVEQUFtRDtBQUNuRCxxREFBaUQ7QUFDakQsK0NBQTJDO0FBQzNDLG1FQUErRDtBQUMvRCx5Q0FBcUM7QUFJckMsTUFBYSxVQUFXLFNBQVEsZUFBZTtJQUN0QyxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQWdCO1FBQzFDLE9BQU87WUFDTCxVQUFVLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDakMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxXQUFXO1lBQ2pDLFdBQVcsRUFBRSxPQUFPLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUNwRCxtQkFBbUIsRUFBRSxPQUFPLENBQUMsa0JBQWtCO1lBQy9DLFlBQVksRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUs7WUFDdkMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxZQUFZO1lBQ3BDLE9BQU8sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDckMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxRQUFRO1NBQzVCLENBQUE7SUFDSCxDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFRO1FBQzdCLE1BQU0sa0JBQWtCLEdBQUcsV0FBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUNwRSxNQUFNLHdCQUF3QixHQUFHLCtCQUFjLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQ0FBaUIsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQU0sQ0FBQyxJQUFJLENBQW9CLHVCQUF1QixDQUFDLENBQUE7UUFDaE0sTUFBTSxhQUFhLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFFaEQsTUFBTSxtQkFBbUIsR0FBRyxlQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLHdCQUF3QixDQUFDLENBQUMsQ0FBQTtRQUV6RyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFO1lBQ2xDLE1BQU0sY0FBYyxHQUFHLGlCQUFPLENBQUMsTUFBTSxDQUNuQztnQkFDRSxXQUFXLEVBQUUsR0FBRyxDQUFDLFlBQVk7Z0JBQzdCLGtCQUFrQixFQUFFLEdBQUcsQ0FBQyxtQkFBbUI7Z0JBQzNDLGlCQUFpQixFQUFFLHdCQUF3QixDQUFDLFFBQVEsRUFBRTtnQkFDdEQsV0FBVyxFQUFFLGtCQUFrQixDQUFDLFFBQVEsRUFBRTtnQkFDMUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDO2dCQUN4QyxNQUFNLEVBQUUsYUFBYSxDQUFDLFFBQVEsRUFBRTtnQkFDaEMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxTQUFTO2FBQ3hCLEVBQ0QsSUFBSSwrQkFBYyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FDbkMsQ0FBQTtZQUVELGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7WUFDakUsT0FBTyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtTQUNuRTtRQUVELE9BQU8sbUJBQW1CLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDekMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBZ0I7UUFDekMsTUFBTSxRQUFRLEdBQUc7WUFDZixFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDekIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxXQUFXO1NBQzFCLENBQUE7UUFFRCxPQUFPLFFBQVEsQ0FBQTtJQUNqQixDQUFDO0lBRU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDL0MsTUFBTSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQTtRQUNyRCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEMsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLENBQUE7UUFFbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxDQUFBO0lBQzdELENBQUM7Q0FDRjtBQTFERCxnQ0EwREMifQ==