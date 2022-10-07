import { shopCategoryRepo } from '../../repos';
import { GetAllShopCategoryController } from './getAllShopCategoryController';
import { GetAllShopCategoryUseCase } from './getAllShopCategoryUseCase';

const getAllShopCategoryUseCase = new GetAllShopCategoryUseCase(shopCategoryRepo);
const getAllShopCategoryController = new GetAllShopCategoryController(getAllShopCategoryUseCase);

export { getAllShopCategoryUseCase, getAllShopCategoryController };
