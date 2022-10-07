"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductAttributeRepo = void 0;
const productAttributeMap_1 = require("../mappers/productAttributeMap");
class ProductAttributeRepo {
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
    createBaseQueryFetch() {
        const { models } = this;
        return {
            where: {},
            include: [
                {
                    model: models.ProductAttributeValue,
                    as: "ProductAttributeValue",
                    required: false,
                },
            ],
            order: [],
            limit: 0,
            offset: 0,
        };
    }
    async getAllProductAttribute() {
        //todo add  basequery to get product attr values
        const prodAttrs = (await this.models.ProductAttribute.findAll()).map((record) => record.toJSON());
        return prodAttrs.map((p) => productAttributeMap_1.ProductAttributeMap.toDomain(p));
    }
    async exists(name) {
        const baseQuery = this.createBaseQuery();
        baseQuery.where["attribute_name"] = name;
        const productAttribute = await this.models.ProductAttribute.findOne(baseQuery);
        return !!productAttribute === true;
    }
    async save(productAttribute) {
        const ProductAttributeModel = this.models.ProductAttribute;
        const exists = await this.exists(productAttribute.name);
        const rawProdAttr = await productAttributeMap_1.ProductAttributeMap.toPersistence(productAttribute);
        try {
            if (!exists) {
                // Create new
                await ProductAttributeModel.create(rawProdAttr);
            }
            else {
                // Save old
                const sequelizeProdAttrInstance = await ProductAttributeModel.findOne({
                    where: { attribute_name: productAttribute.name },
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
exports.ProductAttributeRepo = ProductAttributeRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdEF0dHJpYnV0ZVJlcG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9kdWN0cy9yZXBvcy9wcm9kdWN0QXR0cmlidXRlUmVwby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx3RUFBb0U7QUFRcEUsTUFBYSxvQkFBb0I7SUFJL0IsWUFBWSxNQUFXO1FBRnZCLGlCQUFZLEdBQUcsQ0FBQyxDQUFBO1FBQ2hCLGlCQUFZLEdBQUcsQ0FBQyxDQUFBO1FBRWQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7SUFDdEIsQ0FBQztJQUVPLGVBQWU7UUFDckIsT0FBTztZQUNMLEtBQUssRUFBRSxFQUFFO1NBQ1YsQ0FBQTtJQUNILENBQUM7SUFFTyxvQkFBb0I7UUFDMUIsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQTtRQUN2QixPQUFPO1lBQ0wsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUU7Z0JBQ1A7b0JBQ0UsS0FBSyxFQUFFLE1BQU0sQ0FBQyxxQkFBcUI7b0JBQ25DLEVBQUUsRUFBRSx1QkFBdUI7b0JBQzNCLFFBQVEsRUFBRSxLQUFLO2lCQUNoQjthQUNGO1lBQ0QsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxDQUFDO1NBQ1YsQ0FBQTtJQUNILENBQUM7SUFFTSxLQUFLLENBQUMsc0JBQXNCO1FBQ2pDLGdEQUFnRDtRQUNoRCxNQUFNLFNBQVMsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7UUFFakcsT0FBTyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyx5Q0FBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUM5RCxDQUFDO0lBRU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFZO1FBQzlCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtRQUN4QyxTQUFTLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsSUFBSSxDQUFBO1FBQ3hDLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUM5RSxPQUFPLENBQUMsQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLENBQUE7SUFDcEMsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsZ0JBQWtDO1FBQ2xELE1BQU0scUJBQXFCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQTtRQUMxRCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDdkQsTUFBTSxXQUFXLEdBQUcsTUFBTSx5Q0FBbUIsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUU3RSxJQUFJO1lBQ0YsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWCxhQUFhO2dCQUNiLE1BQU0scUJBQXFCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2FBQ2hEO2lCQUFNO2dCQUNMLFdBQVc7Z0JBQ1gsTUFBTSx5QkFBeUIsR0FBRyxNQUFNLHFCQUFxQixDQUFDLE9BQU8sQ0FBQztvQkFDcEUsS0FBSyxFQUFFLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRTtpQkFDakQsQ0FBQyxDQUFBO2dCQUNGLE1BQU0seUJBQXlCLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO2FBQ3BEO1NBQ0Y7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtTQUNoQztJQUNILENBQUM7Q0FDRjtBQWxFRCxvREFrRUMifQ==