import { CreateProductCategoryResponseDTO } from '../createProductCategory/createProductCategoryDto';

export interface GetPaginatedCategoriesResponseDTO {
  categories: CreateProductCategoryResponseDTO[];
}
