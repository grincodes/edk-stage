import { internationalDeliveryPartnerRepo } from "../../repos"
import { GetAllInternationalDeliveryPartnerController } from "./GetAllInternationalDeliveryPartnerController"
import { GetAllInternationalDeliveryPartnerUseCase } from "./getAllInternationalDeliveryPartnerUseCase"

const getAllInternationalDeliveryPartnerUseCase = new GetAllInternationalDeliveryPartnerUseCase(internationalDeliveryPartnerRepo)
const getAllInternationalDeliveryPartnerController = new GetAllInternationalDeliveryPartnerController(getAllInternationalDeliveryPartnerUseCase)

export { getAllInternationalDeliveryPartnerUseCase, getAllInternationalDeliveryPartnerController }
