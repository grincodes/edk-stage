export interface GetProductAttrValuesByAttrIdDTO {
  attributeId: string;
}

export interface GetProductAttrValuesResponseDTO {
  id: string;
  attribute_id: string;
  attribute_value: string;
  description: string;
}

export interface GetPaginatedProductAttrValuesResponseDTO {
  product_attribute_values: GetProductAttrValuesResponseDTO[];
}
