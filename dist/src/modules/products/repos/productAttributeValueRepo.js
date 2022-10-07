"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAttributeValueRepo = void 0;
const ProductAttributeId_1 = require("../domain/ProductAttributeId");
const productAttributeValueMap_1 = require("../mappers/productAttributeValueMap");
class ProductAttributeValueRepo {
    constructor(models) {
        this.DEFAULT_PAGE = 0;
        this.DEFAULT_SIZE = 5;
        this.models = models;
    }
    createBaseQuery() {
        return {
            where: {},
        };
    }
    async getProductAttributeValuesByAttrID(attribute_id) {
        const _id = attribute_id instanceof ProductAttributeId_1.ProductAttributeId ? attribute_id.id.toValue() : attribute_id;
        const baseQuery = this.createBaseQuery();
        baseQuery.where["attribute_id"] = _id;
        const prodAttrValues = (await this.models.ProductAttributeValue.findAll(baseQuery)).map((record) => record.toJSON());
        return prodAttrValues.map((p) => productAttributeValueMap_1.ProductAttributeValueMap.toDomain(p));
    }
    async exists(name) {
        const baseQuery = this.createBaseQuery();
        baseQuery.where["attribute_value"] = name;
        const productAttributeValue = await this.models.ProductAttributeValue.findOne(baseQuery);
        return !!productAttributeValue === true;
    }
    async save(productAttributeValue) {
        const ProductAttributeValueModel = this.models.ProductAttributeValue;
        const exists = await this.exists(productAttributeValue.attributeValue);
        const rawProdAttr = await productAttributeValueMap_1.ProductAttributeValueMap.toPersistence(productAttributeValue);
        try {
            if (!exists) {
                // Create new
                await ProductAttributeValueModel.create(rawProdAttr);
            }
            else {
                // Save old
                const sequelizeProdAttrInstance = await ProductAttributeValueModel.findOne({
                    where: { attribute_value: productAttributeValue.attributeValue },
                });
                await sequelizeProdAttrInstance.update(rawProdAttr);
            }
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
}
exports.ProductAttributeValueRepo = ProductAttributeValueRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdEF0dHJpYnV0ZVZhbHVlUmVwby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3JlcG9zL3Byb2R1Y3RBdHRyaWJ1dGVWYWx1ZVJlcG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQWlFO0FBRWpFLGtGQUE4RTtBQVE5RSxNQUFhLHlCQUF5QjtJQUlwQyxZQUFZLE1BQVc7UUFGdkIsaUJBQVksR0FBRyxDQUFDLENBQUE7UUFDaEIsaUJBQVksR0FBRyxDQUFDLENBQUE7UUFFZCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtJQUN0QixDQUFDO0lBRU8sZUFBZTtRQUNyQixPQUFPO1lBQ0wsS0FBSyxFQUFFLEVBQUU7U0FDVixDQUFBO0lBQ0gsQ0FBQztJQUVNLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxZQUF5QztRQUN0RixNQUFNLEdBQUcsR0FBRyxZQUFZLFlBQVksdUNBQWtCLENBQUMsQ0FBQyxDQUFzQixZQUFhLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUE7UUFFdkgsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO1FBQ3hDLFNBQVMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEdBQUcsR0FBRyxDQUFBO1FBRXJDLE1BQU0sY0FBYyxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7UUFFcEgsT0FBTyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxtREFBd0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUN4RSxDQUFDO0lBRU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFZO1FBQzlCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtRQUN4QyxTQUFTLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsSUFBSSxDQUFBO1FBQ3pDLE1BQU0scUJBQXFCLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN4RixPQUFPLENBQUMsQ0FBQyxxQkFBcUIsS0FBSyxJQUFJLENBQUE7SUFDekMsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMscUJBQTRDO1FBQzVELE1BQU0sMEJBQTBCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQTtRQUNwRSxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDdEUsTUFBTSxXQUFXLEdBQUcsTUFBTSxtREFBd0IsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQTtRQUV2RixJQUFJO1lBQ0YsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWCxhQUFhO2dCQUNiLE1BQU0sMEJBQTBCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2FBQ3JEO2lCQUFNO2dCQUNMLFdBQVc7Z0JBQ1gsTUFBTSx5QkFBeUIsR0FBRyxNQUFNLDBCQUEwQixDQUFDLE9BQU8sQ0FBQztvQkFDekUsS0FBSyxFQUFFLEVBQUUsZUFBZSxFQUFFLHFCQUFxQixDQUFDLGNBQWMsRUFBRTtpQkFDakUsQ0FBQyxDQUFBO2dCQUNGLE1BQU0seUJBQXlCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2FBQ3BEO1NBQ0Y7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtTQUNoQztJQUNILENBQUM7Q0FDRjtBQXJERCw4REFxREMifQ==