import { BaseController } from "../../../../core/infra/BaseController"
import { GenericAppError } from "../../../../core/logic/AppError"
import { ProductMap } from "../../mappers/productMap"
import { CreateProductImageErrors } from "../createProductImage/createProductImageErrors"
import { CreateProductDTO } from "./createProductDTO"
import { CreateProductErrors } from "./createProductErrors"
import { CreateProductUseCase } from "./createProductUseCase"

export class CreateProductController extends BaseController {
  private useCase: CreateProductUseCase

  constructor(useCase: CreateProductUseCase) {
    super()
    this.useCase = useCase
  }

  protected async executeImpl(): Promise<any> {
    const dto: CreateProductDTO = this.req.body as CreateProductDTO

    try {
      const result = await this.useCase.execute(dto)
      const resultVal = result.value
      if (result.isLeft()) {
        const error = result.value

        switch (error.constructor) {
          case CreateProductErrors.GuardError:
            return this.conflict(error.errorValue().message)
          case CreateProductErrors.ProductAlreadyExists:
            return this.conflict(error.errorValue().message)
          case CreateProductErrors.ProductMustHaveVariants:
            return this.conflict(error.errorValue().message)
          case CreateProductImageErrors.InvalidImageUrl:
            return this.conflict(error.errorValue().message)
          case CreateProductImageErrors.GuardError:
            return this.conflict(error.errorValue().message)
          case GenericAppError.UnexpectedError:
            return this.conflict(error.errorValue().message)
          default:
            return this.fail(error.errorValue().message ? error.errorValue().message : error.errorValue())
        }
      } else {
        return this.ok(this.res, ProductMap.toResponeDto(resultVal.getValue()))
      }
    } catch (err) {
      this.fail(err)
    }
  }
}
