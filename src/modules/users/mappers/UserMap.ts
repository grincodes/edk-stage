import { Mapper } from "../../../core/infra/Mapper"
import { UniqueEntityID } from "../../../core/domain/UniqueEntityID"
import { UserEmail } from "../domain/userEmail"
import { UserPassword } from "../domain/userPassword"
import { User } from "../domain/user"
import { CreateUserResponseDTO } from "../useCases/createUser/CreateUserDTO"
import { UserRoles } from "../domain/userRoles"
import { Result } from "../../../core/logic/Result"
import { UserRole } from "../domain/userRole"

export class UserMap extends Mapper<User> {
  public static async toPersistence(user: User): Promise<any> {
    let password: string = null
    if (!!user.password === true) {
      if (user.password.isAlreadyHashed()) {
        password = user.password.value
      } else {
        password = await user.password.getHashedValue()
      }
    }

    return {
      base_user_id: user.id.toString(),
      user_email: user.email.value,
      user_password: password,
      first_name: user.firstName,
      last_name: user.lastName,
      is_email_verified: user.isEmailVerified,
    }
  }

  public static toDomain(raw: any): User {
    //TODO Handling roles return console.log('raw role ',raw.Role);
    const userEmailOrError = UserEmail.create(raw.user_email)
    const userPasswordOrError = UserPassword.create({ value: raw.user_password, hashed: true })
    if (!raw.Role.length) {
      // throw error
      console.log("very bad all users must have a role")
      return null
    }
    const userRoles = raw.Role.map((roleObj) => {
      return UserRole.create(roleObj.role).getValue()
    })

    const rolesOrError = UserRoles.create(userRoles)
    const combinedPropsResult = Result.combine([userEmailOrError, userPasswordOrError])

    if (!combinedPropsResult.isFailure) {
      const userOrError = User.create(
        {
          email: userEmailOrError.getValue(),
          password: userPasswordOrError.getValue(),
          firstName: raw.first_name,
          lastName: raw.last_name,
          isEmailVerified: raw.is_email_verified,
          role: rolesOrError[0],
          roles: rolesOrError,
        },
        new UniqueEntityID(raw.base_user_id),
      )

      userOrError.isFailure ? console.log(userOrError.error) : ""
      return userOrError.isSuccess ? userOrError.getValue() : null
    }

    return combinedPropsResult.errorValue()
  }

  public static toResponeDto(user: User): CreateUserResponseDTO {
    const response = {
      id: user.id.toValue(),
      email: user.email.value,
      role: user.role.value,
    }

    return response
  }
}
