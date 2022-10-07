import { Entity } from '../../../core/domain/Entity';
import { UniqueEntityID } from '../../../core/domain/UniqueEntityID';
import { Guard } from '../../../core/logic/Guard';
import { Result } from '../../../core/logic/Result';
import { ProductCategoryId } from './productCategoryId';

export interface ProductCategoryProps {
  product_type_id: UniqueEntityID;
  name: string;
  slug: string;
  isActive: boolean;
}

export class ProductCategory extends Entity<ProductCategoryProps> {
  get id(): UniqueEntityID {
    return this._id;
  }

  get productCategoryId(): ProductCategoryId {
    return ProductCategoryId.create(this._id).getValue();
  }

  get productTypeId(): UniqueEntityID {
    return this.props.product_type_id;
  }

  get name(): string {
    return this.props.name;
  }

  get slug(): string {
    return this.props.name;
  }

  get isActive(): boolean {
    return this.props.isActive;
  }

  private constructor(props: ProductCategoryProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: ProductCategoryProps, id?: UniqueEntityID): Result<ProductCategory> {
    const guardedProps = [
      { argument: props.name, argumentName: 'category name' },
      { argument: props.slug, argumentName: 'slug' }
    ];

    const guardAtLeastChars = [
      { numChars: 3, text: props.name, argumentName: 'category name' },
      { numChars: 3, text: props.slug, argumentName: 'slug' }
    ];

    const guardResult = Guard.againstNullOrUndefinedBulk(guardedProps);
    if (!guardResult.succeeded) {
      return Result.fail<ProductCategory>(guardResult.message);
    }

    const guardResultAtLeast = Guard.againstAtLeastBulk(guardAtLeastChars);

    if (!guardResultAtLeast.succeeded) {
      return Result.fail<ProductCategory>(guardResultAtLeast.message);
    }
    const category = new ProductCategory(props, id);

    return Result.ok<ProductCategory>(category);
  }
}
