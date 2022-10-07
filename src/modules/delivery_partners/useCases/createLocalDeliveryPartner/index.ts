import { localDeliveryPartnerRepo } from '../../repos';
import { CreateLocalDeliveryPartnerController } from './createLocalDeliveryPartnerController';
import { CreateLocalDeliveryPartnerUseCase } from './createLocalDeliveryPartnerUseCase';

const createLocalDeliveryPartnerUseCase = new CreateLocalDeliveryPartnerUseCase(localDeliveryPartnerRepo);

const createLocalDeliveryPartnerController = new CreateLocalDeliveryPartnerController(createLocalDeliveryPartnerUseCase);

export { createLocalDeliveryPartnerUseCase, createLocalDeliveryPartnerController };
