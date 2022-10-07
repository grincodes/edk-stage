import { Shop } from "../domain/shop"
import { ShopId } from "../domain/shopId"
import { ShopMap } from "../mappers/ShopMap"
import { Email } from "../../../shared/domain_types/Email"
import { Transaction } from "sequelize/types"
import { Op } from "sequelize"

export interface IShopRepo {
  findShopById(id: ShopId | string): Promise<Shop>
  exists(shopEmail: Email, shopName: string): Promise<boolean>
  save(shop: Shop): Promise<void>
  saveTransaction(shop: Shop, transaction: Transaction)
  getAllShops(page: number, size: number)
  createTransaction()
}

export class ShopRepo implements IShopRepo {
  private models: any
  public DEFAULT_PAGE = 0
  public DEFAULT_SIZE = 5
  constructor(models: any) {
    this.models = models
  }

  private createBaseQueryPagination() {
    const { models } = this
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
    }
  }

  private createBaseQuery() {
    const { models } = this
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
    }
  }

  public async getAllShops(page = 0, size = 5): Promise<any> {
    const { limit, offset } = this.getPagination(page, size)
    const baseQuery = this.createBaseQueryPagination()

    baseQuery.limit = limit
    baseQuery.offset = offset
    baseQuery.order = [["shop_name"]]

    const shops = await this.models.Shop.findAndCountAll(baseQuery)
    return shops
  }

  public async findShopById(id: string | ShopId): Promise<Shop> {
    const _id = id instanceof ShopId ? (<ShopId>id).id.toValue() : id

    const baseQuery = this.createBaseQuery()
    baseQuery.where["shop_id"] = _id

    const shop = await this.models.Shop.findOne(baseQuery)

    // if (!!shop === true) return ShopMap.toDomain(shop);
    if (!!shop === true) return shop

    return null
  }

  public async exists(shopEmail: Email, shopName: string): Promise<boolean> {
    const shop = await this.models.Shop.findOne({
      where: {
        [Op.or]: [{ shop_email: shopEmail.value.toString() }, { shop_name: shopName }],
      },
    })

    return !!shop === true
  }

  public async save(shop: Shop): Promise<void> {
    const ShopModel = this.models.Shop
    const exists = await this.exists(shop.shopEmail, shop.shopName.value)

    const rawShop = await ShopMap.toPersistence(shop)

    try {
      if (!exists) {
        // Create new
        await ShopModel.create(rawShop)
      } else {
        // Save old
        throw new Error("shop name or email already exist")
      }
    } catch (err) {
      console.log(err)
      throw new Error(err.toString())
    }
  }
  public async saveTransaction(shop: Shop, transaction: Transaction): Promise<void> {
    const ShopModel = this.models.Shop
    const exists = await this.exists(shop.shopEmail, shop.shopName.value)

    const rawShop = await ShopMap.toPersistence(shop)

    try {
      if (!exists) {
        // Create new
        await ShopModel.create(rawShop, { transaction })
      } else {
        throw new Error("shop name or email already exist")
      }
    } catch (err) {
      console.log(err)
      throw new Error(err.toString())
    }
  }

  public async createTransaction() {
    const t = await this.models.sequelize.transaction()
    return t
  }

  private getPagination(page: number, size: number) {
    const limit = +size
    const offset = page * limit

    return { limit, offset }
  }
}
