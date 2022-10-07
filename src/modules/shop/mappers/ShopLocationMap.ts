import { UniqueEntityID } from "../../../core/domain/UniqueEntityID"
import { Mapper } from "../../../core/infra/Mapper"
import { Result } from "../../../core/logic/Result"

import { ShopLocation } from "../domain/shopLocation"

export class ShopLocationMap extends Mapper<ShopLocation> {
  public static toPersistence(shopLoc: ShopLocation): any {
    return {
      shop_location_id: shopLoc.id.toString(),
      shop_id: shopLoc.shopId.id.toString(),
      address: shopLoc.address,
      state: shopLoc.state,
      city: shopLoc.city,
      country: shopLoc.country,
      lng: shopLoc.lng,
      lat: shopLoc.lat
    }
  }

  public static toDomain(raw: any): ShopLocation {
    const shopLocationOrError = ShopLocation.create(
      {
        shopId: raw.dataValues.shop_id,
        address: raw.dataValues.address,
        city: raw.dataValues.city,
        country: raw.dataValues.country,
        state: raw.dataValues.state,
        lng: raw.dataValues.lng,
        lat: raw.dataValues.lat
      },
      new UniqueEntityID(raw.dataValues.shop_location_id)
    )

    shopLocationOrError.isFailure ? console.log(shopLocationOrError.error) : ""
    return shopLocationOrError.isSuccess ? shopLocationOrError.getValue() : null
  }
}
