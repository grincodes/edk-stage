import { User } from "../domain/user"
import { UserMap } from "../mappers/UserMap"
import { UserEmail } from "../domain/userEmail"
import { UserId } from "../domain/userId"

export interface IUserRepo {
  findUserById(id: UserId | string): Promise<User>
  findUserByEmail(email: UserEmail): Promise<User>
  exists(email: UserEmail): Promise<boolean>
  save(user: User): Promise<void>
  verifyUserById(id: string): Promise<void>
}

export class UserRepo implements IUserRepo {
  private models: any

  constructor(models: any) {
    this.models = models
  }

  private createBaseQuery() {
    const { models } = this
    return {
      where: {},
      include: [{ model: models.Role, as: "Role", required: false }],
    }
  }

  public async findUserById(id: UserId | string): Promise<User> {
    const _id = id instanceof UserId ? (<UserId>id).id.toValue() : id

    const user = await this.models.BaseUser.findByPk(_id).toJSON()
    if (!!user === true) return UserMap.toDomain(user)

    return null
  }

  public async findUserByEmail(email: UserEmail): Promise<User> {
    const baseQuery = this.createBaseQuery()
    baseQuery.where["user_email"] = email.value.toString()
    const rawuser = await this.models.BaseUser.findOne(baseQuery)
    const user =  rawuser.toJSON()

    return UserMap.toDomain(user)
  }

  public async exists(email: UserEmail): Promise<boolean> {
    const baseQuery = this.createBaseQuery()
    baseQuery.where["user_email"] = email.value.toString()
    const user = await this.models.BaseUser.findOne(baseQuery)
    return !!user === true
  }

  public async verifyUserById(id: string): Promise<void> {
    const BaseUserModel = this.models.BaseUser
    try {
      await BaseUserModel.update(
        { is_email_verified: true },
        {
          where: { base_user_id: id },
        },
      )
    } catch (err) {
      console.log(err)
      throw new Error(err.toString())
    }
  }

  public async save(user: User): Promise<void> {
    const BaseUserModel = this.models.BaseUser
    const exists = await this.exists(user.email)
    const rawUser = await UserMap.toPersistence(user)

    try {
      if (!exists) {
        // Create new
        await BaseUserModel.create(rawUser)
      } else {
        // Save old
        const sequelizeUserInstance = await BaseUserModel.findOne({
          where: { user_email: user.email.value },
        })
        await sequelizeUserInstance.update(rawUser)
      }
    } catch (err) {
      console.log(err)
      throw new Error(err.toString())
    }
  }
}

