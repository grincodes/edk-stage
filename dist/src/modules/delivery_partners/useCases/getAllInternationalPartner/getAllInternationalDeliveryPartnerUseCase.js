"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllInternationalDeliveryPartnerUseCase = void 0;
const Result_1 = require("../../../../core/logic/Result");
const AppError_1 = require("../../../../core/logic/AppError");
class GetAllInternationalDeliveryPartnerUseCase {
    constructor(internationalDeliveryPartnerRepo) {
        this.internationalDeliveryPartnerRepo = internationalDeliveryPartnerRepo;
    }
    async execute() {
        try {
            const internationalDeliveryPartners = await this.internationalDeliveryPartnerRepo.getAllInternationalDeliveryPartner();
            return (0, Result_1.right)(Result_1.Result.ok(internationalDeliveryPartners));
        }
        catch (err) {
            return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
        }
    }
}
exports.GetAllInternationalDeliveryPartnerUseCase = GetAllInternationalDeliveryPartnerUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QWxsSW50ZXJuYXRpb25hbERlbGl2ZXJ5UGFydG5lclVzZUNhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9kZWxpdmVyeV9wYXJ0bmVycy91c2VDYXNlcy9nZXRBbGxJbnRlcm5hdGlvbmFsUGFydG5lci9nZXRBbGxJbnRlcm5hdGlvbmFsRGVsaXZlcnlQYXJ0bmVyVXNlQ2FzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwwREFBMkU7QUFDM0UsOERBQWlFO0FBTWpFLE1BQWEseUNBQXlDO0lBR3BELFlBQVksZ0NBQW1FO1FBQzdFLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQTtJQUMxRSxDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQU87UUFDWCxJQUFJO1lBQ0YsTUFBTSw2QkFBNkIsR0FBRyxNQUFNLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxrQ0FBa0MsRUFBRSxDQUFBO1lBRXRILE9BQU8sSUFBQSxjQUFLLEVBQUMsZUFBTSxDQUFDLEVBQUUsQ0FBaUMsNkJBQTZCLENBQUMsQ0FBYSxDQUFBO1NBQ25HO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLElBQUEsYUFBSSxFQUFDLElBQUksMEJBQWUsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQWEsQ0FBQTtTQUNsRTtJQUNILENBQUM7Q0FDRjtBQWhCRCw4RkFnQkMifQ==