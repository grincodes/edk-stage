import { productAttributeValueRepo } from '../../repos';
import { CreateProductAttributeValueController } from './createProductAttributeValueController';
import { CreateProductAttributeValueUseCase } from './createProductAttributeValueUseCase';

const createProductAttributeValueUseCase = new CreateProductAttributeValueUseCase(productAttributeValueRepo);

const createProductAttributeValueController = new CreateProductAttributeValueController(createProductAttributeValueUseCase);

export { createProductAttributeValueUseCase, createProductAttributeValueController };
