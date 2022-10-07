import { UniqueEntityID } from "../../../core/domain/UniqueEntityID"
import { Mapper } from "../../../core/infra/Mapper"
import { ShopperAddress } from "../domain/shopperAddress"

export class ShopperAddressMap extends Mapper<ShopperAddress> {
  public static toPersistence(shopperAddress: ShopperAddress): any {
    return {
      shopper_address_id: shopperAddress.id.toString(),
      shopper_id: shopperAddress.shopperId.id.toString(),
      address: shopperAddress.address,
      state: shopperAddress.state,
      city: shopperAddress.city,
      country: shopperAddress.country,
      lng: shopperAddress.lng,
      lat: shopperAddress.lat,
    }
  }

  public static toDomain(raw: any): ShopperAddress {
    const shopAddressOrError = ShopperAddress.create(
      {
        shopperId: raw.dataValues.shopper_id,
        address: raw.dataValues.address,
        city: raw.dataValues.city,
        country: raw.dataValues.country,
        state: raw.dataValues.state,
        lng: raw.dataValues.lng,
        lat: raw.dataValues.lat,
      },
      new UniqueEntityID(raw.dataValues.shopper_address_id),
    )

    shopAddressOrError.isFailure ? console.log(shopAddressOrError.error) : ""
    return shopAddressOrError.isSuccess ? shopAddressOrError.getValue() : null
  }
}
