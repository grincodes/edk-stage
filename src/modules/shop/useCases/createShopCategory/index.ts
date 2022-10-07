import { shopCategoryRepo } from '../../repos';
import { CreateShopCategoryController } from './createShopCategoryController';
import { CreateShopCategoryUseCase } from './createShopCategoryUseCase';

const createShopCategoryUseCase = new CreateShopCategoryUseCase(shopCategoryRepo);
const createShopCategoryController = new CreateShopCategoryController(createShopCategoryUseCase);

export { createShopCategoryUseCase, createShopCategoryController };
