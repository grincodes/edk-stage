export interface CreateShopDTO {
  shop_name: string
  category_id: string
  shop_phone: string
  shop_email: string
  shop_logo: string
  owner_id: string
  shop_location: {
    address: string
    state: string
    city: string
    country: string
    lng: number
    lat: number
  }
  local_delivery_partner_id: string
  international_delivery_partner_id: string
  decoded: any
}

export interface CreateShopResponseDTO {
  id: string | number
  shop_email: string
  owner_id: string | number
}
