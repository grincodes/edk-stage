export interface CreateProductDTO {
  product_name: string
  product_description: string
  product_category_id: string
  shop_id: string
  product_360_video_url: string
  variants: Variant[]
}

export interface CreateProductResponseDTO {
  id: string
  name: string
}

export interface Variant {
  variant_name: string
  retail_price: number
  product_id?: string
  quantity?: number
  sizes: Attr[]
  images: string[]
}

export interface Attr {
  attr_val_id: string
  price: number
  quantity: number
}
