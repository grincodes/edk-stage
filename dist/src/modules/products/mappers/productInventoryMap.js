"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductInventoryMap = void 0;
const UniqueEntityID_1 = require("../../../core/domain/UniqueEntityID");
const Mapper_1 = require("../../../core/infra/Mapper");
const Result_1 = require("../../../core/logic/Result");
const Price_1 = require("../domain/Price");
const productId_1 = require("../domain/productId");
const productInventory_1 = require("../domain/productInventory");
const sku_1 = require("../domain/sku");
const Weight_1 = require("../domain/Weight");
class ProductInventoryMap extends Mapper_1.Mapper {
    static toPersistence(productInventory) {
        return {
            product_inventory_id: productInventory.id.toString(),
            sku: productInventory.sku.value,
            variant_name: productInventory.variantName.value,
            product_id: productInventory.productId.toString(),
            // product_type_id: productInventory.productTypeId.toString(),
            // product_brand_id: productInventory.productBrandId.toString(),
            product_weight: productInventory.weight.value,
            retail_price: productInventory.retailPrice.value,
            store_price: 0,
            currency: "NGN",
            is_active: productInventory.isActive,
        };
    }
    static toDomain(raw) {
        const skuOrError = sku_1.Sku.create(raw.variant_name);
        const productIdOrError = UniqueEntityID_1.UniqueEntityID.isValidId(raw.product_id) ? productId_1.ProductId.create(new UniqueEntityID_1.UniqueEntityID(raw.product_id)) : Result_1.Result.fail("Invalid product id");
        const retailPriceOrError = Price_1.Price.create(Number(raw.retail_price));
        const weightOrError = Weight_1.Weight.create({ value: 3, unit: Weight_1.Unit.Kilogram });
        //todo product_type_id and product_brand_id
        const combinedPropsResult = Result_1.Result.combine([skuOrError, productIdOrError, retailPriceOrError, weightOrError]);
        if (!combinedPropsResult.isFailure) {
            const ProductInventoryOrError = productInventory_1.ProductInventory.create({
                sku: skuOrError.getValue(),
                variantName: raw.variant_name,
                productId: productIdOrError.getValue().id,
                retailPrice: retailPriceOrError.getValue(),
                weight: weightOrError.getValue(),
                currency: productInventory_1.Currency.NGN,
                isActive: true,
            }, new UniqueEntityID_1.UniqueEntityID(raw.product_id));
            ProductInventoryOrError.isFailure ? console.log(ProductInventoryOrError.error) : "";
            return ProductInventoryOrError.isSuccess ? ProductInventoryOrError.getValue() : null;
        }
        return combinedPropsResult.errorValue();
    }
    static toResponeDto(productInventory) {
        const response = {
            id: productInventory.id.toString(),
            name: productInventory.variantName.value,
            sku: productInventory.sku.value,
        };
        return response;
    }
}
exports.ProductInventoryMap = ProductInventoryMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdEludmVudG9yeU1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL21hcHBlcnMvcHJvZHVjdEludmVudG9yeU1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3RUFBb0U7QUFDcEUsdURBQW1EO0FBQ25ELHVEQUFtRDtBQUNuRCwyQ0FBdUM7QUFDdkMsbURBQStDO0FBQy9DLGlFQUF1RTtBQUN2RSx1Q0FBbUM7QUFDbkMsNkNBQStDO0FBRy9DLE1BQWEsbUJBQW9CLFNBQVEsZUFBd0I7SUFDeEQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxnQkFBa0M7UUFDNUQsT0FBTztZQUNMLG9CQUFvQixFQUFFLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDcEQsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxLQUFLO1lBQy9CLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsS0FBSztZQUNoRCxVQUFVLEVBQUUsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTtZQUNqRCw4REFBOEQ7WUFDOUQsZ0VBQWdFO1lBQ2hFLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsS0FBSztZQUM3QyxZQUFZLEVBQUUsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLEtBQUs7WUFDaEQsV0FBVyxFQUFFLENBQUM7WUFDZCxRQUFRLEVBQUUsS0FBSztZQUNmLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQyxRQUFRO1NBQ3JDLENBQUE7SUFDSCxDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFRO1FBQzdCLE1BQU0sVUFBVSxHQUFHLFNBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBRS9DLE1BQU0sZ0JBQWdCLEdBQUcsK0JBQWMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLCtCQUFjLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQU0sQ0FBQyxJQUFJLENBQVksb0JBQW9CLENBQUMsQ0FBQTtRQUV2SyxNQUFNLGtCQUFrQixHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBO1FBQ2pFLE1BQU0sYUFBYSxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtRQUN0RSwyQ0FBMkM7UUFFM0MsTUFBTSxtQkFBbUIsR0FBRyxlQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVSxFQUFFLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLGFBQWEsQ0FBQyxDQUFDLENBQUE7UUFFN0csSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRTtZQUNsQyxNQUFNLHVCQUF1QixHQUFHLG1DQUFnQixDQUFDLE1BQU0sQ0FDckQ7Z0JBQ0UsR0FBRyxFQUFFLFVBQVUsQ0FBQyxRQUFRLEVBQUU7Z0JBQzFCLFdBQVcsRUFBRSxHQUFHLENBQUMsWUFBWTtnQkFDN0IsU0FBUyxFQUFFLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUU7Z0JBQ3pDLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxRQUFRLEVBQUU7Z0JBQzFDLE1BQU0sRUFBRSxhQUFhLENBQUMsUUFBUSxFQUFFO2dCQUNoQyxRQUFRLEVBQUUsMkJBQVEsQ0FBQyxHQUFHO2dCQUN0QixRQUFRLEVBQUUsSUFBSTthQUNmLEVBQ0QsSUFBSSwrQkFBYyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FDbkMsQ0FBQTtZQUVELHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO1lBQ25GLE9BQU8sdUJBQXVCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO1NBQ3JGO1FBRUQsT0FBTyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUN6QyxDQUFDO0lBRU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxnQkFBa0M7UUFDM0QsTUFBTSxRQUFRLEdBQUc7WUFDZixFQUFFLEVBQUUsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUNsQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLEtBQUs7WUFDeEMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxLQUFLO1NBQ2hDLENBQUE7UUFFRCxPQUFPLFFBQVEsQ0FBQTtJQUNqQixDQUFDO0NBQ0Y7QUExREQsa0RBMERDIn0=