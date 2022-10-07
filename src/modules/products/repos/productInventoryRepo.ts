import { Transaction } from "sequelize/types"
import { ProductInventory } from "../domain/productInventory"
import { ProductInventoryMap } from "../mappers/productInventoryMap"

export interface IProductInventoryRepo {
  save(productInventory: ProductInventory)
  saveBulkTransaction(allProductInventory: ProductInventory[], transaction: Transaction)
}

export class ProductInventoryRepo implements IProductInventoryRepo {
  private models: any

  constructor(models: any) {
    this.models = models
  }

  public async save(productInventory: ProductInventory): Promise<void> {
    const ProductInventoryModel = this.models.ProductInventory
    const rawProductInventory = ProductInventoryMap.toPersistence(productInventory)

    try {
      await ProductInventoryModel.create(rawProductInventory)
    } catch (err) {
      console.log(err)

      throw new Error(err.toString())
    }
  }

  public async saveBulkTransaction(allProductInventory: ProductInventory[], transaction: Transaction): Promise<void> {
    const ProductInventoryModel = this.models.ProductInventory

    const rawAllProductInventory = allProductInventory.map((prodInventory) => {
      return ProductInventoryMap.toPersistence(prodInventory)
    })

    try {
      await ProductInventoryModel.bulkCreate(rawAllProductInventory, {
        transaction,
      })
    } catch (err) {
      console.log(err)
      throw new Error(err.toString())
    }
  }
}
