import { UniqueEntityID } from "../../../core/domain/UniqueEntityID"
import { Mapper } from "../../../core/infra/Mapper"
import { Result } from "../../../core/logic/Result"
import { Email } from "../../../shared/domain_types/Email"
import { Shop } from "../domain/shop"
import { ShopLocation } from "../domain/shopLocation"
import { ShopLogo } from "../domain/shopLogo"
import { ShopName } from "../domain/shopName"
import { ShopPhone } from "../domain/shopPhone"
import { CreateShopResponseDTO } from "../useCases/createShop/createShopDTO"
import { GetPaginatedShopsResponseDTO } from "../useCases/getAllShops/getAllShopsDto"

export class ShopMap extends Mapper<Shop> {
  public static async toPersistence(shop: Shop): Promise<any> {
    return {
      shop_id: shop.id.toString(),
      shop_category_id: shop.shopCategoryId.toString(),
      shop_name: shop.shopName.value,
      shop_email: shop.shopEmail.value,
      shop_phone: shop.shopPhone.value,
      shop_logo: shop.shopLogo.value ? shop.shopLogo.value : null,
      shop_owner_type: shop.shopOwnerType,
      shop_owner_id: shop.ownerId.toString(),
      local_delivery_partner_id: shop.localDeliveryPartnerId.toString(),
      international_delivery_partner_id: shop.internationalDeliveryPartnerId.toString(),
    }
  }

  public static toDomain(raw: any): Shop {
    const shopNameOrError = ShopName.create(raw.dataValues.shop_name)
    const shopEmailOrError = Email.create(raw.dataValues.shop_email)
    const shopPhoneOrError = ShopPhone.create(raw.dataValues.shop_phone)
    const shopLogoOrError = ShopLogo.create(raw.dataValues.shop_logo)
    const shopLocationOrError = ShopLocation.create(raw.dataValues.ShopLocation)
    const combinedPropsResult = Result.combine([shopNameOrError, shopEmailOrError, shopPhoneOrError])

    if (!combinedPropsResult.isFailure) {
      const shopOrError = Shop.create(
        {
          shopName: shopNameOrError.getValue(),
          shopPhone: shopPhoneOrError.getValue(),
          shopEmail: shopEmailOrError.getValue(),
          shopLogo: shopLogoOrError.getValue(),
          shopLocation: shopLocationOrError.getValue(),
          shopCategoryId: raw.dataValues.category_id,
          shopOwnerType: raw.dataValues.shop_owner_type,
          ownerId: raw.dataValues.shop_owner_id,
          localDeliveryPartnerId: raw.dataValues.local_delivery_id,
          internationalDeliveryPartnerId: raw.dataValues.international_delivery_id,
          isVerified: raw.dataValues.isVerified,
        },
        new UniqueEntityID(),
      )

      shopOrError.isFailure ? console.log(shopOrError.error) : ""

      return shopOrError.isSuccess ? shopOrError.getValue() : null
    }

    return combinedPropsResult.errorValue()
  }

  public static toResponseDto(shop: Shop): CreateShopResponseDTO {
    const response = {
      id: shop.id.toValue(),
      shop_email: shop.shopEmail.value,
      owner_id: shop.ownerId.toValue(),
    }

    return response
  }

  public static toPagination(data: any, page, limit): GetPaginatedShopsResponseDTO {
    const { count, rows } = data
    const totalShops = count
    const shops = rows

    const currentPage = page ? +page : 0
    const totalPages = Math.ceil(totalShops / limit)

    return { totalShops, shops, totalPages, currentPage }
  }
}
