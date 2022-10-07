import { UniqueEntityID } from "../../../../core/domain/UniqueEntityID"
import { UseCase } from "../../../../core/domain/UseCase"
import { GenericAppError } from "../../../../core/logic/AppError"
import { Either, left, Result, right } from "../../../../core/logic/Result"
import { Email } from "../../../../shared/domain_types/Email"
import { Shop, ShopOwnerType } from "../../domain/shop"
import { ShopLocation } from "../../domain/shopLocation"
import { ShopLogo } from "../../domain/shopLogo"
import { ShopName } from "../../domain/shopName"
import { ShopPhone } from "../../domain/shopPhone"
import { IShopLocationRepo } from "../../repos/shopLocationRepo"
import { IShopRepo } from "../../repos/shopRepo"
import { CreateShopDTO } from "./createShopDTO"
import { CreateShopErrors } from "./createShopErrors"

type Response = Either<GenericAppError.UnexpectedError | CreateShopErrors.ShopAlreadyExists | Result<any>, Result<Shop>>

export class CreateShopUseCase implements UseCase<CreateShopDTO, Promise<Response>> {
  private shopRepo: IShopRepo
  private shopLocationRepo: IShopLocationRepo

  constructor(shopRepo: IShopRepo, shopLocationRepo: IShopLocationRepo) {
    this.shopRepo = shopRepo
    this.shopLocationRepo = shopLocationRepo
  }

  async execute(req: CreateShopDTO): Promise<Response> {
    const shopNameOrError = ShopName.create(req.shop_name)
    const shopPhoneOrError = ShopPhone.create(Number(req.shop_phone))
    const shopEmailOrError = Email.create(req.shop_email)
    const shopLogoOrError = ShopLogo.create(req.shop_logo)
    const shopLocationOrError = ShopLocation.create(req.shop_location)
    const categoryIdOrError = UniqueEntityID.isValidId(req.category_id) ? Result.ok<UniqueEntityID>(new UniqueEntityID(req.category_id)) : Result.fail<UniqueEntityID>("Invalid category id")

    const ownerIdOrError = UniqueEntityID.isValidId(req.owner_id) ? Result.ok<UniqueEntityID>(new UniqueEntityID(req.owner_id)) : Result.fail<UniqueEntityID>("Invalid owner id")

    const localDeliveryIdOrError = UniqueEntityID.isValidId(req.local_delivery_partner_id)
      ? Result.ok<UniqueEntityID>(new UniqueEntityID(req.local_delivery_partner_id))
      : Result.fail<UniqueEntityID>("Invalid local delivery id")

    const internationalDeliveryIdOrError = UniqueEntityID.isValidId(req.international_delivery_partner_id)
      ? Result.ok<UniqueEntityID>(new UniqueEntityID(req.international_delivery_partner_id))
      : Result.fail<UniqueEntityID>("Invalid international delivery id")

    const combinedPropsResult = Result.combine([
      shopNameOrError,
      shopPhoneOrError,
      shopEmailOrError,
      shopLocationOrError,
      shopLogoOrError,
      categoryIdOrError,
      ownerIdOrError,
      localDeliveryIdOrError,
      internationalDeliveryIdOrError,
    ])

    if (combinedPropsResult.isFailure) {
      return left(Result.fail<void>(combinedPropsResult.error)) as Response
    }

    // todo Get UserType
    const shopOrError = Shop.create({
      shopName: shopNameOrError.getValue(),
      shopCategoryId: categoryIdOrError.getValue(),
      shopPhone: shopPhoneOrError.getValue(),
      shopEmail: shopEmailOrError.getValue(),
      shopLocation: shopLocationOrError.getValue(),
      shopLogo: shopLogoOrError.getValue(),
      shopOwnerType: ShopOwnerType.USER,
      ownerId: ownerIdOrError.getValue(),
      localDeliveryPartnerId: localDeliveryIdOrError.getValue(),
      internationalDeliveryPartnerId: internationalDeliveryIdOrError.getValue(),
      isVerified: false,
    })

    if (shopOrError.isFailure) {
      return left(Result.fail<void>(shopOrError.error)) as Response
    }

    const shop: Shop = shopOrError.getValue()

    const shopAlreadyExists = await this.shopRepo.exists(shop.shopEmail, shop.shopName.value)

    if (shopAlreadyExists) {
      return left(new CreateShopErrors.ShopAlreadyExists(shop.shopEmail.value)) as Response
    }

    //set shopId on shopLocation
    shop.shopLocation.shopId = shop.shopId

    const transaction = await this.shopRepo.createTransaction()

    try {
      // await this.shopRepo.save(shop);
      await this.shopRepo.saveTransaction(shop, transaction)
      console.log(`shop Created`)

      //save shop location
      await this.shopLocationRepo.saveTransaction(shop.shopLocation, transaction)

      // commit transaction
      await transaction.commit()
    } catch (err) {
      await transaction.rollback()

      return left(new GenericAppError.UnexpectedError(err)) as Response
    }

    return right(Result.ok<Shop>(shop)) as Response
  }
}
