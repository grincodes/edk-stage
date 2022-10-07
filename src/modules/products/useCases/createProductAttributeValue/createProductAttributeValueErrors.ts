import { UseCaseError } from '../../../../core/logic/UseCaseError';
import { Result } from '../../../../core/logic/Result';

export namespace CreateProductAttributeValueErrors {
  export class GuardError extends Result<UseCaseError> {
    constructor(error: string) {
      super(false, {
        message: `${error}`
      } as UseCaseError);
    }
  }

  export class ProductAttributeValueAlreadyExists extends Result<UseCaseError> {
    constructor(name: string) {
      super(false, {
        message: `The product attribute value ${name}  already exists`
      } as UseCaseError);
    }
  }
}
