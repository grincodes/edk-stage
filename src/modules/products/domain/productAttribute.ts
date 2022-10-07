import { Entity } from '../../../core/domain/Entity';
import { UniqueEntityID } from '../../../core/domain/UniqueEntityID';
import { Guard } from '../../../core/logic/Guard';
import { Result } from '../../../core/logic/Result';
import { ProductAttributeId } from './ProductAttributeId';

export interface ProductAttributeProps {
  name: string;
  product_category_id: UniqueEntityID;
  description: string;
}

export class ProductAttribute extends Entity<ProductAttributeProps> {
  get id(): UniqueEntityID {
    return this._id;
  }

  get productAttributeId(): ProductAttributeId {
    return ProductAttributeId.create(this._id).getValue();
  }

  get productCategoryId(): UniqueEntityID {
    return this.props.product_category_id;
  }

  get name(): string {
    return this.props.name;
  }

  get description(): string {
    return this.props.description;
  }

  private constructor(props: ProductAttributeProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: ProductAttributeProps, id?: UniqueEntityID): Result<ProductAttribute> {
    const guardedProps = [
      { argument: props.name, argumentName: 'category name' },
      { argument: props.description, argumentName: 'description' }
    ];

    const guardAtLeastChars = [
      { numChars: 3, text: props.name, argumentName: 'category name' },
      { numChars: 3, text: props.description, argumentName: 'description' }
    ];

    const guardResult = Guard.againstNullOrUndefinedBulk(guardedProps);
    if (!guardResult.succeeded) {
      return Result.fail<ProductAttribute>(guardResult.message);
    }
    const guardResultAtLeast = Guard.againstAtLeastBulk(guardAtLeastChars);

    if (!guardResultAtLeast.succeeded) {
      return Result.fail<ProductAttribute>(guardResultAtLeast.message);
    }
    const product_attribute = new ProductAttribute(props, id);

    return Result.ok<ProductAttribute>(product_attribute);
  }
}
