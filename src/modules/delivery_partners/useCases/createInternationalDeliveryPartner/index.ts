import { internationalDeliveryPartnerRepo } from "../../repos"
import { CreateInternationalDeliveryPartnerController } from "./createInternationalDeliveryPartnerController"
import { CreateInternationalDeliveryPartnerUseCase } from "./createInternationalDeliveryPartnerUseCase"

const createInternationalDeliveryPartnerUseCase = new CreateInternationalDeliveryPartnerUseCase(internationalDeliveryPartnerRepo)
const createInternationalDeliveryPartnerController = new CreateInternationalDeliveryPartnerController(createInternationalDeliveryPartnerUseCase)

export { createInternationalDeliveryPartnerUseCase, createInternationalDeliveryPartnerController }
