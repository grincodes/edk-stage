export interface CreateProductAttributeValueDTO {
  attribute_id: string
  attribute_value: string
  attribute_value_sequence: string
}

export interface CreateProductAttributeValueResponseDTO {
  id: string
  attribute_value: string
}
