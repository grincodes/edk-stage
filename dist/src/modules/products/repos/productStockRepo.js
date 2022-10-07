"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductStockRepo = void 0;
const productStockMap_1 = require("../mappers/productStockMap");
class ProductStockRepo {
    constructor(models) {
        this.models = models;
    }
    async save(productStock) {
        const ProductStockModel = this.models.ProductStock;
        const rawProductStock = await productStockMap_1.ProductStockMap.toPersistence(productStock);
        try {
            await ProductStockModel.create(rawProductStock);
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
    async saveBulkTranscation(allProductStock, transaction) {
        const ProductStockModel = this.models.ProductStock;
        const rawAllProdStock = allProductStock.map((prodStock) => {
            return productStockMap_1.ProductStockMap.toPersistence(prodStock);
        });
        try {
            await ProductStockModel.bulkCreate(rawAllProdStock, { transaction });
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
}
exports.ProductStockRepo = ProductStockRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdFN0b2NrUmVwby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3JlcG9zL3Byb2R1Y3RTdG9ja1JlcG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsZ0VBQTREO0FBTzVELE1BQWEsZ0JBQWdCO0lBRzNCLFlBQVksTUFBVztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtJQUN0QixDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FBQyxZQUEwQjtRQUMxQyxNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFBO1FBQ2xELE1BQU0sZUFBZSxHQUFHLE1BQU0saUNBQWUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDekUsSUFBSTtZQUNGLE1BQU0saUJBQWlCLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFBO1NBQ2hEO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7U0FDaEM7SUFDSCxDQUFDO0lBRU0sS0FBSyxDQUFDLG1CQUFtQixDQUFDLGVBQStCLEVBQUUsV0FBd0I7UUFDeEYsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQTtRQUNsRCxNQUFNLGVBQWUsR0FBRyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUU7WUFDeEQsT0FBTyxpQ0FBZSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUNqRCxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUk7WUFDRixNQUFNLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxlQUFlLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFBO1NBQ3JFO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7U0FDaEM7SUFDSCxDQUFDO0NBQ0Y7QUE5QkQsNENBOEJDIn0=