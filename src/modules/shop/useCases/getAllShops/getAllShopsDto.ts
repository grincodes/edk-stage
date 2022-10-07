import { Shop } from "../../domain/shop"

export interface GetAllShopsDTO {
  page?: number
  size?: number
}

export interface GetPaginatedShopsResponseDTO {
  totalShops: number
  shops: Shop[]
  totalPages: number
  currentPage: number
}
