import { Transaction } from "sequelize/types"
import { ShopperAddress } from "../domain/shopperAddress"
import { ShopperAddressMap } from "../mappers/ShopperAddressMap"

export interface IShopperAddressRepo {
  findShopperAddressById(id: string): Promise<ShopperAddress>
  save(shopperAddress: ShopperAddress): Promise<void>
  saveTransaction(shopperAddress: ShopperAddress, transaction: Transaction)
}

export class ShopperAddressRepo implements IShopperAddressRepo {
  private models: any

  constructor(models: any) {
    this.models = models
  }

  public async findShopperAddressById(id: string): Promise<ShopperAddress> {
    const shopAddress = await this.models.ShopperAddress.findByPk(id)
    if (!!shopAddress === true) return ShopperAddressMap.toDomain(shopAddress)

    return null
  }

  public async save(shopperAddress: ShopperAddress): Promise<void> {
    const ShopperAddressModel = this.models.ShopperAddress
    const rawShopperAddress = await ShopperAddressMap.toPersistence(shopperAddress)

    try {
      await ShopperAddressModel.create(rawShopperAddress)
    } catch (err) {
      console.log(err)
      throw new Error(err.toString())
    }
  }

  public async saveTransaction(shopperAddress: ShopperAddress, transaction: Transaction): Promise<void> {
    const ShopperAddressModel = this.models.ShopperAddress
    const rawShopperAddress = await ShopperAddressMap.toPersistence(shopperAddress)

    try {
      await ShopperAddressModel.create(rawShopperAddress, { transaction })
    } catch (err) {
      console.log(err)
      throw new Error(err.toString())
    }
  }
}
