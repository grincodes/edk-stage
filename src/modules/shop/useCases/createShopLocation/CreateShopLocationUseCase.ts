import { UseCase } from "../../../../core/domain/UseCase"
import { Result } from "../../../../core/logic/Result"
import { Shop } from "../../domain/shop"
import { ShopLocation } from "../../domain/shopLocation"
import { IShopLocationRepo } from "../../repos/shopLocationRepo"
import { ShopId } from "../../domain/shopId"

interface Request {
  shop: Shop
}

export class CreateShopLocationUseCase implements UseCase<Request, Result<ShopLocation>> {
  private shopLocationRepo: IShopLocationRepo
  roleRepo: any

  constructor(shopLocationRepo: IShopLocationRepo) {
    this.shopLocationRepo = shopLocationRepo
  }

  async execute(request: Request): Promise<Result<ShopLocation>> {
    const { shop } = request
    const shopLocationProps = shop.shopLocation
    shopLocationProps.props.shopId = ShopId.create(shop.id).getValue()

    const shopLocationOrError = ShopLocation.create(shopLocationProps)

    if (shopLocationOrError.isFailure) {
      return Result.fail<ShopLocation>(shopLocationOrError.error)
    }

    const shopLocation: ShopLocation = shopLocationOrError.getValue()

    try {
      await this.shopLocationRepo.save(shopLocation)

      console.log(`[Shop Location Created]: Shopid ${shop.id} `)
    } catch (err) {
      return Result.fail<ShopLocation>(err)
    }

    return Result.ok<ShopLocation>(shopLocation)
  }
}
