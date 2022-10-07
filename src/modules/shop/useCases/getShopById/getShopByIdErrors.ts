import { UseCaseError } from '../../../../core/logic/UseCaseError';
import { Result } from '../../../../core/logic/Result';

export namespace GetShopByIdErrors {
  export class ShopDoesNotExistError extends Result<UseCaseError> {
    constructor(shopId: string) {
      super(false, {
        message: `Shop with id ${shopId} not found`
      } as UseCaseError);
    }
  }
}
