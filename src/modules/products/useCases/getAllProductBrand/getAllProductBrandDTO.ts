export interface GetProductBrandResponseDTO {
  id: string
  name: string
}

export interface GetPaginatedBrandsResponseDTO {
  product_brands: GetProductBrandResponseDTO[]
}
