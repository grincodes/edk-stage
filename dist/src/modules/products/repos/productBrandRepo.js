"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductBrandRepo = void 0;
const productBrandMap_1 = require("../mappers/productBrandMap");
class ProductBrandRepo {
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
    async getAllProductBrand() {
        const prodBrands = (await this.models.ProductBrand.findAll()).map((record) => record.toJSON());
        return prodBrands.map((p) => productBrandMap_1.ProductBrandMap.toDomain(p));
    }
    async exists(name) {
        const baseQuery = this.createBaseQuery();
        baseQuery.where['product_brand_name'] = name;
        const productBrand = await this.models.ProductBrand.findOne(baseQuery);
        return !!productBrand === true;
    }
    async save(productBrand) {
        const ProductBrandModel = this.models.ProductBrand;
        const exists = await this.exists(productBrand.name);
        const rawProdCat = await productBrandMap_1.ProductBrandMap.toPersistence(productBrand);
        try {
            if (!exists) {
                // Create new
                await ProductBrandModel.create(rawProdCat);
            }
            else {
                // Save old
                const sequelizeBrandInstance = await ProductBrandModel.findOne({
                    where: { product_brand_name: productBrand.name }
                });
                await sequelizeBrandInstance.update(rawProdCat);
            }
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
}
exports.ProductBrandRepo = ProductBrandRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdEJyYW5kUmVwby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3JlcG9zL3Byb2R1Y3RCcmFuZFJlcG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsZ0VBQTZEO0FBUTdELE1BQWEsZ0JBQWdCO0lBSTNCLFlBQVksTUFBVztRQUZ2QixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUVmLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxlQUFlO1FBQ3JCLE9BQU87WUFDTCxLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRSxFQUFFO1lBQ1gsS0FBSyxFQUFFLEVBQUU7WUFDVCxLQUFLLEVBQUUsQ0FBQztZQUNSLE1BQU0sRUFBRSxDQUFDO1NBQ1YsQ0FBQztJQUNKLENBQUM7SUFFTSxLQUFLLENBQUMsa0JBQWtCO1FBQzdCLE1BQU0sVUFBVSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFFL0YsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxpQ0FBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFTSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQVk7UUFDOUIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pDLFNBQVMsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDN0MsTUFBTSxZQUFZLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkUsT0FBTyxDQUFDLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQztJQUNqQyxDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FBQyxZQUEwQjtRQUMxQyxNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ25ELE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsTUFBTSxVQUFVLEdBQUcsTUFBTSxpQ0FBZSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVyRSxJQUFJO1lBQ0YsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWCxhQUFhO2dCQUNiLE1BQU0saUJBQWlCLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzVDO2lCQUFNO2dCQUNMLFdBQVc7Z0JBQ1gsTUFBTSxzQkFBc0IsR0FBRyxNQUFNLGlCQUFpQixDQUFDLE9BQU8sQ0FBQztvQkFDN0QsS0FBSyxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLElBQUksRUFBRTtpQkFDakQsQ0FBQyxDQUFDO2dCQUNILE1BQU0sc0JBQXNCLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ2pEO1NBQ0Y7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7Q0FDRjtBQXBERCw0Q0FvREMifQ==