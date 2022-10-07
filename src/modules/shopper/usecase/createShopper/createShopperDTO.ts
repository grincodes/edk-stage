export interface CreateShopperDTO {
  shopper_username: string
  shopper_user_id: string
  shopper_phone: string
  shopper_dob: Date
  shopper_address: {
    address: string
    state: string
    city: string
    country: string
    lng: number
    lat: number
  }
  decoded: any
}

export interface CreateShopperResponseDTO {
  id: string | number
  shop_username: string
  user_id: string | number
}
