export interface CreateProductAttributeDTO {
  name: string;
  product_category_id: string;
  description: string;
}

export interface CreateProductAttributeResponseDTO {
  id: string;
  attribute_name: string;
}
