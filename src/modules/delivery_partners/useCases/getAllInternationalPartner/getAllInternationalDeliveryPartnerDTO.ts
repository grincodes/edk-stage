import { InternationalDeliveryPartner } from "../../domain/internationalDeliveryPartners"

export interface InternationalDeliveryResponseDTO {
  id: string
  name: string
  isActive: boolean
}

export interface GetAllInternationalDeliveryResponseDTO {
  international_delivery_partners: InternationalDeliveryResponseDTO[]
}
