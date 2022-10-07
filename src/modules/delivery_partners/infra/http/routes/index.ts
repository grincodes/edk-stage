import express from 'express';
import { middleware } from '../../../../../infra/http';
import { createInternationalDeliveryPartnerController } from '../../../useCases/createInternationalDeliveryPartner';
import { createLocalDeliveryPartnerController } from '../../../useCases/createLocalDeliveryPartner';
import { getAllInternationalDeliveryPartnerController } from '../../../useCases/getAllInternationalPartner';
import { getAllLocalDeliveryPartnerController } from '../../../useCases/getAllLocalDeliveryPartner';

const deliveryPartnerRouter = express.Router();

// LocalDelivery Partners
deliveryPartnerRouter.post('/local/', middleware.ensureAuthenticated(), (req: any, res) => {
  createLocalDeliveryPartnerController.execute(req, res, req.decoded);
});

deliveryPartnerRouter.get('/local/', (req, res) => {
  getAllLocalDeliveryPartnerController.execute(req, res);
});

//internationalDelivery Partners
deliveryPartnerRouter.post('/international/', middleware.ensureAuthenticated(), (req: any, res) => {
  createInternationalDeliveryPartnerController.execute(req, res, req.decoded);
});

deliveryPartnerRouter.get('/international/', (req, res) => {
  getAllInternationalDeliveryPartnerController.execute(req, res);
});

export { deliveryPartnerRouter };
