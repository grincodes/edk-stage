import { Entity } from '../../../core/domain/Entity';
import { UniqueEntityID } from '../../../core/domain/UniqueEntityID';
import { Guard } from '../../../core/logic/Guard';
import { Result } from '../../../core/logic/Result';
import { Url } from '../../../shared/domain_types/Url';

export interface ProductImageProps {
  variantName: string;
  imageUrl: Url;
  altText?: string;
  thumbnailUrl?: Url;
}

export class ProductImage extends Entity<ProductImageProps> {
  get id(): UniqueEntityID {
    return this._id;
  }

  get imageUrl(): Url {
    return this.props.imageUrl;
  }

  get thumbnailUrl(): Url {
    return this.props.thumbnailUrl;
  }
  get altText(): string {
    return this.props.altText;
  }

  get variantName(): string {
    return this.props.variantName;
  }

  private constructor(props: ProductImageProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: ProductImageProps, id?: UniqueEntityID): Result<ProductImage> {
    const guardResult = Guard.againstNullOrUndefined(props.altText, 'image alt_text');
    if (!guardResult.succeeded) {
      return Result.fail<ProductImage>(guardResult.message);
    }

    const guardResultAtLeast = Guard.againstAtLeast(3, props.altText, 'image alt_text');

    if (!guardResultAtLeast.succeeded) {
      return Result.fail<ProductImage>(guardResultAtLeast.message);
    }
    const image = new ProductImage(props, id);

    return Result.ok<ProductImage>(image);
  }
}
