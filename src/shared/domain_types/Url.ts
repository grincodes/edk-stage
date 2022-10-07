import { ValueObject } from "../../core/domain/ValueObject"
import { Guard } from "../../core/logic/Guard"
import { Result } from "../../core/logic/Result"
import { TextUtils } from "../../utils/TextUtils"

export interface IUrlProps {
  value: string
}

export class Url extends ValueObject<IUrlProps> {
  get value(): string {
    return this.props.value
  }

  private static isValidUrl(url: string): boolean {
    return TextUtils.validateWebURL(url)
  }
  private constructor(props: IUrlProps) {
    super(props)
  }

  public static create(url: string): Result<Url> {
    const urlResult = Guard.againstNullOrUndefined(url, "url")

    if (!urlResult.succeeded) {
      return Result.fail<Url>(urlResult.message)
    }

    if (!this.isValidUrl(url)) {
      return Result.fail<Url>(`Invalid url ${url}`)
    }

    return Result.ok<Url>(new Url({ value: url }))
  }
}
