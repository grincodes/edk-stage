"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShopController = void 0;
const BaseController_1 = require("../../../../core/infra/BaseController");
const AppError_1 = require("../../../../core/logic/AppError");
const ShopMap_1 = require("../../mappers/ShopMap");
const createShopErrors_1 = require("./createShopErrors");
class CreateShopController extends BaseController_1.BaseController {
    constructor(useCase) {
        super();
        this.useCase = useCase;
    }
    async executeImpl() {
        const dto = this.req.body;
        dto.owner_id = this.authReq.userId;
        try {
            const result = await this.useCase.execute(dto);
            const resultVal = result.value;
            if (result.isLeft()) {
                const error = result.value;
                switch (error.constructor) {
                    case createShopErrors_1.CreateShopErrors.ShopAlreadyExists:
                        return this.conflict(error.errorValue().message);
                    case createShopErrors_1.CreateShopErrors.GuardError:
                        return this.conflict(error.errorValue().message);
                    case AppError_1.GenericAppError.UnexpectedError:
                        return this.conflict(error.errorValue().message);
                    default:
                        return this.fail(error.errorValue());
                }
            }
            else {
                return this.ok(this.res, ShopMap_1.ShopMap.toResponseDto(resultVal.getValue()));
            }
        }
        catch (err) {
            this.fail(err);
        }
    }
}
exports.CreateShopController = CreateShopController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlU2hvcENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zaG9wL3VzZUNhc2VzL2NyZWF0ZVNob3AvY3JlYXRlU2hvcENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMEVBQXNFO0FBQ3RFLDhEQUFpRTtBQUNqRSxtREFBK0M7QUFFL0MseURBQXFEO0FBR3JELE1BQWEsb0JBQXFCLFNBQVEsK0JBQWM7SUFHdEQsWUFBWSxPQUEwQjtRQUNwQyxLQUFLLEVBQUUsQ0FBQTtRQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO0lBQ3hCLENBQUM7SUFFRCxLQUFLLENBQUMsV0FBVztRQUNmLE1BQU0sR0FBRyxHQUFrQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQXFCLENBQUE7UUFDekQsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQTtRQUVsQyxJQUFJO1lBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUM5QyxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFBO1lBQzlCLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNuQixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFBO2dCQUUxQixRQUFRLEtBQUssQ0FBQyxXQUFXLEVBQUU7b0JBQ3pCLEtBQUssbUNBQWdCLENBQUMsaUJBQWlCO3dCQUNyQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFBO29CQUNsRCxLQUFLLG1DQUFnQixDQUFDLFVBQVU7d0JBQzlCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ2xELEtBQUssMEJBQWUsQ0FBQyxlQUFlO3dCQUNsQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFBO29CQUNsRDt3QkFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUE7aUJBQ3ZDO2FBQ0Y7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsaUJBQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQTthQUN0RTtTQUNGO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ2Y7SUFDSCxDQUFDO0NBQ0Y7QUFuQ0Qsb0RBbUNDIn0=