"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInternationalDeliveryPartnerUseCase = void 0;
const AppError_1 = require("../../../../core/logic/AppError");
const Result_1 = require("../../../../core/logic/Result");
const deliveryPartnerName_1 = require("../../domain/deliveryPartnerName");
const internationalDeliveryPartners_1 = require("../../domain/internationalDeliveryPartners");
const createInternationalDeliveryPartnerErrors_1 = require("./createInternationalDeliveryPartnerErrors");
class CreateInternationalDeliveryPartnerUseCase {
    constructor(internationalDeliveryPartnerRepo) {
        this.internationalDeliveryPartnerRepo = internationalDeliveryPartnerRepo;
    }
    async execute(req) {
        const deliveryPartnerNameOrError = deliveryPartnerName_1.DeliveryPartnerName.create(req.name);
        if (deliveryPartnerNameOrError.isFailure) {
            return (0, Result_1.left)(Result_1.Result.fail(deliveryPartnerNameOrError.error));
        }
        const internationalDeliveryPartnerOrError = internationalDeliveryPartners_1.InternationalDeliveryPartner.create({
            delivery_partner_name: deliveryPartnerNameOrError.getValue(),
            isActive: true
        });
        if (internationalDeliveryPartnerOrError.isFailure) {
            return (0, Result_1.left)(Result_1.Result.fail(internationalDeliveryPartnerOrError.error));
        }
        const internationalDeliveryPartner = internationalDeliveryPartnerOrError.getValue();
        const internationalDeliveryPartnerAlreadyExists = await this.internationalDeliveryPartnerRepo.exists(internationalDeliveryPartner.deliveryPartnerName.value);
        if (internationalDeliveryPartnerAlreadyExists) {
            return (0, Result_1.left)(new createInternationalDeliveryPartnerErrors_1.CreateInternationalDeliveryPartnerErrors.InternationalDeliveryPartnerAlreadyExists(internationalDeliveryPartner.deliveryPartnerName.value));
        }
        try {
            await this.internationalDeliveryPartnerRepo.save(internationalDeliveryPartner);
            console.log(`Local Delivery Created`);
        }
        catch (err) {
            return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
        }
        return (0, Result_1.right)(Result_1.Result.ok(internationalDeliveryPartner));
    }
}
exports.CreateInternationalDeliveryPartnerUseCase = CreateInternationalDeliveryPartnerUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlSW50ZXJuYXRpb25hbERlbGl2ZXJ5UGFydG5lclVzZUNhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9kZWxpdmVyeV9wYXJ0bmVycy91c2VDYXNlcy9jcmVhdGVJbnRlcm5hdGlvbmFsRGVsaXZlcnlQYXJ0bmVyL2NyZWF0ZUludGVybmF0aW9uYWxEZWxpdmVyeVBhcnRuZXJVc2VDYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDhEQUFrRTtBQUNsRSwwREFBNEU7QUFDNUUsMEVBQXVFO0FBQ3ZFLDhGQUEwRjtBQUcxRix5R0FBc0c7QUFJdEcsTUFBYSx5Q0FBeUM7SUFHcEQsWUFBWSxnQ0FBbUU7UUFDN0UsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQTBDO1FBQ3RELE1BQU0sMEJBQTBCLEdBQUcseUNBQW1CLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4RSxJQUFJLDBCQUEwQixDQUFDLFNBQVMsRUFBRTtZQUN4QyxPQUFPLElBQUEsYUFBSSxFQUFDLGVBQU0sQ0FBQyxJQUFJLENBQU8sMEJBQTBCLENBQUMsS0FBSyxDQUFDLENBQWEsQ0FBQztTQUM5RTtRQUVELE1BQU0sbUNBQW1DLEdBQUcsNERBQTRCLENBQUMsTUFBTSxDQUFDO1lBQzlFLHFCQUFxQixFQUFFLDBCQUEwQixDQUFDLFFBQVEsRUFBRTtZQUM1RCxRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztRQUVILElBQUksbUNBQW1DLENBQUMsU0FBUyxFQUFFO1lBQ2pELE9BQU8sSUFBQSxhQUFJLEVBQUMsZUFBTSxDQUFDLElBQUksQ0FBTyxtQ0FBbUMsQ0FBQyxLQUFLLENBQUMsQ0FBYSxDQUFDO1NBQ3ZGO1FBRUQsTUFBTSw0QkFBNEIsR0FBaUMsbUNBQW1DLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFbEgsTUFBTSx5Q0FBeUMsR0FBRyxNQUFNLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxNQUFNLENBQUMsNEJBQTRCLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFN0osSUFBSSx5Q0FBeUMsRUFBRTtZQUM3QyxPQUFPLElBQUEsYUFBSSxFQUFDLElBQUksbUZBQXdDLENBQUMseUNBQXlDLENBQUMsNEJBQTRCLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQWEsQ0FBQztTQUN6SztRQUVELElBQUk7WUFDRixNQUFNLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQztZQUMvRSxPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7U0FDdkM7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sSUFBQSxhQUFJLEVBQUMsSUFBSSwwQkFBZSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBYSxDQUFDO1NBQ25FO1FBRUQsT0FBTyxJQUFBLGNBQUssRUFBQyxlQUFNLENBQUMsRUFBRSxDQUErQiw0QkFBNEIsQ0FBQyxDQUFhLENBQUM7SUFDbEcsQ0FBQztDQUNGO0FBeENELDhGQXdDQyJ9