import { UseCaseError } from '../../../../core/logic/UseCaseError';
import { Result } from '../../../../core/logic/Result';

export namespace GetAllShopErrors {
  export class InvalidQueryPassed extends Result<UseCaseError> {
    constructor() {
      super(false, {
        message: `expects query params of page and size`
      } as UseCaseError);
    }
  }
}
