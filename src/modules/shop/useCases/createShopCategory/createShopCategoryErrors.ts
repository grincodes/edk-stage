import { UseCaseError } from '../../../../core/logic/UseCaseError';
import { Result } from '../../../../core/logic/Result';

export namespace CreateShopCategoryErrors {
  export class GuardError extends Result<UseCaseError> {
    constructor(error: string) {
      super(false, {
        message: `${error}`
      } as UseCaseError);
    }
  }

  export class ShopCategoryAlreadyExists extends Result<UseCaseError> {
    constructor(name: string) {
      super(false, {
        message: `The shop category name ${name}  already exists`
      } as UseCaseError);
    }
  }
}
