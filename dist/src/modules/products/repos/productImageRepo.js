"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductImageRepo = void 0;
const productImageMap_1 = require("../mappers/productImageMap");
class ProductImageRepo {
    constructor(models) {
        this.models = models;
    }
    async save(productImage) {
        const ProductImageModel = this.models.ProductImage;
        const rawProductImage = await productImageMap_1.ProductImageMap.toPersistence(productImage);
        try {
            await ProductImageModel.create(rawProductImage);
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
    async saveBulkTranscation(allProductImage, transaction) {
        const ProductImageModel = this.models.ProductImage;
        const rawAllProdImages = allProductImage.map((prodImg) => {
            return productImageMap_1.ProductImageMap.toPersistence(prodImg);
        });
        try {
            await ProductImageModel.bulkCreate(rawAllProdImages, { transaction });
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
}
exports.ProductImageRepo = ProductImageRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdEltYWdlUmVwby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3JlcG9zL3Byb2R1Y3RJbWFnZVJlcG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsZ0VBQTREO0FBTzVELE1BQWEsZ0JBQWdCO0lBRzNCLFlBQVksTUFBVztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtJQUN0QixDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FBQyxZQUEwQjtRQUMxQyxNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFBO1FBQ2xELE1BQU0sZUFBZSxHQUFHLE1BQU0saUNBQWUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDekUsSUFBSTtZQUNGLE1BQU0saUJBQWlCLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFBO1NBQ2hEO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7U0FDaEM7SUFDSCxDQUFDO0lBRU0sS0FBSyxDQUFDLG1CQUFtQixDQUFDLGVBQStCLEVBQUUsV0FBd0I7UUFDeEYsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQTtRQUNsRCxNQUFNLGdCQUFnQixHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUN2RCxPQUFPLGlDQUFlLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQy9DLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSTtZQUNGLE1BQU0saUJBQWlCLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQTtTQUN0RTtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1NBQ2hDO0lBQ0gsQ0FBQztDQUNGO0FBOUJELDRDQThCQyJ9