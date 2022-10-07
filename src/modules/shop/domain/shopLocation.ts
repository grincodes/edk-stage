import { AggregateRoot } from '../../../core/domain/AggregateRoot';
import { UniqueEntityID } from '../../../core/domain/UniqueEntityID';
import { Guard, IGuardArgument } from '../../../core/logic/Guard';
import { Result } from '../../../core/logic/Result';
import { ShopId } from './shopId';
import { ShopLocationId } from './shopLocationId';

export interface IShopLocationProps {
  shopId?: ShopId;
  address: string;
  state: string;
  city: string;
  country: string;
  lng?: number;
  lat?: number;
}

export class ShopLocation extends AggregateRoot<IShopLocationProps> {
  get id(): UniqueEntityID {
    return this._id;
  }

  get shopLocationId(): ShopLocationId {
    return ShopLocationId.create(this.id).getValue();
  }

  get shopId(): ShopId {
    return this.props.shopId;
  }

  set shopId(shopId: ShopId) {
    this.props.shopId = shopId;
  }

  get address(): string {
    return this.props.address;
  }

  get state(): string {
    return this.props.state;
  }

  get country(): string {
    return this.props.country;
  }

  get city(): string {
    return this.props.city;
  }

  get lng(): number {
    return this.props.lng;
  }

  get lat(): number {
    return this.props.lat;
  }

  constructor(props: IShopLocationProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: IShopLocationProps, id?: UniqueEntityID): Result<ShopLocation> {
    const guardArgs: IGuardArgument[] = [
      { argument: props.address, argumentName: 'address' },
      { argument: props.country, argumentName: 'country' },
      { argument: props.state, argumentName: 'state' },
      { argument: props.city, argumentName: 'city' }
    ];

    const guardAtLeastChars = [
      { numChars: 3, text: props.address, argumentName: 'address' },
      { numChars: 3, text: props.state, argumentName: 'state' },
      { numChars: 3, text: props.city, argumentName: 'city' },
      { numChars: 3, text: props.address, argumentName: 'country' }
    ];

    const guardResult = Guard.againstNullOrUndefinedBulk(guardArgs);
    if (!guardResult.succeeded) {
      return Result.fail<ShopLocation>(guardResult.message);
    }
    const guardResultAtLeast = Guard.againstAtLeastBulk(guardAtLeastChars);

    if (!guardResultAtLeast.succeeded) {
      return Result.fail<ShopLocation>(guardResultAtLeast.message);
    }

    const shopLocation = new ShopLocation(props, id);
    return Result.ok<ShopLocation>(shopLocation);
  }
}
