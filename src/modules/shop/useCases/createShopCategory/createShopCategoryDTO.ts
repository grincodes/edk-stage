export interface CreateShopCategoryDTO {
  name: string
  slug: string
}

export interface CreateShopCategoryResponseDTO {
  shop_category_id: string
  shop_category_name: string
  shop_category_slug: string
}
