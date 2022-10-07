import { Product } from "../../domain/product"

export interface GetAllProductsDTO {
  page?: number
  size?: number
}

export interface GetPaginatedProductsResponseDTO {
  totalProducts: number
  products: Product[]
  totalPages: number
  currentPage: number
}
