import { CreateShopCategoryResponseDTO } from '../createShopCategory/createShopCategoryDto';

export interface GetPaginatedCategoriesResponseDTO {
  shop_categories: CreateShopCategoryResponseDTO[];
}
