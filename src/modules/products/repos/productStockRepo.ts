import { Transaction } from "sequelize/types"
import { ProductStock } from "../domain/productStock"
import { ProductStockMap } from "../mappers/productStockMap"

export interface IProductStockRepo {
  save(productStock: ProductStock): Promise<void>
  saveBulkTranscation(allProductStock: ProductStock[], transaction: Transaction): Promise<void>
}

export class ProductStockRepo implements IProductStockRepo {
  private models: any

  constructor(models: any) {
    this.models = models
  }

  public async save(productStock: ProductStock): Promise<void> {
    const ProductStockModel = this.models.ProductStock
    const rawProductStock = await ProductStockMap.toPersistence(productStock)
    try {
      await ProductStockModel.create(rawProductStock)
    } catch (err) {
      console.log(err)
      throw new Error(err.toString())
    }
  }

  public async saveBulkTranscation(allProductStock: ProductStock[], transaction: Transaction): Promise<void> {
    const ProductStockModel = this.models.ProductStock
    const rawAllProdStock = allProductStock.map((prodStock) => {
      return ProductStockMap.toPersistence(prodStock)
    })
    try {
      await ProductStockModel.bulkCreate(rawAllProdStock, { transaction })
    } catch (err) {
      console.log(err)
      throw new Error(err.toString())
    }
  }
}
