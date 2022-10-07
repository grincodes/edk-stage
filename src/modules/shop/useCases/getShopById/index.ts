import { shopRepo } from '../../repos';
import { GetShopByIdController } from './getShopByIdController';
import { GetShopByIdUseCase } from './getShopByIdUseCase';

const getShopByIdUseCase = new GetShopByIdUseCase(shopRepo);
const getShopByIdController = new GetShopByIdController(getShopByIdUseCase);

export { getShopByIdUseCase, getShopByIdController };
