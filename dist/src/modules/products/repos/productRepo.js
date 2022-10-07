"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepo = void 0;
const shopId_1 = require("../../shop/domain/shopId");
const productId_1 = require("../domain/productId");
const productMap_1 = require("../mappers/productMap");
const sequelize_1 = require("sequelize");
class ProductRepo {
    constructor(models) {
        this.DEFAULT_PAGE = 0;
        this.DEFAULT_SIZE = 5;
        this.getPagination = (page = this.DEFAULT_PAGE, size = this.DEFAULT_SIZE) => {
            const limit = +size;
            const offset = page * limit;
            return { limit, offset };
        };
        this.models = models;
    }
    createBaseQuery() {
        const { models } = this;
        return {
            where: {},
            include: [],
            order: [],
            limit: 0,
            offset: 0,
        };
    }
    async existsInShop(name, shopId) {
        const product = await this.models.Product.findOne({
            where: {
                [sequelize_1.Op.and]: [{ product_name: name }, { shop_id: shopId }],
            },
        });
        return !!product === true;
    }
    async saveTransaction(product, transaction) {
        const ProductModel = this.models.Product;
        const exists = await this.existsInShop(product.productName, product.shopId.id.toString());
        const rawProduct = await productMap_1.ProductMap.toPersistence(product);
        try {
            if (!exists) {
                // Create new
                await ProductModel.create(rawProduct, { transaction });
            }
            else {
                throw new Error("product name already exist in shop");
            }
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
    async getAllProductByShopId(shopId, page = this.DEFAULT_PAGE, size = this.DEFAULT_SIZE) {
        const { limit, offset } = this.getPagination(page, size);
        const _shopId = shopId instanceof shopId_1.ShopId ? shopId.id.toValue() : shopId;
        const baseQuery = this.createBaseQuery();
        baseQuery.limit = limit;
        baseQuery.offset = offset;
        baseQuery.order = [["DESC"]];
        baseQuery.where["shop_id"] = _shopId;
        const products = await this.models.Product.findAndCountAll(baseQuery);
        return products.map((p) => productMap_1.ProductMap.toDomain(p));
    }
    async findProductById(id) {
        const _id = id instanceof productId_1.ProductId ? id.id.toValue() : id;
        const baseQuery = this.createBaseQuery();
        baseQuery.where["product_id"] = _id;
        const product = await this.models.Product.findOne(baseQuery);
        if (!!product === true)
            return productMap_1.ProductMap.toDomain(product);
        return null;
    }
    async findProductByWebId(shopId, webId) {
        const product = await this.models.Product.findOne({
            where: {
                [sequelize_1.Op.and]: [{ product_web_id: webId }, { shop_id: shopId }],
            },
        });
        if (!!product === true)
            return productMap_1.ProductMap.toDomain(product);
        return null;
    }
    async findProductByNameInShop(name, shopId) {
        const _shopId = shopId instanceof shopId_1.ShopId ? shopId.id.toValue() : shopId;
        const product = await this.models.Product.findOne({
            where: {
                [sequelize_1.Op.and]: [{ product_name: name }, { shop_id: _shopId }],
            },
        });
        if (!!product === true)
            return productMap_1.ProductMap.toDomain(product);
        return null;
    }
    async createTransaction() {
        const t = await this.models.sequelize.transaction();
        return t;
    }
}
exports.ProductRepo = ProductRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdFJlcG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9kdWN0cy9yZXBvcy9wcm9kdWN0UmVwby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxREFBaUQ7QUFFakQsbURBQStDO0FBQy9DLHNEQUFrRDtBQUNsRCx5Q0FBOEI7QUFZOUIsTUFBYSxXQUFXO0lBTXRCLFlBQVksTUFBVztRQUh2QixpQkFBWSxHQUFHLENBQUMsQ0FBQTtRQUNoQixpQkFBWSxHQUFHLENBQUMsQ0FBQTtRQTZGaEIsa0JBQWEsR0FBRyxDQUFDLE9BQWUsSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFlLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRTtZQUNyRixNQUFNLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQTtZQUNuQixNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFBO1lBRTNCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUE7UUFDMUIsQ0FBQyxDQUFBO1FBL0ZDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO0lBQ3RCLENBQUM7SUFFTyxlQUFlO1FBQ3JCLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUE7UUFDdkIsT0FBTztZQUNMLEtBQUssRUFBRSxFQUFFO1lBQ1QsT0FBTyxFQUFFLEVBQUU7WUFDWCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLENBQUM7U0FDVixDQUFBO0lBQ0gsQ0FBQztJQUVNLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBWSxFQUFFLE1BQWM7UUFDcEQsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDaEQsS0FBSyxFQUFFO2dCQUNMLENBQUMsY0FBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxZQUFZ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