import slug from "slug"
import { ValueObject } from "../../../core/domain/ValueObject"
import { Result } from "../../../core/logic/Result"

slug.defaults.mode = "pretty"
slug.defaults.modes["pretty"] = {
  replacement: "-", // replace spaces with replacement
  symbols: false, // replace unicode symbols or not
  lower: true, // result in lower case
  charmap: slug.charmap, // replace special characters
  multicharmap: slug.multicharmap, // replace multi-characters
}

export interface SlugProps {
  value: string
}

export class Slug extends ValueObject<SlugProps> {
  get value(): string {
    return this.props.value
  }

  private constructor(props: SlugProps) {
    super(props)
  }

  public static createFromExisting(slugName: string) {
    if (!!slugName === true) {
      return Result.ok<Slug>(new Slug({ value: slugName }))
    } else {
      return Result.fail<Slug>("No slug passed in")
    }
  }

  public static create(name: string): Result<Slug> {
    let returnSlug = ""

    // Run the slug algorithm here to create a slug
    // Strip all non alphabetic characters such as . / ; ,
    returnSlug = name.replace(/[\W_]+/g, " ")
    returnSlug = slug(name)

    return Result.ok<Slug>(new Slug({ value: returnSlug }))
  }
}
