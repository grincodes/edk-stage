import { ValueObject } from "../../../core/domain/ValueObject"
import { Result } from "../../../core/logic/Result"

export interface PriceProps {
  value: number
}

export class Price extends ValueObject<PriceProps> {
  get value(): number {
    return this.props.value
  }

  private constructor(props: PriceProps) {
    super(props)
  }

  public static create(price: number): Result<Price> {
    if (price === 0 && !isNaN(price) && price != null && price != undefined) {
      return Result.fail<Price>("Price cannot be zero or undefined")
    } else {
      return Result.ok<Price>(new Price({ value: price }))
    }
  }
}
