"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTypeRepo = void 0;
const productTypeMap_1 = require("../mappers/productTypeMap");
class ProductTypeRepo {
    constructor(models) {
        this.DEFAULT_PAGE = 0;
        this.DEFAULT_SIZE = 5;
        this.models = models;
    }
    createBaseQuery() {
        return {
            where: {},
            include: [],
            order: [],
            limit: 0,
            offset: 0
        };
    }
    async getAllProductType() {
        const prodTypes = (await this.models.ProductType.findAll()).map((record) => record.toJSON());
        return prodTypes.map((p) => productTypeMap_1.ProductTypeMap.toDomain(p));
    }
    async exists(name) {
        const baseQuery = this.createBaseQuery();
        baseQuery.where['product_type_name'] = name;
        const productType = await this.models.ProductType.findOne(baseQuery);
        return !!productType === true;
    }
    async save(productType) {
        const ProductTypeModel = this.models.ProductType;
        const exists = await this.exists(productType.name);
        const rawProdType = await productTypeMap_1.ProductTypeMap.toPersistence(productType);
        try {
            if (!exists) {
                // Create new
                await ProductTypeModel.create(rawProdType);
            }
            else {
                // Save old
                const sequelizeProductTypeInstance = await ProductTypeModel.findOne({
                    where: { product_type_name: productType.name }
                });
                await sequelizeProductTypeInstance.update(rawProdType);
            }
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
}
exports.ProductTypeRepo = ProductTypeRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdFR5cGVSZXBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvcmVwb3MvcHJvZHVjdFR5cGVSZXBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDhEQUEyRDtBQVEzRCxNQUFhLGVBQWU7SUFJMUIsWUFBWSxNQUFXO1FBRnZCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBRWYsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVPLGVBQWU7UUFDckIsT0FBTztZQUNMLEtBQUssRUFBRSxFQUFFO1lBQ1QsT0FBTyxFQUFFLEVBQUU7WUFDWCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLENBQUM7U0FDVixDQUFDO0lBQ0osQ0FBQztJQUVNLEtBQUssQ0FBQyxpQkFBaUI7UUFDNUIsTUFBTSxTQUFTLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUU3RixPQUFPLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLCtCQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVNLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBWTtRQUM5QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekMsU0FBUyxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUM1QyxNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRSxPQUFPLENBQUMsQ0FBQyxXQUFXLEtBQUssSUFBSSxDQUFDO0lBQ2hDLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQXdCO1FBQ3hDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDakQsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxNQUFNLFdBQVcsR0FBRyxNQUFNLCtCQUFjLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXBFLElBQUk7WUFDRixJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNYLGFBQWE7Z0JBQ2IsTUFBTSxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDNUM7aUJBQU07Z0JBQ0wsV0FBVztnQkFDWCxNQUFNLDRCQUE0QixHQUFHLE1BQU0sZ0JBQWdCLENBQUMsT0FBTyxDQUFDO29CQUNsRSxLQUFLLEVBQUUsRUFBRSxpQkFBaUIsRUFBRSxXQUFXLENBQUMsSUFBSSxFQUFFO2lCQUMvQyxDQUFDLENBQUM7Z0JBQ0gsTUFBTSw0QkFBNEIsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDeEQ7U0FDRjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztDQUNGO0FBcERELDBDQW9EQyJ9