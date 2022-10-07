"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductInventoryRepo = void 0;
const productInventoryMap_1 = require("../mappers/productInventoryMap");
class ProductInventoryRepo {
    constructor(models) {
        this.models = models;
    }
    async save(productInventory) {
        const ProductInventoryModel = this.models.ProductInventory;
        const rawProductInventory = productInventoryMap_1.ProductInventoryMap.toPersistence(productInventory);
        try {
            await ProductInventoryModel.create(rawProductInventory);
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
    async saveBulkTransaction(allProductInventory, transaction) {
        const ProductInventoryModel = this.models.ProductInventory;
        const rawAllProductInventory = allProductInventory.map((prodInventory) => {
            return productInventoryMap_1.ProductInventoryMap.toPersistence(prodInventory);
        });
        try {
            await ProductInventoryModel.bulkCreate(rawAllProductInventory, {
                transaction,
            });
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
}
exports.ProductInventoryRepo = ProductInventoryRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdEludmVudG9yeVJlcG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9kdWN0cy9yZXBvcy9wcm9kdWN0SW52ZW50b3J5UmVwby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSx3RUFBb0U7QUFPcEUsTUFBYSxvQkFBb0I7SUFHL0IsWUFBWSxNQUFXO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0lBQ3RCLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLGdCQUFrQztRQUNsRCxNQUFNLHFCQUFxQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUE7UUFDMUQsTUFBTSxtQkFBbUIsR0FBRyx5Q0FBbUIsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUUvRSxJQUFJO1lBQ0YsTUFBTSxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtTQUN4RDtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUVoQixNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1NBQ2hDO0lBQ0gsQ0FBQztJQUVNLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBdUMsRUFBRSxXQUF3QjtRQUNoRyxNQUFNLHFCQUFxQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUE7UUFFMUQsTUFBTSxzQkFBc0IsR0FBRyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN2RSxPQUFPLHlDQUFtQixDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUN6RCxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUk7WUFDRixNQUFNLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsRUFBRTtnQkFDN0QsV0FBVzthQUNaLENBQUMsQ0FBQTtTQUNIO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7U0FDaEM7SUFDSCxDQUFDO0NBQ0Y7QUFwQ0Qsb0RBb0NDIn0=