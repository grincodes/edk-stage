import { ValueObject } from "../../../core/domain/ValueObject"
import { Guard } from "../../../core/logic/Guard"
import { Result } from "../../../core/logic/Result"
import { TextUtils } from "../../../utils/TextUtils"

export interface IShopLogoProps {
  value: string
}

export class ShopLogo extends ValueObject<IShopLogoProps> {
  private static isValidUrl(url: string): boolean {
    return TextUtils.validateWebURL(url)
  }
  private constructor(props: IShopLogoProps) {
    super(props)
  }

  get value(): string {
    return this.props.value
  }

  public static create(logo: string): Result<ShopLogo> {
    const shopLogoResult = Guard.againstNullOrUndefined(logo, "shop logo")

    if (!shopLogoResult.succeeded) {
      return Result.fail<ShopLogo>(shopLogoResult.message)
    }

    if (!this.isValidUrl(logo)) {
      return Result.fail<ShopLogo>("Invalid shop logo url")
    }

    return Result.ok<ShopLogo>(new ShopLogo({ value: logo }))
  }
}
