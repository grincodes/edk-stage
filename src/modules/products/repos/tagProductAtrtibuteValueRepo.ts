import { Transaction } from "sequelize/types"
import { TagProductAttributValue } from "../domain/tagProductAttributeValue"
import { TagProductAttributValueMap } from "../mappers/tagProductAttributesValueMap"

export interface ITagProductAttributeValueRepo {
  save(tagProdAttrVal: TagProductAttributValue): Promise<void>
  saveBulkTransaction(allTagProdAttrValues: TagProductAttributValue[], transaction: Transaction): Promise<void>
}

export class TagProductAttributeValueRepo implements ITagProductAttributeValueRepo {
  private models: any

  constructor(models: any) {
    this.models = models
  }

  public async save(tagProdAttrVal: TagProductAttributValue): Promise<void> {
    const TagProductAttributeValueModel = this.models.TagProductAttributesValue

    const rawTagProdAttrVal = TagProductAttributValueMap.toPersistence(tagProdAttrVal)

    try {
      await TagProductAttributeValueModel.create(rawTagProdAttrVal)
    } catch (err) {
      console.log(err)

      throw new Error(err.toString())
    }
  }

  public async saveBulkTransaction(allTagProdAttrValues: TagProductAttributValue[], transaction: Transaction): Promise<void> {
    const TagProductAttributeValueModel = this.models.TagProductAttributeValue

    const rawAllTagProdAttrValues = allTagProdAttrValues.map((tagProdAttrVal) => {
      return TagProductAttributValueMap.toPersistence(tagProdAttrVal)
    })

    try {
      await TagProductAttributeValueModel.bulkCreate(rawAllTagProdAttrValues, { transaction })
    } catch (err) {
      console.log(err)

      throw new Error(err.toString())
    }
  }
}
