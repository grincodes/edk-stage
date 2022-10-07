import { UniqueEntityID } from "../../../core/domain/UniqueEntityID"
import { Mapper } from "../../../core/infra/Mapper"
import { Result } from "../../../core/logic/Result"
import { NigeriaPhone } from "../../../shared/domain_types/NigeriaPhoneNumber"
import { UserId } from "../../users/domain/userId"
import { Shopper } from "../domain/shopper"
import { ShopperUserName } from "../domain/shopperUserName"

export class ShopperMap extends Mapper<Shopper> {
  public static async toPersistence(shopper: Shopper) {
    return {
      shopper_id: shopper.id.toString(),
      shopper_username: shopper.shopperUserName.value,
      shopper_phone: shopper.shopperPhone.value,
      shopper_user_id: shopper.userId.id.toString(),
      shopper_dob: shopper.dob,
    }
  }

  public static toDomain(raw: any): Shopper {
    const shopperUserNameOrError = ShopperUserName.create(raw.shopper_username)
    const shopperPhoneOrError = NigeriaPhone.create(raw.shopper_phone)
    const shopperUserIdOrError = UserId.create(new UniqueEntityID(raw.shopper_user_id))
    const combinedPropsResult = Result.combine([shopperUserNameOrError, shopperPhoneOrError, shopperUserIdOrError])

    if (!combinedPropsResult.isFailure) {
      const shopperOrError = Shopper.create(
        {
          shopperUserName: shopperUserNameOrError.getValue(),
          shopperPhone: shopperPhoneOrError.getValue(),
          userId: shopperUserIdOrError.getValue(),
          dob: raw.shopper_dob,
        },
        new UniqueEntityID(),
      )

      shopperOrError.isFailure ? console.log(shopperOrError.error) : ""

      return shopperOrError.isSuccess ? shopperOrError.getValue() : null
    }

    return combinedPropsResult.errorValue()
  }

  public static toResponseDto(shopper: Shopper) {
    const response = {
      id: shopper.id.toValue(),
      shopper_username: shopper.shopperUserName.value,
      shopper_phone: shopper.shopperPhone.value,
    }

    return response
  }
}
