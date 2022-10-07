import slug from "slug"
import { ValueObject } from "../../../core/domain/ValueObject"
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

export interface SkuProps {
  value: string
}

export class Sku extends ValueObject<SkuProps> {
  get value(): string {
    return this.props.value
  }

  private constructor(props: SkuProps) {
    super(props)
  }

  public static createFromExisting(sku: string) {
    if (!!sku === true) {
      return Result.ok<Sku>(new Sku({ value: sku }))
    } else {
      return Result.fail<Sku>("No sku passed in")
    }
  }

  public static create(variant_name: string): Result<Sku> {
    let returnSku = ""

    // Run the sku algorithm here to create a sku
    // Strip all non alphabetic characters such as . / ; ,
    returnSku = variant_name.replace(/[\W_]+/g, " ")
    returnSku = TextUtils.createRandomNumericString(7) + "-" + slug(variant_name)

    return Result.ok<Sku>(new Sku({ value: returnSku }))
  }
}
