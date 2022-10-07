export interface GetProductAttributeResponse {
  id: string;
  name: string;
  description: string;
}

export interface GetPaginatedAttributeResponseDTO {
  product_attributes: GetProductAttributeResponse[];
}
