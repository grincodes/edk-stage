import { AggregateRoot } from '../../../core/domain/AggregateRoot';
import { Entity } from '../../../core/domain/Entity';
import { UniqueEntityID } from '../../../core/domain/UniqueEntityID';
import { Guard } from '../../../core/logic/Guard';
import { Result } from '../../../core/logic/Result';

export interface ProductBrandProps {
  name: string;
}

export class ProductBrand extends AggregateRoot<ProductBrandProps> {
  get name(): string {
    return this.props.name;
  }

  private constructor(props: ProductBrandProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: ProductBrandProps, id?: UniqueEntityID): Result<ProductBrand> {
    const guardResult = Guard.againstNullOrUndefined(props.name, 'brand name');

    if (!guardResult.succeeded) {
      return Result.fail<ProductBrand>(guardResult.message);
    }
    const guardResultAtLeast = Guard.againstAtLeast(3, props.name, 'brand name');

    if (!guardResultAtLeast.succeeded) {
      return Result.fail<ProductBrand>(guardResultAtLeast.message);
    }
    const brand = new ProductBrand(props, id);

    return Result.ok<ProductBrand>(brand);
  }
}
