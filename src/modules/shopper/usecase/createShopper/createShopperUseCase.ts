import { UniqueEntityID } from "../../../../core/domain/UniqueEntityID"
import { UseCase } from "../../../../core/domain/UseCase"
import { GenericAppError } from "../../../../core/logic/AppError"
import { Either, left, Result, right } from "../../../../core/logic/Result"
import { NigeriaPhone } from "../../../../shared/domain_types/NigeriaPhoneNumber"
import { UserId } from "../../../users/domain/userId"
import { Shopper } from "../../domain/shopper"
import { ShopperAddress } from "../../domain/shopperAddress"
import { ShopperUserName } from "../../domain/shopperUserName"
import { IShopperAddressRepo } from "../../repos/shopperAddressRepo"
import { IShopperRepo } from "../../repos/shopperRepo"
import { CreateShopperDTO } from "./createShopperDTO"
import { CreateShopperErrors } from "./createShopperErrors"

type Response = Either<GenericAppError.UnexpectedError | CreateShopperErrors.ShopperAlreadyExists | Result<any>, Result<Shopper>>

export class CreateShopperUseCase implements UseCase<CreateShopperDTO, Promise<Response>> {
  private shopperRepo: IShopperRepo
  private shopperAddressRepo: IShopperAddressRepo

  constructor(shopperRepo: IShopperRepo, shopperAddressRepo: IShopperAddressRepo) {
    this.shopperRepo = shopperRepo
    this.shopperAddressRepo = shopperAddressRepo
  }

  async execute(req: CreateShopperDTO): Promise<Response> {
    const shopperUserNameOrError = ShopperUserName.create(req.shopper_username)
    const shopperPhoneOrError = NigeriaPhone.create(Number(req.shopper_phone))
    const shopperUserIdOrError = UserId.create(new UniqueEntityID(req.shopper_user_id))
    const shopperAddressOrError = ShopperAddress.create(req.shopper_address)

    const combinedPropsResult = Result.combine([shopperUserNameOrError, shopperPhoneOrError, shopperUserIdOrError, shopperAddressOrError])

    if (combinedPropsResult.isFailure) {
      return left(Result.fail<void>(combinedPropsResult.error)) as Response
    }

    const shopperOrError = Shopper.create({
      shopperUserName: shopperUserNameOrError.getValue(),
      userId: shopperUserIdOrError.getValue(),
      shopperPhone: shopperPhoneOrError.getValue(),
      dob: req.shopper_dob,
      shopperAddress: shopperAddressOrError.getValue(),
    })

    if (shopperOrError.isFailure) {
      return left(Result.fail<void>(shopperOrError.error)) as Response
    }

    const shopper: Shopper = shopperOrError.getValue()

    const shopperAlreadyExists = await this.shopperRepo.exists(req.shopper_username, req.shopper_user_id)

    if (shopperAlreadyExists) {
      return left(new CreateShopperErrors.ShopperAlreadyExists()) as Response
    }

    //set shopperId on shopAddress
    shopper.shopperAddress.shopperId = shopper.shopperId

    const transaction = await this.shopperRepo.createTransaction()

    try {
      await this.shopperRepo.saveTransaction(shopper, transaction)
      console.log(`Shopper Account Created`)

      //save shop location
      await this.shopperAddressRepo.saveTransaction(shopper.shopperAddress, transaction)

      // commit transaction
      await transaction.commit()
    } catch (err) {
      await transaction.rollback()

      return left(new GenericAppError.UnexpectedError(err)) as Response
    }

    return right(Result.ok<Shopper>(shopper)) as Response
  }
}
