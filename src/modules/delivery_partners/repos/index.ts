import models from "../../../infra/sequelize/models"
import { InternationalDeliveryPartnerRepo } from "./internationalDeliveryPartnerRepo"
import { LocalDeliveryPartnerRepo } from "./localDeliveryPartnerRepo"

const localDeliveryPartnerRepo = new LocalDeliveryPartnerRepo(models)
const internationalDeliveryPartnerRepo = new InternationalDeliveryPartnerRepo(models)

export { localDeliveryPartnerRepo, internationalDeliveryPartnerRepo }
