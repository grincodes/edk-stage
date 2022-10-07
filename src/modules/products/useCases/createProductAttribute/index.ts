import { productAttributeRepo } from '../../repos';
import { CreateProductAttributeController } from './createProductAttributeController';
import { CreateProductAttributeUseCase } from './createProductAttributeUseCase';

const createProductAttributeUseCase = new CreateProductAttributeUseCase(productAttributeRepo);

const createProductAttributeController = new CreateProductAttributeController(createProductAttributeUseCase);

export { createProductAttributeUseCase, createProductAttributeController };
