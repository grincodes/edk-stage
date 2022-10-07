import { localDeliveryPartnerRepo } from "../../repos"
import { GetAllLocalDeliveryPartnerController } from "./getAllLocalDeliveryPartnerController"
import { GetAllLocalDeliveryPartnerUseCase } from "./getAllLocalDeliveryPartnerUseCase"

const getAllLocalDeliveryPartnerUseCase = new GetAllLocalDeliveryPartnerUseCase(localDeliveryPartnerRepo)
const getAllLocalDeliveryPartnerController = new GetAllLocalDeliveryPartnerController(getAllLocalDeliveryPartnerUseCase)

export { getAllLocalDeliveryPartnerUseCase, getAllLocalDeliveryPartnerController }
