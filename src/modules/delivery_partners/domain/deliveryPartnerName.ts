import { ValueObject } from '../../../core/domain/ValueObject';
import { Guard } from '../../../core/logic/Guard';
import { Result } from '../../../core/logic/Result';

export interface IDeliveryPartnerNameProps {
  value: string;
}

export class DeliveryPartnerName extends ValueObject<IDeliveryPartnerNameProps> {
  get value(): string {
    return this.props.value;
  }

  public static minLength = 2;

  private constructor(props: IDeliveryPartnerNameProps) {
    super(props);
  }

  public static create(name: string): Result<DeliveryPartnerName> {
    const deliveryPartnerNameResult = Guard.againstNullOrUndefined(name, 'delivery partner name');

    if (!deliveryPartnerNameResult.succeeded) {
      return Result.fail<DeliveryPartnerName>(deliveryPartnerNameResult.message);
    }

    const minLengthResult = Guard.againstAtLeast(this.minLength, name, 'delivery partner name');
    if (!minLengthResult.succeeded) {
      return Result.fail<DeliveryPartnerName>(minLengthResult.message);
    }

    return Result.ok<DeliveryPartnerName>(new DeliveryPartnerName({ value: name }));
  }
}
