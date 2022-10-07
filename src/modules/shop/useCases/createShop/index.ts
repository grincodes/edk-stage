import { shopLocationRepo, shopRepo } from '../../repos';
import { CreateShopController } from './createShopController';
import { CreateShopUseCase } from './createShopUseCase';

const createShopUseCase = new CreateShopUseCase(shopRepo, shopLocationRepo);
const createShopController = new CreateShopController(createShopUseCase);

export { createShopUseCase, createShopController };
