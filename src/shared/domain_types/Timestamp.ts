import { ValueObject } from "../../core/domain/ValueObject"
import { Guard } from "../../core/logic/Guard"
import { Result } from "../../core/logic/Result"
import { TextUtils } from "../../utils/TextUtils"

export interface ITimeStampProps {
  value: string
}

export class TimeStamp extends ValueObject<ITimeStampProps> {
  private static isValidTimeStamp(url: string): boolean {
    return TextUtils.validateTimeStamp(url)
  }
  private constructor(props: ITimeStampProps) {
    super(props)
  }

  public static create(props: ITimeStampProps): Result<TimeStamp> {
    const timeStampResult = Guard.againstNullOrUndefined(props.value, "time stamp")

    if (!timeStampResult.succeeded) {
      return Result.fail<TimeStamp>(timeStampResult.message)
    }

    if (!this.isValidTimeStamp(props.value)) {
      return Result.fail<TimeStamp>("Invalid timestamp")
    }

    return Result.ok<TimeStamp>(new TimeStamp(props))
  }
}
