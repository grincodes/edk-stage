import { ProductAttributeId } from "../domain/ProductAttributeId"
import { ProductAttributeValue } from "../domain/productAttributeValue"
import { ProductAttributeValueMap } from "../mappers/productAttributeValueMap"

export interface IProductAttributeValueRepo {
  exists(name: string): Promise<boolean>
  save(productAttributeValue: ProductAttributeValue)
  getProductAttributeValuesByAttrID(attribute_id: ProductAttributeId | string)
}

export class ProductAttributeValueRepo implements IProductAttributeValueRepo {
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

  public async getProductAttributeValuesByAttrID(attribute_id: ProductAttributeId | string): Promise<ProductAttributeValue[]> {
    const _id = attribute_id instanceof ProductAttributeId ? (<ProductAttributeId>attribute_id).id.toValue() : attribute_id

    const baseQuery = this.createBaseQuery()
    baseQuery.where["attribute_id"] = _id

    const prodAttrValues = (await this.models.ProductAttributeValue.findAll(baseQuery)).map((record) => record.toJSON())

    return prodAttrValues.map((p) => ProductAttributeValueMap.toDomain(p))
  }

  public async exists(name: string): Promise<boolean> {
    const baseQuery = this.createBaseQuery()
    baseQuery.where["attribute_value"] = name
    const productAttributeValue = await this.models.ProductAttributeValue.findOne(baseQuery)
    return !!productAttributeValue === true
  }

  public async save(productAttributeValue: ProductAttributeValue): Promise<void> {
    const ProductAttributeValueModel = this.models.ProductAttributeValue
    const exists = await this.exists(productAttributeValue.attributeValue)
    const rawProdAttr = await ProductAttributeValueMap.toPersistence(productAttributeValue)

    try {
      if (!exists) {
        // Create new
        await ProductAttributeValueModel.create(rawProdAttr)
      } else {
        // Save old
        const sequelizeProdAttrInstance = await ProductAttributeValueModel.findOne({
          where: { attribute_value: productAttributeValue.attributeValue },
        })
        await sequelizeProdAttrInstance.update(rawProdAttr)
      }
    } catch (err) {
      console.log(err)
      throw new Error(err.toString())
    }
  }
}
