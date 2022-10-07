import { ValueObject } from "../../../core/domain/ValueObject"
import { Guard } from "../../../core/logic/Guard"
import { Result } from "../../../core/logic/Result"
import { TextUtils } from "../../../utils/TextUtils"

export interface IShopDocumentUrl {
  value: string
}

export class ShopDocumentUrl extends ValueObject<IShopDocumentUrl> {
  get value(): string {
    return this.props.value
  }

  private static isValidUrl(url: string): boolean {
    return TextUtils.validateWebURL(url)
  }
  private constructor(props: IShopDocumentUrl) {
    super(props)
  }

  public static create(props: IShopDocumentUrl): Result<ShopDocumentUrl> {
    const ShopDocumentUrlResult = Guard.againstNullOrUndefined(props.value, "shop document")

    if (!ShopDocumentUrlResult.succeeded) {
      return Result.fail<ShopDocumentUrl>(ShopDocumentUrlResult.message)
    }

    if (!this.isValidUrl(props.value)) {
      return Result.fail<ShopDocumentUrl>("Invalid url")
    }

    return Result.ok<ShopDocumentUrl>(new ShopDocumentUrl(props))
  }
}
