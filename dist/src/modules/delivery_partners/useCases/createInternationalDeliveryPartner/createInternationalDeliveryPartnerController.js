"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInternationalDeliveryPartnerController = void 0;
const BaseController_1 = require("../../../../core/infra/BaseController");
const AppError_1 = require("../../../../core/logic/AppError");
const internationalDeliveryPartnerMap_1 = require("../../mappers/internationalDeliveryPartnerMap");
const createInternationalDeliveryPartnerErrors_1 = require("./createInternationalDeliveryPartnerErrors");
class CreateInternationalDeliveryPartnerController extends BaseController_1.BaseController {
    constructor(useCase) {
        super();
        this.useCase = useCase;
    }
    async executeImpl() {
        const dto = this.req.body;
        try {
            const result = await this.useCase.execute(dto);
            const resultVal = result.value;
            if (result.isLeft()) {
                const error = result.value;
                switch (error.constructor) {
                    case createInternationalDeliveryPartnerErrors_1.CreateInternationalDeliveryPartnerErrors.InternationalDeliveryPartnerAlreadyExists:
                        return this.conflict(error.errorValue().message);
                    case createInternationalDeliveryPartnerErrors_1.CreateInternationalDeliveryPartnerErrors.GuardError:
                        return this.conflict(error.errorValue().message);
                    case AppError_1.GenericAppError.UnexpectedError:
                        return this.conflict(error.errorValue().message);
                    default:
                        return this.fail(error.errorValue());
                }
            }
            else {
                return this.ok(this.res, internationalDeliveryPartnerMap_1.InternationalDeliveryPartnerMap.toResponeDto(resultVal.getValue()));
            }
        }
        catch (err) {
            this.fail(err);
        }
    }
}
exports.CreateInternationalDeliveryPartnerController = CreateInternationalDeliveryPartnerController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlSW50ZXJuYXRpb25hbERlbGl2ZXJ5UGFydG5lckNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9kZWxpdmVyeV9wYXJ0bmVycy91c2VDYXNlcy9jcmVhdGVJbnRlcm5hdGlvbmFsRGVsaXZlcnlQYXJ0bmVyL2NyZWF0ZUludGVybmF0aW9uYWxEZWxpdmVyeVBhcnRuZXJDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBFQUF1RTtBQUN2RSw4REFBa0U7QUFDbEUsbUdBQWdHO0FBRWhHLHlHQUFzRztBQUd0RyxNQUFhLDRDQUE2QyxTQUFRLCtCQUFjO0lBRzlFLFlBQVksT0FBa0Q7UUFDNUQsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRUQsS0FBSyxDQUFDLFdBQVc7UUFDZixNQUFNLEdBQUcsR0FBMEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUE2QyxDQUFDO1FBRTFHLElBQUk7WUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDL0IsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ25CLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBRTNCLFFBQVEsS0FBSyxDQUFDLFdBQVcsRUFBRTtvQkFDekIsS0FBSyxtRkFBd0MsQ0FBQyx5Q0FBeUM7d0JBQ3JGLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ25ELEtBQUssbUZBQXdDLENBQUMsVUFBVTt3QkFDdEQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbkQsS0FBSywwQkFBZSxDQUFDLGVBQWU7d0JBQ2xDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ25EO3dCQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztpQkFDeEM7YUFDRjtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxpRUFBK0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM5RjtTQUNGO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQztDQUNGO0FBbENELG9HQWtDQyJ9