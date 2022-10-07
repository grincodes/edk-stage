import { Mapper } from "../../../core/infra/Mapper"
import { TagProductAttributValue } from "../domain/tagProductAttributeValue"

export class TagProductAttributValueMap extends Mapper<TagProductAttributValue> {
  public static toPersistence(tagProdAttrValue: TagProductAttributValue): any {
    return {
      tag_product_attr_value_id: tagProdAttrValue.id.toString(),
      product_inventory_id: tagProdAttrValue.productInventoryId.id.toString(),
      attribute_value_id: tagProdAttrValue.productAttributeValueId.toString(),
    }
  }
}
