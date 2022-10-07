import slug from "slug"
import { ValueObject } from "../../../core/domain/ValueObject"
import { Guard } from "../../../core/logic/Guard"
import { Result } from "../../../core/logic/Result"
import { TextUtils } from "../../../utils/TextUtils"

slug.defaults.mode = "pretty"
slug.defaults.modes["pretty"] = {
  replacement: "-", // replace spaces with replacement
  symbols: false, // replace unicode symbols or not
  lower: true, // result in lower case
  charmap: slug.charmap, // replace special characters
  multicharmap: slug.multicharmap // replace multi-characters
}

export interface VariantNameProps {
  value: string
}

export class VariantName extends ValueObject<VariantNameProps> {
  get value(): string {
    return this.props.value
  }

  private constructor(props: VariantNameProps) {
    super(props)
  }

  public static createFromExisting(variantName: string) {
    if (!!variantName === true) {
      return Result.ok<VariantName>(new VariantName({ value: variantName }))
    } else {
      return Result.fail<VariantName>("No variant name passed in")
    }
  }

  public static create(variant_name: string): Result<VariantName> {

    const guardResult = Guard.againstNullOrUndefined(variant_name, 'variant name');
    if (!guardResult.succeeded) {
      return Result.fail<VariantName>(guardResult.message);
    }

    const guardResultAtLeast = Guard.againstAtLeast(3, variant_name, 'variant name');

    if (!guardResultAtLeast.succeeded) {
      return Result.fail<VariantName>(guardResultAtLeast.message);
    }

    let returnVariantName = ""

    // Run the VariantName algorithm here to create a VariantName
    // Strip all non alphabetic characters such as . / ; ,
    returnVariantName = variant_name.replace(/[\W_]+/g, " ")
    returnVariantName = TextUtils.createRandomNumericString(7) + "-" + slug(variant_name)

    return Result.ok<VariantName>(new VariantName({ value: returnVariantName }))
  }
}
