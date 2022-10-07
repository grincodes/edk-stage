import { AggregateRoot } from '../../../core/domain/AggregateRoot';
import { Entity } from '../../../core/domain/Entity';
import { UniqueEntityID } from '../../../core/domain/UniqueEntityID';
import { Guard } from '../../../core/logic/Guard';
import { Result } from '../../../core/logic/Result';
import { ProductCategoryId } from './productCategoryId';

export interface ProductSubCategoryProps {
  name: string;
  slug: string;
  categoryId: UniqueEntityID;
  isActive: boolean;
}

export class ProductSubCategory extends Entity<ProductSubCategoryProps> {
  get id(): UniqueEntityID {
    return this._id;
  }

  get name(): string {
    return this.props.name;
  }

  get slug(): string {
    return this.props.name;
  }

  get categoryId(): UniqueEntityID {
    return this.props.categoryId;
  }

  get isActive(): boolean {
    return this.props.isActive;
  }

  private constructor(props: ProductSubCategoryProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: ProductSubCategoryProps, id?: UniqueEntityID): Result<ProductSubCategory> {
    const guardedProps = [
      { argument: props.name, argumentName: 'sub category name' },
      { argument: props.slug, argumentName: 'slug' }
    ];

    const guardAtLeastChars = [
      { numChars: 3, text: props.name, argumentName: 'sub category name' },
      { numChars: 3, text: props.slug, argumentName: 'slug' }
    ];

    const guardResult = Guard.againstNullOrUndefinedBulk(guardedProps);
    if (!guardResult.succeeded) {
      return Result.fail<ProductSubCategory>(guardResult.message);
    }

    const guardResultAtLeast = Guard.againstAtLeastBulk(guardAtLeastChars);

    if (!guardResultAtLeast.succeeded) {
      return Result.fail<ProductSubCategory>(guardResultAtLeast.message);
    }
    const category = new ProductSubCategory(props, id);

    return Result.ok<ProductSubCategory>(category);
  }
}
