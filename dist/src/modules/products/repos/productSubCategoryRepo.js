"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSubCategoryRepo = void 0;
const productSubCategoryMap_1 = require("../mappers/productSubCategoryMap");
class ProductSubCategoryRepo {
    constructor(models) {
        this.DEFAULT_PAGE = 0;
        this.DEFAULT_SIZE = 5;
        this.models = models;
    }
    createBaseQuery() {
        return {
            where: {},
            order: [],
            limit: 0,
            offset: 0
        };
    }
    async exists(name) {
        const baseQuery = this.createBaseQuery();
        baseQuery.where['category_name'] = name;
        const productSubCategory = await this.models.ProductSubCategory.findOne(baseQuery);
        return !!productSubCategory === true;
    }
    async save(productSubCategory) {
        const ProducSubCategoryModel = this.models.ProductCategory;
        const exists = await this.exists(productSubCategory.name);
        const rawProdSubCat = await productSubCategoryMap_1.ProductSubCategoryMap.toPersistence(productSubCategory);
        try {
            if (!exists) {
                // Create new
                await ProducSubCategoryModel.create(rawProdSubCat);
            }
            else {
                // Save old
                const sequelizeSubCategoryInstance = await ProducSubCategoryModel.findOne({
                    where: { name: productSubCategory.name }
                });
                await sequelizeSubCategoryInstance.update(rawProdSubCat);
            }
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
}
exports.ProductSubCategoryRepo = ProductSubCategoryRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdFN1YkNhdGVnb3J5UmVwby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3JlcG9zL3Byb2R1Y3RTdWJDYXRlZ29yeVJlcG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsNEVBQXlFO0FBT3pFLE1BQWEsc0JBQXNCO0lBS2pDLFlBQVksTUFBVztRQUh2QixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUdmLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxlQUFlO1FBQ3JCLE9BQU87WUFDTCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxFQUFFO1lBQ1QsS0FBSyxFQUFFLENBQUM7WUFDUixNQUFNLEVBQUUsQ0FBQztTQUNWLENBQUM7SUFDSixDQUFDO0lBRU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFZO1FBQzlCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QyxTQUFTLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN4QyxNQUFNLGtCQUFrQixHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkYsT0FBTyxDQUFDLENBQUMsa0JBQWtCLEtBQUssSUFBSSxDQUFDO0lBQ3ZDLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLGtCQUFzQztRQUN0RCxNQUFNLHNCQUFzQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDO1FBQzNELE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxRCxNQUFNLGFBQWEsR0FBRyxNQUFNLDZDQUFxQixDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRXBGLElBQUk7WUFDRixJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNYLGFBQWE7Z0JBQ2IsTUFBTSxzQkFBc0IsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDcEQ7aUJBQU07Z0JBQ0wsV0FBVztnQkFDWCxNQUFNLDRCQUE0QixHQUFHLE1BQU0sc0JBQXNCLENBQUMsT0FBTyxDQUFDO29CQUN4RSxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLENBQUMsSUFBSSxFQUFFO2lCQUN6QyxDQUFDLENBQUM7Z0JBQ0gsTUFBTSw0QkFBNEIsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDMUQ7U0FDRjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztDQUNGO0FBOUNELHdEQThDQyJ9