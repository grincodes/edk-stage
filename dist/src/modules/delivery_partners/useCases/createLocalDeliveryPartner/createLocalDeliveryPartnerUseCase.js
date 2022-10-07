"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLocalDeliveryPartnerUseCase = void 0;
const AppError_1 = require("../../../../core/logic/AppError");
const Result_1 = require("../../../../core/logic/Result");
const deliveryPartnerName_1 = require("../../domain/deliveryPartnerName");
const localDeliveryPartners_1 = require("../../domain/localDeliveryPartners");
const createLocalDeliveryPartnerErrors_1 = require("./createLocalDeliveryPartnerErrors");
class CreateLocalDeliveryPartnerUseCase {
    constructor(localDeliveryPartnerRepo) {
        this.localDeliveryPartnerRepo = localDeliveryPartnerRepo;
    }
    async execute(req) {
        const deliveryPartnerNameOrError = deliveryPartnerName_1.DeliveryPartnerName.create(req.name);
        if (deliveryPartnerNameOrError.isFailure) {
            return (0, Result_1.left)(Result_1.Result.fail(deliveryPartnerNameOrError.error));
        }
        const localDeliveryPartnerOrError = localDeliveryPartners_1.LocalDeliveryPartner.create({
            delivery_partner_name: deliveryPartnerNameOrError.getValue(),
            isActive: true
        });
        if (localDeliveryPartnerOrError.isFailure) {
            return (0, Result_1.left)(Result_1.Result.fail(localDeliveryPartnerOrError.error));
        }
        const localDeliveryPartner = localDeliveryPartnerOrError.getValue();
        const localDeliveryPartnerAlreadyExists = await this.localDeliveryPartnerRepo.exists(localDeliveryPartner.deliveryPartnerName.value);
        if (localDeliveryPartnerAlreadyExists) {
            return (0, Result_1.left)(new createLocalDeliveryPartnerErrors_1.CreateLocalDeliveryPartnerErrors.LocalDeliveryPartnerAlreadyExists(localDeliveryPartner.deliveryPartnerName.value));
        }
        try {
            await this.localDeliveryPartnerRepo.save(localDeliveryPartner);
            console.log(`Local Delivery Created`);
        }
        catch (err) {
            return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
        }
        return (0, Result_1.right)(Result_1.Result.ok(localDeliveryPartner));
    }
}
exports.CreateLocalDeliveryPartnerUseCase = CreateLocalDeliveryPartnerUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlTG9jYWxEZWxpdmVyeVBhcnRuZXJVc2VDYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvZGVsaXZlcnlfcGFydG5lcnMvdXNlQ2FzZXMvY3JlYXRlTG9jYWxEZWxpdmVyeVBhcnRuZXIvY3JlYXRlTG9jYWxEZWxpdmVyeVBhcnRuZXJVc2VDYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDhEQUFrRTtBQUNsRSwwREFBNEU7QUFDNUUsMEVBQXVFO0FBQ3ZFLDhFQUEwRTtBQUcxRSx5RkFBc0Y7QUFJdEYsTUFBYSxpQ0FBaUM7SUFHNUMsWUFBWSx3QkFBbUQ7UUFDN0QsSUFBSSxDQUFDLHdCQUF3QixHQUFHLHdCQUF3QixDQUFDO0lBQzNELENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQWtDO1FBQzlDLE1BQU0sMEJBQTBCLEdBQUcseUNBQW1CLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4RSxJQUFJLDBCQUEwQixDQUFDLFNBQVMsRUFBRTtZQUN4QyxPQUFPLElBQUEsYUFBSSxFQUFDLGVBQU0sQ0FBQyxJQUFJLENBQU8sMEJBQTBCLENBQUMsS0FBSyxDQUFDLENBQWEsQ0FBQztTQUM5RTtRQUVELE1BQU0sMkJBQTJCLEdBQUcsNENBQW9CLENBQUMsTUFBTSxDQUFDO1lBQzlELHFCQUFxQixFQUFFLDBCQUEwQixDQUFDLFFBQVEsRUFBRTtZQUM1RCxRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztRQUVILElBQUksMkJBQTJCLENBQUMsU0FBUyxFQUFFO1lBQ3pDLE9BQU8sSUFBQSxhQUFJLEVBQUMsZUFBTSxDQUFDLElBQUksQ0FBTywyQkFBMkIsQ0FBQyxLQUFLLENBQUMsQ0FBYSxDQUFDO1NBQy9FO1FBRUQsTUFBTSxvQkFBb0IsR0FBeUIsMkJBQTJCLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFMUYsTUFBTSxpQ0FBaUMsR0FBRyxNQUFNLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFckksSUFBSSxpQ0FBaUMsRUFBRTtZQUNyQyxPQUFPLElBQUEsYUFBSSxFQUFDLElBQUksbUVBQWdDLENBQUMsaUNBQWlDLENBQUMsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQWEsQ0FBQztTQUNqSjtRQUVELElBQUk7WUFDRixNQUFNLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7U0FDdkM7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sSUFBQSxhQUFJLEVBQUMsSUFBSSwwQkFBZSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBYSxDQUFDO1NBQ25FO1FBRUQsT0FBTyxJQUFBLGNBQUssRUFBQyxlQUFNLENBQUMsRUFBRSxDQUF1QixvQkFBb0IsQ0FBQyxDQUFhLENBQUM7SUFDbEYsQ0FBQztDQUNGO0FBeENELDhFQXdDQyJ9