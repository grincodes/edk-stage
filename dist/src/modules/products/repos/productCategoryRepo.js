"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoryRepo = void 0;
const productCategoryId_1 = require("../domain/productCategoryId");
const productCategoryMap_1 = require("../mappers/productCategoryMap");
class ProductCategoryRepo {
    constructor(models) {
        this.DEFAULT_PAGE = 0;
        this.DEFAULT_SIZE = 5;
        this.models = models;
    }
    createBaseQuery() {
        const { models } = this;
        return {
            where: {},
            include: [
                {
                    model: models.ProductSubCategory,
                    as: "ProductSubCategory",
                    required: false,
                },
            ],
            order: [],
            limit: 0,
            offset: 0,
        };
    }
    createBaseQueryWithRelations() {
        const { models } = this;
        return {
            where: {},
            include: [
                {
                    model: models.ProductAttribute,
                    as: "ProductAttribute",
                    required: false,
                },
            ],
            order: [],
            limit: 0,
            offset: 0,
        };
    }
    async getAllProductCategory() {
        const prodCategories = (await this.models.ProductCategory.findAll(this.createBaseQueryWithRelations)).map((record) => record.toJSON());
        return prodCategories.map((p) => productCategoryMap_1.ProductCategoryMap.toDomain(p));
    }
    async findProductCategoryById(id) {
        const _id = id instanceof productCategoryId_1.ProductCategoryId ? id.id.toValue() : id;
        const baseQuery = this.createBaseQuery();
        baseQuery.where["category_id"] = _id;
        const productCategory = await this.models.ProductCategory.findOne(baseQuery);
        if (!!productCategory === true)
            return productCategoryMap_1.ProductCategoryMap.toDomain(productCategory);
        return null;
    }
    async findProductCategoryBySlug(slug) {
        const baseQuery = this.createBaseQuery();
        baseQuery.where["category_slug"] = slug;
        const productCategory = await this.models.ProductCategory.findOne(baseQuery);
        if (!!productCategory === true)
            return productCategoryMap_1.ProductCategoryMap.toDomain(productCategory);
        return null;
    }
    async exists(name) {
        const baseQuery = this.createBaseQuery();
        baseQuery.where["category_name"] = name;
        const productCategory = await this.models.ProductCategory.findOne(baseQuery);
        return !!productCategory === true;
    }
    async save(productCategory) {
        const ProductCategoryModel = this.models.ProductCategory;
        const exists = await this.exists(productCategory.name);
        const rawProdCat = await productCategoryMap_1.ProductCategoryMap.toPersistence(productCategory);
        try {
            if (!exists) {
                // Create new
                await ProductCategoryModel.create(rawProdCat);
            }
            else {
                // Save old
                const sequelizeCategoryInstance = await ProductCategoryModel.findOne({
                    where: { name: productCategory.name },
                });
                await sequelizeCategoryInstance.update(rawProdCat);
            }
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
}
exports.ProductCategoryRepo = ProductCategoryRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdENhdGVnb3J5UmVwby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3JlcG9zL3Byb2R1Y3RDYXRlZ29yeVJlcG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsbUVBQStEO0FBQy9ELHNFQUFrRTtBQVVsRSxNQUFhLG1CQUFtQjtJQUk5QixZQUFZLE1BQVc7UUFGdkIsaUJBQVksR0FBRyxDQUFDLENBQUE7UUFDaEIsaUJBQVksR0FBRyxDQUFDLENBQUE7UUFFZCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtJQUN0QixDQUFDO0lBRU8sZUFBZTtRQUNyQixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFBO1FBQ3ZCLE9BQU87WUFDTCxLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRTtnQkFDUDtvQkFDRSxLQUFLLEVBQUUsTUFBTSxDQUFDLGtCQUFrQjtvQkFDaEMsRUFBRSxFQUFFLG9CQUFvQjtvQkFDeEIsUUFBUSxFQUFFLEtBQUs7aUJBQ2hCO2FBQ0Y7WUFDRCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLENBQUM7U0FDVixDQUFBO0lBQ0gsQ0FBQztJQUVPLDRCQUE0QjtRQUNsQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFBO1FBQ3ZCLE9BQU87WUFDTCxLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRTtnQkFDUDtvQkFDRSxLQUFLLEVBQUUsTUFBTSxDQUFDLGdCQUFnQjtvQkFDOUIsRUFBRSxFQUFFLGtCQUFrQjtvQkFDdEIsUUFBUSxFQUFFLEtBQUs7aUJBQ2hCO2FBQ0Y7WUFDRCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLENBQUM7U0FDVixDQUFBO0lBQ0gsQ0FBQztJQUVNLEtBQUssQ0FBQyxxQkFBcUI7UUFD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