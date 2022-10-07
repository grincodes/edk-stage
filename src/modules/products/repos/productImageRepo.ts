import { Transaction } from "sequelize/types"
import { ProductImage } from "../domain/productImage"
import { ProductImageMap } from "../mappers/productImageMap"

export interface IProductImageRepo {
  save(productImage: ProductImage): Promise<void>
  saveBulkTranscation(allProductImage: ProductImage[], transaction: Transaction): Promise<void>
}

export class ProductImageRepo implements IProductImageRepo {
  private models: any

  constructor(models: any) {
    this.models = models
  }

  public async save(productImage: ProductImage): Promise<void> {
    const ProductImageModel = this.models.ProductImage
    const rawProductImage = await ProductImageMap.toPersistence(productImage)
    try {
      await ProductImageModel.create(rawProductImage)
    } catch (err) {
      console.log(err)
      throw new Error(err.toString())
    }
  }

  public async saveBulkTranscation(allProductImage: ProductImage[], transaction: Transaction): Promise<void> {
    const ProductImageModel = this.models.ProductImage
    const rawAllProdImages = allProductImage.map((prodImg) => {
      return ProductImageMap.toPersistence(prodImg)
    })
    try {
      await ProductImageModel.bulkCreate(rawAllProdImages, { transaction })
    } catch (err) {
      console.log(err)
      throw new Error(err.toString())
    }
  }
}
