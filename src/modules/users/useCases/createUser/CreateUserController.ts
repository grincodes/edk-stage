import { BaseController } from "../../../../core/infra/BaseController"
import { CreateUserUseCase } from "./CreateUserUseCase"
import { CreateUserDTO } from "./CreateUserDTO"
import { CreateUserErrors } from "./CreateUserErrors"
import { TextUtils } from "../../../../utils/TextUtils"
import { GenericAppError } from "../../../../core/logic/AppError"
import { UserMap } from "../../mappers/UserMap"

export class CreateUserController extends BaseController {
  private useCase: CreateUserUseCase

  constructor(useCase: CreateUserUseCase) {
    super()
    this.useCase = useCase
  }

  async executeImpl(): Promise<any> {
    let dto: CreateUserDTO = this.req.body as CreateUserDTO

    dto = {
      firstName: TextUtils.sanitize(dto.firstName),
      lastName: TextUtils.sanitize(dto.lastName),
      email: TextUtils.sanitize(dto.email),
      password: dto.password,
      role: TextUtils.sanitize(dto.role)
    }

    try {
      const result = await this.useCase.execute(dto)

      const resultVal = result.value

      if (result.isLeft()) {
        const error = result.value

        switch (error.constructor) {
          case CreateUserErrors.AccountAlreadyExists:
            return this.conflict(error.errorValue().message)
          case CreateUserErrors.GuardError:
            return this.conflict(error.errorValue().message)
          case GenericAppError.UnexpectedError:
            return this.conflict(error.errorValue().message)
          default:
            return this.fail(error.errorValue())
        }
      } else {
        return this.ok(this.res, UserMap.toResponeDto(resultVal.getValue()))
      }
    } catch (err) {
      return this.fail(err)
    }
  }
}
