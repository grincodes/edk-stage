import { UniqueEntityID } from "../../../core/domain/UniqueEntityID"
import { Mapper } from "../../../core/infra/Mapper"
import { ProductAttributeValue } from "../domain/productAttributeValue"
import { CreateProductAttributeValueResponseDTO } from "../useCases/createProductAttributeValue/createProductAttributeValueDTO"
import { GetPaginatedProductAttrValuesResponseDTO } from "../useCases/getProductAttributeValuesByAttrId/productAttributeValuesByAttrIdDTO"

export class ProductAttributeValueMap extends Mapper<ProductAttributeValue> {
  public static toPersistence(productAttributeValue: ProductAttributeValue): any {
    return {
      attribute_value_id: productAttributeValue.id.toString(),
      attribute_id: productAttributeValue.productAttributeId.id.toString(),
      attribute_value: productAttributeValue.attributeValue,
      attribute_value_sequence: productAttributeValue.attributeSequence,
    }
  }

  public static toDomain(raw: any): ProductAttributeValue {
    const ProductAttributeValueOrError = ProductAttributeValue.create(
      {
        attributeValue: raw.attribute_value,
        productAttributeId: raw.attribute_id,
        attributeSequence: raw.attribute_value_sequence,
      },
      new UniqueEntityID(raw.attribute_value_id),
    )

    ProductAttributeValueOrError.isFailure ? console.log(ProductAttributeValueOrError.error) : ""
    return ProductAttributeValueOrError.isSuccess ? ProductAttributeValueOrError.getValue() : null
  }

  public static toAllResponeDto(prodAttributeValues: any): GetPaginatedProductAttrValuesResponseDTO {
    const product_attribute_values = prodAttributeValues.map((attr) => {
      return {
        id: attr.id.toString(),
        attribute_id: attr.attribute_id,
        attribute_value: attr.attribute_value,
        sequence: attr.attribute_value_sequence,
      }
    })

    return { product_attribute_values }
  }

  public static toResponeDto(productAttributeValue: ProductAttributeValue): CreateProductAttributeValueResponseDTO {
    const response = {
      id: productAttributeValue.id.toString(),
      attribute_value: productAttributeValue.attributeValue,
    }

    return response
  }
}
