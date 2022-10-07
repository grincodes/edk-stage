import { productTypeRepo } from '../../repos';
import { CreateProductTypeController } from './createProductTypeController';
import { CreateProductTypeUseCase } from './createProductTypeUseCase';

const createProductTypeUseCase = new CreateProductTypeUseCase(productTypeRepo);
const createProductTypeController = new CreateProductTypeController(createProductTypeUseCase);

export { createProductTypeUseCase, createProductTypeController };
