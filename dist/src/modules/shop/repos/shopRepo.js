"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopRepo = void 0;
const shopId_1 = require("../domain/shopId");
const ShopMap_1 = require("../mappers/ShopMap");
const sequelize_1 = require("sequelize");
class ShopRepo {
    constructor(models) {
        this.DEFAULT_PAGE = 0;
        this.DEFAULT_SIZE = 5;
        this.models = models;
    }
    createBaseQueryPagination() {
        const { models } = this;
        return {
            where: {},
            include: [
                {
                    model: models.ShopLocation,
                    as: "ShopLocation",
                    required: false,
                },
                {
                    model: models.LocalDeliveryPartner,
                    as: "LocalDeliveryPartner",
                    required: false,
                },
                {
                    model: models.InternationalDeliveryPartner,
                    as: "InternationalDeliveryPartner",
                    required: false,
                },
            ],
            order: [],
            limit: 0,
            offset: 0,
        };
    }
    createBaseQuery() {
        const { models } = this;
        return {
            where: {},
            include: [
                {
                    model: models.ShopLocation,
                    as: "ShopLocation",
                    required: false,
                },
                {
                    model: models.LocalDeliveryPartner,
                    as: "LocalDeliveryPartner",
                    required: false,
                },
                {
                    model: models.InternationalDeliveryPartner,
                    as: "InternationalDeliveryPartner",
                    required: false,
                },
            ],
            order: [],
        };
    }
    async getAllShops(page = 0, size = 5) {
        const { limit, offset } = this.getPagination(page, size);
        const baseQuery = this.createBaseQueryPagination();
        baseQuery.limit = limit;
        baseQuery.offset = offset;
        baseQuery.order = [["shop_name"]];
        const shops = await this.models.Shop.findAndCountAll(baseQuery);
        return shops;
    }
    async findShopById(id) {
        const _id = id instanceof shopId_1.ShopId ? id.id.toValue() : id;
        const baseQuery = this.createBaseQuery();
        baseQuery.where["shop_id"] = _id;
        const shop = await this.models.Shop.findOne(baseQuery);
        // if (!!shop === true) return ShopMap.toDomain(shop);
        if (!!shop === true)
            return shop;
        return null;
    }
    async exists(shopEmail, shopName) {
        const shop = await this.models.Shop.findOne({
            where: {
                [sequelize_1.Op.or]: [{ shop_email: shopEmail.value.toString() }, { shop_name: shopName }],
            },
        });
        return !!shop === true;
    }
    async save(shop) {
        const ShopModel = this.models.Shop;
        const exists = await this.exists(shop.shopEmail, shop.shopName.value);
        const rawShop = await ShopMap_1.ShopMap.toPersistence(shop);
        try {
            if (!exists) {
                // Create new
                await ShopModel.create(rawShop);
            }
            else {
                // Save old
                throw new Error("shop name or email already exist");
            }
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
    async saveTransaction(shop, transaction) {
        const ShopModel = this.models.Shop;
        const exists = await this.exists(shop.shopEmail, shop.shopName.value);
        const rawShop = await ShopMap_1.ShopMap.toPersistence(shop);
        try {
            if (!exists) {
                // Create new
                await ShopModel.create(rawShop, { transaction });
            }
            else {
                throw new Error("shop name or email already exist");
            }
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
    async createTransaction() {
        const t = await this.models.sequelize.transaction();
        return t;
    }
    getPagination(page, size) {
        const limit = +size;
        const offset = page * limit;
        return { limit, offset };
    }
}
exports.ShopRepo = ShopRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcFJlcG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zaG9wL3JlcG9zL3Nob3BSZXBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDZDQUF5QztBQUN6QyxnREFBNEM7QUFHNUMseUNBQThCO0FBVzlCLE1BQWEsUUFBUTtJQUluQixZQUFZLE1BQVc7UUFGaEIsaUJBQVksR0FBRyxDQUFDLENBQUE7UUFDaEIsaUJBQVksR0FBRyxDQUFDLENBQUE7UUFFckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7SUFDdEIsQ0FBQztJQUVPLHlCQUF5QjtRQUMvQixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFBO1FBQ3ZCLE9BQU87WUFDTCxLQUFLLEVBQUUsRUFBRTtZQUNULE9BQU8sRUFBRTtnQkFDUDtvQkFDRSxLQUFLLEVBQUUsTUFBTSxDQUFDLFlBQVk7b0JBQzFCLEVBQUUsRUFBRSxjQUFjO29CQUNsQixRQUFRLEVBQUUsS0FBSztpQkFDaEI7Z0JBRUQ7b0JBQ0UsS0FBSyxFQUFFLE1BQU0sQ0FBQyxvQkFBb0I7b0JBQ2xDLEVBQUUsRUFBRSxzQkFBc0I7b0JBQzFCLFFBQVEsRUFBRSxLQUFLO2lCQUNoQjtnQkFDRDtvQkFDRSxLQUFLLEVBQUUsTUFBTSxDQUFDLDRCQUE0QjtvQkFDMUMsRUFBRSxFQUFFLDhCQUE4QjtvQkFDbEMsUUFBUSxFQUFFLEtBQUs7aUJBQ2hCO2FBQ0Y7WUFDRCxLQUFLLEVBQUUsRUFBRTtZQUNULEtBQUssRUFBRSxDQUFDO1lBQ1IsTUFBTSxFQUFFLENBQUM7U0FDVixDQUFBO0lBQ0gsQ0FBQztJQUVPLGVBQWU7UUFDckIsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQTtRQUN2QixPQUFPO1lBQ0wsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUU7Z0JBQ1A7b0JBQ0UsS0FBSyxFQUFFLE1BQU0sQ0FBQyxZQUFZ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