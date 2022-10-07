export interface CreateProductCategoryDTO {
  product_type_id: string;
  name: string;
  slug: string;
}

export interface CreateProductCategoryResponseDTO {
  category_id: string;
  category_name: string;
  category_slug: string;
}
