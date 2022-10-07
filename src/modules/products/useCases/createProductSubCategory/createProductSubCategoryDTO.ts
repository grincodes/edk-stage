export interface CreateProductSubCategoryDTO {
  category_id: string
  name: string
  slug: string
}

export interface CreateProductSubCategoryResponseDTO {
  id: string
  category_id: string
  subcategory_name: string
  subcategory_slug: string
}
