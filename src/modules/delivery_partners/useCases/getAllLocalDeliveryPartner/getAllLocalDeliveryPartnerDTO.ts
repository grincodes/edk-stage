import { LocalDeliveryPartner } from "../../domain/localDeliveryPartners"

export interface GetAllLocalDeliveryResponseDTO {
  local_delivery_partners: LocalDeliveryResponseDTO[]
}
export interface LocalDeliveryResponseDTO {
  id: string
  name: string
  isActive: boolean
}
