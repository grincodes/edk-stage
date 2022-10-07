/* eslint-disable no-useless-escape */
import { ValueObject } from "../../core/domain/ValueObject"
import { Result } from "../../core/logic/Result"

export interface EmailProps {
  value: string
}

export class Email extends ValueObject<EmailProps> {
  get value(): string {
    return this.props.value
  }

  private constructor(props: EmailProps) {
    super(props)
  }

  public static isValidEmail(email: string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  }

  private static format(email: string): string {
    return email.trim().toLowerCase()
  }

  public static create(email: string): Result<Email> {
    if (!this.isValidEmail(email)) {
      return Result.fail<Email>("Email address not valid")
    } else {
      return Result.ok<Email>(new Email({ value: this.format(email) }))
    }
  }
}
