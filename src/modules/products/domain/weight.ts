import { ValueObject } from "../../../core/domain/ValueObject"
import { Result } from "../../../core/logic/Result"

export enum Unit {
  "Kilogram" = "Kg"
}

export interface WeightProps {
  value: number
  unit: Unit
}

export class Weight extends ValueObject<WeightProps> {
  get value(): number {
    return this.props.value
  }

  private constructor(props: WeightProps) {
    super(props)
  }

  public static create(props: WeightProps): Result<Weight> {
    if (props.value === 0 && !isNaN(props.value) && props.value != null && props.value != undefined) {
      return Result.fail<Weight>("Weight cannot be zero or undefined")
    } else {
      return Result.ok<Weight>(new Weight(props))
    }
  }
}
