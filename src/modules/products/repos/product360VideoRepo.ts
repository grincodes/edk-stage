import { Transaction } from "sequelize/types"
import { Product360Video } from "../domain/product360Video"
import { Product360VideoMap } from "../mappers/product360VideoMap"

export interface IProduct360VideoRepo {
  save(product360Video: Product360Video): Promise<void>
  saveTransaction(product360Video: Product360Video, transaction: Transaction): Promise<void>
}

export class Product360VideoRepo implements IProduct360VideoRepo {
  private models: any

  constructor(models: any) {
    this.models = models
  }

  public async save(product360Video: Product360Video): Promise<void> {
    const Product360VideoModel = this.models.Product360Video
    const rawProduct360Video = await Product360VideoMap.toPersistence(product360Video)
    try {
      await Product360VideoModel.create(rawProduct360Video)
    } catch (err) {
      throw new Error(err.toString())
    }
  }

  public async saveTransaction(product360Video: Product360Video, transaction: Transaction): Promise<void> {
    const Product360VideoModel = this.models.Product360Video
    const rawProduct360Video = await Product360VideoMap.toPersistence(product360Video)
    console.log("rawProduct360", rawProduct360Video)

    try {
      await Product360VideoModel.create(rawProduct360Video, { transaction })
    } catch (err) {
      console.log(err)

      throw new Error(err.toString())
    }
  }
}
