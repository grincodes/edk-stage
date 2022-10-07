import { AggregateRoot } from '../../../core/domain/AggregateRoot';
import { Entity } from '../../../core/domain/Entity';
import { UniqueEntityID } from '../../../core/domain/UniqueEntityID';
import { Guard } from '../../../core/logic/Guard';
import { Result } from '../../../core/logic/Result';
import { ShopCategoryId } from './shopCategoryId';

export interface ShopCategoryProps {
  name: string;
  slug: string;
  isActive: boolean;
}

export class ShopCategory extends Entity<ShopCategoryProps> {
  get id(): UniqueEntityID {
    return this._id;
  }

  get shopCategoryId(): ShopCategoryId {
    return ShopCategoryId.create(this._id).getValue();
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

  private constructor(props: ShopCategoryProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: ShopCategoryProps, id?: UniqueEntityID): Result<ShopCategory> {
    const guardedProps = [
      { argument: props.name, argumentName: 'shop category name' },
      { argument: props.slug, argumentName: 'slug' }
    ];

    const guardAtLeastChars = [
      { numChars: 3, text: props.name, argumentName: 'shop category name' },
      { numChars: 3, text: props.slug, argumentName: 'slug' }
    ];

    const guardResult = Guard.againstNullOrUndefinedBulk(guardedProps);
    if (!guardResult.succeeded) {
      return Result.fail<ShopCategory>(guardResult.message);
    }
    const guardResultAtLeast = Guard.againstAtLeastBulk(guardAtLeastChars);

    if (!guardResultAtLeast.succeeded) {
      return Result.fail<ShopCategory>(guardResultAtLeast.message);
    }
    const category = new ShopCategory(props, id);

    return Result.ok<ShopCategory>(category);
  }
}
