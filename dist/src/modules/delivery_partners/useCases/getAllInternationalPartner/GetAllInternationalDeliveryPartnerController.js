"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllInternationalDeliveryPartnerController = void 0;
const BaseController_1 = require("../../../../core/infra/BaseController");
const internationalDeliveryPartnerMap_1 = require("../../mappers/internationalDeliveryPartnerMap");
class GetAllInternationalDeliveryPartnerController extends BaseController_1.BaseController {
    constructor(useCase) {
        super();
        this.useCase = useCase;
    }
    async executeImpl() {
        try {
            const result = await this.useCase.execute();
            if (result.isLeft()) {
                const error = result.value;
                switch (error.constructor) {
                    default:
                        return this.fail(error.errorValue().message);
                }
            }
            else {
                return this.ok(this.res, internationalDeliveryPartnerMap_1.InternationalDeliveryPartnerMap.toAllResponeDto(result.value.getValue()));
            }
        }
        catch (err) {
            this.fail(err);
        }
    }
}
exports.GetAllInternationalDeliveryPartnerController = GetAllInternationalDeliveryPartnerController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0QWxsSW50ZXJuYXRpb25hbERlbGl2ZXJ5UGFydG5lckNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9kZWxpdmVyeV9wYXJ0bmVycy91c2VDYXNlcy9nZXRBbGxJbnRlcm5hdGlvbmFsUGFydG5lci9HZXRBbGxJbnRlcm5hdGlvbmFsRGVsaXZlcnlQYXJ0bmVyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwRUFBdUU7QUFDdkUsbUdBQWdHO0FBR2hHLE1BQWEsNENBQTZDLFNBQVEsK0JBQWM7SUFHOUUsWUFBWSxPQUFrRDtRQUM1RCxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxLQUFLLENBQUMsV0FBVztRQUNmLElBQUk7WUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFNUMsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ25CLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBRTNCLFFBQVEsS0FBSyxDQUFDLFdBQVcsRUFBRTtvQkFDekI7d0JBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDaEQ7YUFDRjtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxpRUFBK0IsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDcEc7U0FDRjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoQjtJQUNILENBQUM7Q0FDRjtBQTFCRCxvR0EwQkMifQ==