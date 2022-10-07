export interface GetProductTypesResponseDTO {
  id: string;
  name: string;
}

export interface GetPaginatedProductTypesResponseDTO {
  product_types: GetProductTypesResponseDTO[];
}
