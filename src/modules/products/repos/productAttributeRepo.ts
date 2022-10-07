import { ProductAttribute } from "../domain/productAttribute"
import { ProductAttributeMap } from "../mappers/productAttributeMap"

export interface IProductAttributeRepo {
  exists(name: string): Promise<boolean>
  save(productAttribute: ProductAttribute)
  getAllProductAttribute()
}

export class ProductAttributeRepo implements IProductAttributeRepo {
  private models: any
  DEFAULT_PAGE = 0
  DEFAULT_SIZE = 5
  constructor(models: any) {
    this.models = models
  }

  private createBaseQuery() {
    return {
      where: {},
    }
  }

  private createBaseQueryFetch() {
    const { models } = this
    return {
      where: {},
      include: [
        {
          model: models.ProductAttributeValue,
          as: "ProductAttributeValue",
          required: false,
        },
      ],
      order: [],
      limit: 0,
      offset: 0,
    }
  }

  public async getAllProductAttribute(): Promise<ProductAttribute[]> {
    //todo add  basequery to get product attr values
    const prodAttrs = (await this.models.ProductAttribute.findAll()).map((record) => record.toJSON())

    return prodAttrs.map((p) => ProductAttributeMap.toDomain(p))
  }

  public async exists(name: string): Promise<boolean> {
    const baseQuery = this.createBaseQuery()
    baseQuery.where["attribute_name"] = name
    const productAttribute = await this.models.ProductAttribute.findOne(baseQuery)
    return !!productAttribute === true
  }

  public async save(productAttribute: ProductAttribute): Promise<void> {
    const ProductAttributeModel = this.models.ProductAttribute
    const exists = await this.exists(productAttribute.name)
    const rawProdAttr = await ProductAttributeMap.toPersistence(productAttribute)

    try {
      if (!exists) {
        // Create new
        await ProductAttributeModel.create(rawProdAttr)
      } else {
        // Save old
        const sequelizeProdAttrInstance = await ProductAttributeModel.findOne({
          where: { attribute_name: productAttribute.name },
        })
        await sequelizeProdAttrInstance.update(rawProdAttr)
      }
    } catch (err) {
      console.log(err)
      throw new Error(err.toString())
    }
  }
}
