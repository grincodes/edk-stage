"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllLocalDeliveryPartnerUseCase = void 0;
const Result_1 = require("../../../../core/logic/Result");
const AppError_1 = require("../../../../core/logic/AppError");
class GetAllLocalDeliveryPartnerUseCase {
    constructor(localDeliveryPartnerRepo) {
        this.localDeliveryPartnerRepo = localDeliveryPartnerRepo;
    }
    async execute() {
        try {
            const localDeliveryPartners = await this.localDeliveryPartnerRepo.getAllLocalDeliveryPartner();
            return (0, Result_1.right)(Result_1.Result.ok(localDeliveryPartners));
        }
        catch (err) {
            return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
        }
    }
}
exports.GetAllLocalDeliveryPartnerUseCase = GetAllLocalDeliveryPartnerUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QWxsTG9jYWxEZWxpdmVyeVBhcnRuZXJVc2VDYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvZGVsaXZlcnlfcGFydG5lcnMvdXNlQ2FzZXMvZ2V0QWxsTG9jYWxEZWxpdmVyeVBhcnRuZXIvZ2V0QWxsTG9jYWxEZWxpdmVyeVBhcnRuZXJVc2VDYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDBEQUE0RTtBQUM1RSw4REFBa0U7QUFNbEUsTUFBYSxpQ0FBaUM7SUFHNUMsWUFBWSx3QkFBbUQ7UUFDN0QsSUFBSSxDQUFDLHdCQUF3QixHQUFHLHdCQUF3QixDQUFDO0lBQzNELENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTztRQUNYLElBQUk7WUFDRixNQUFNLHFCQUFxQixHQUFHLE1BQU0sSUFBSSxDQUFDLHdCQUF3QixDQUFDLDBCQUEwQixFQUFFLENBQUM7WUFFL0YsT0FBTyxJQUFBLGNBQUssRUFBQyxlQUFNLENBQUMsRUFBRSxDQUF5QixxQkFBcUIsQ0FBQyxDQUFhLENBQUM7U0FDcEY7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sSUFBQSxhQUFJLEVBQUMsSUFBSSwwQkFBZSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBYSxDQUFDO1NBQ25FO0lBQ0gsQ0FBQztDQUNGO0FBaEJELDhFQWdCQyJ9