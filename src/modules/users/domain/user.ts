import { AggregateRoot } from "../../../core/domain/AggregateRoot"
import { UniqueEntityID } from "../../../core/domain/UniqueEntityID"
import { Result } from "../../../core/logic/Result"
import { UserId } from "./userId"
import { UserEmail } from "./userEmail"
import { Guard } from "../../../core/logic/Guard"
import { UserCreatedEvent } from "./events/userCreated"
import { UserPassword } from "./userPassword"
import { UserDeletedEvent } from "./events/userDeleted"
import { JWTToken, RefreshToken } from "./Jwt"
import { UserLoggedInEvent } from "./events/userLoggedIn"
import { UserRoles } from "./userRoles"
import { UserRole } from "./userRole"

interface UserProps {
  firstName: string
  lastName: string
  email: UserEmail
  password: UserPassword
  role: UserRole
  roles?: UserRoles
  isEmailVerified: boolean
  profilePicture?: string
  googleId?: number
  facebookId?: number
  isDeleted?: boolean
  isBlocked?: boolean
  accessToken?: JWTToken
  refreshToken?: RefreshToken
  lastLogin?: Date
}

export class User extends AggregateRoot<UserProps> {
  get id(): UniqueEntityID {
    return this._id
  }

  get userId(): UserId {
    return UserId.create(this.id).getValue()
  }

  get email(): UserEmail {
    return this.props.email
  }

  get firstName(): string {
    return this.props.firstName
  }

  get lastName(): string {
    return this.props.lastName
  }

  get roles(): UserRoles {
    return this.props.roles
  }

  get password(): UserPassword {
    return this.props.password
  }

  get role(): UserRole {
    return this.props.role
  }

  get isEmailVerified(): boolean {
    return this.props.isEmailVerified
  }

  get profilePicture(): string {
    return this.props.profilePicture
  }

  get googleId(): number {
    return this.props.googleId
  }

  get facebookId(): number {
    return this.props.facebookId
  }

  get accessToken(): string {
    return this.props.accessToken
  }

  get isDeleted(): boolean {
    return this.props.isDeleted
  }

  get lastLogin(): Date {
    return this.props.lastLogin
  }

  get refreshToken(): RefreshToken {
    return this.props.refreshToken
  }

  public isLoggedIn(): boolean {
    return !!this.props.accessToken && !!this.props.refreshToken
  }

  public hasPermission(role: UserRole): boolean {
    return this.props.roles.exists(role)
  }

  public setAccessToken(token: JWTToken, refreshToken: RefreshToken): void {
    this.addDomainEvent(new UserLoggedInEvent(this))
    this.props.accessToken = token
    this.props.refreshToken = refreshToken
    this.props.lastLogin = new Date()
  }

  public delete(): void {
    if (!this.props.isDeleted) {
      this.addDomainEvent(new UserDeletedEvent(this))
      this.props.isDeleted = true
    }
  }

  private constructor(props: UserProps, id?: UniqueEntityID) {
    super(props, id)
  }

  private static isRegisteringWithGoogle(props: UserProps): boolean {
    return !!props.googleId === true
  }

  private static isRegisteringWithFacebook(props: UserProps): boolean {
    return !!props.facebookId === true
  }

  public static create(props: UserProps, id?: UniqueEntityID): Result<User> {
    const guardedProps = [
      { argument: props.firstName, argumentName: "firstName" },
      { argument: props.lastName, argumentName: "lastName" },
      { argument: props.email, argumentName: "email" },
      { argument: props.isEmailVerified, argumentName: "isEmailVerified" },
    ]

    if (!this.isRegisteringWithGoogle(props) && !this.isRegisteringWithFacebook(props)) {
      guardedProps.push({ argument: props.password, argumentName: "password" })
    }

    const guardResult = Guard.againstNullOrUndefinedBulk(guardedProps)
    if (!guardResult.succeeded) {
      return Result.fail<User>(guardResult.message)
    }

    const guardAtLeastChars = [
      { numChars: 3, text: props.firstName, argumentName: "firstName" },
      { numChars: 3, text: props.lastName, argumentName: "lastName" },
      { numChars: 8, text: props.password.value, argumentName: "password" },
    ]
    const guardResultAtLeast = Guard.againstAtLeastBulk(guardAtLeastChars)
    if (!guardResultAtLeast.succeeded) {
      return Result.fail<User>(guardResultAtLeast.message)
    }

    const user = new User({ ...props }, id)

    const idWasProvided = !!id

    if (!idWasProvided) {
      user.addDomainEvent(new UserCreatedEvent(user))
    }

    return Result.ok<User>(user)
  }
}
