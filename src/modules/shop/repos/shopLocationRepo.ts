import { ShopLocation } from "../domain/shopLocation"
import { ShopLocationMap } from "../mappers/ShopLocationMap"
import { ShopLocationId } from "../domain/shopLocationId"
import { Transaction } from "sequelize/types"

export interface IShopLocationRepo {
  findShopLocationById(id: ShopLocationId | string): Promise<ShopLocation>
  save(shopLocation: ShopLocation): Promise<void>
  saveTransaction(shopLocation: ShopLocation, transaction: Transaction)
}

export class ShopLocationRepo implements IShopLocationRepo {
  private models: any

  constructor(models: any) {
    this.models = models
  }

  public async findShopLocationById(id: string | ShopLocationId): Promise<ShopLocation> {
    const _id = id instanceof ShopLocationId ? (<ShopLocationId>id).id.toValue() : id

    const shopLocation = await this.models.ShopLocation.findByPk(_id)
    if (!!shopLocation === true) return ShopLocationMap.toDomain(shopLocation)

    return null
  }

  public async save(shopLocation: ShopLocation): Promise<void> {
    const ShopLocationModel = this.models.ShopLocation
    const rawShopLocation = await ShopLocationMap.toPersistence(shopLocation)

    try {
      await ShopLocationModel.create(rawShopLocation)
    } catch (err) {
      console.log(err)
      throw new Error(err.toString())
    }
  }

  public async saveTransaction(shopLocation: ShopLocation, transaction: Transaction): Promise<void> {
    const ShopLocationModel = this.models.ShopLocation

    const rawShopLocation = await ShopLocationMap.toPersistence(shopLocation)

    try {
      await ShopLocationModel.create(rawShopLocation, { transaction })
    } catch (err) {
      console.log(err)
      throw new Error(err.toString())
    }
  }
}
