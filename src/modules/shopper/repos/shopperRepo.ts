import { Op } from "sequelize"
import { Shopper } from "../domain/shopper"
import { ShopperMap } from "../mappers/ShopperMap"
import { Transaction } from "sequelize/types"

export interface IShopperRepo {
  findShopperById(id: string): Promise<Shopper>
  findShopperByUserName(userName: string): Promise<Shopper>
  exists(userName: string, userId: string): Promise<boolean>
  save(shopper: Shopper): Promise<void>
  saveTransaction(shopper: Shopper, transaction: Transaction)
  createTransaction()
}

export class ShopperRepo implements IShopperRepo {
  private models: any

  constructor(models: any) {
    this.models = models
  }

  private createBaseQuery() {
    const { models } = this
    return {
      where: {},
      include: [
        {
          model: models.ShopperAddress,
          as: "ShopAddress",
          required: false,
        },
      ],
      order: [],
    }
  }

  public async findShopperById(id: string): Promise<Shopper> {
    const baseQuery = this.createBaseQuery()
    baseQuery.where["shopper_id"] = id

    const shopper = await this.models.Shop.findOne(baseQuery)

    // if (!!shop === true) return ShopMap.toDomain(shop);
    if (!!shopper === true) return shopper

    return null
  }

  public async findShopperByUserName(userName: string): Promise<Shopper> {
    const baseQuery = this.createBaseQuery()
    baseQuery.where["shopper_username"] = userName

    const shopper = await this.models.Shop.findOne(baseQuery)

    // if (!!shop === true) return ShopMap.toDomain(shop);
    if (!!shopper === true) return shopper

    return null
  }

  public async exists(userName: string, userId: string): Promise<boolean> {
    const shopper = await this.models.Shop.findOne({
      where: {
        [Op.or]: [{ shopper_username: userName }, { shopper_user_id: userId }],
      },
    })

    return !!shopper === true
  }

  public async save(shopper: Shopper): Promise<void> {
    const ShopperModel = this.models.Shopper
    const exists = await this.exists(shopper.shopperUserName.value, shopper.userId.id.toString())

    const rawShopper = await ShopperMap.toPersistence(shopper)

    try {
      if (!exists) {
        // Create new
        await ShopperModel.create(rawShopper)
      } else {
        // Save old
        throw new Error("user already has a username")
      }
    } catch (err) {
      console.log(err)
      throw new Error(err.toString())
    }
  }

  public async saveTransaction(shopper: Shopper, transaction: Transaction): Promise<void> {
    const ShopperModel = this.models.Shopper
    const exists = await this.exists(shopper.shopperUserName.value, shopper.userId.id.toString())

    const rawShopper = await ShopperMap.toPersistence(shopper)

    try {
      if (!exists) {
        // Create new
        await ShopperModel.create(rawShopper, { transaction })
      } else {
        // Save old
        throw new Error("user already has a username")
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
}
