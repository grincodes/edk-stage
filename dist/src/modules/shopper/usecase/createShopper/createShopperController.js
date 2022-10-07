"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShopperController = void 0;
const BaseController_1 = require("../../../../core/infra/BaseController");
const AppError_1 = require("../../../../core/logic/AppError");
const ShopperMap_1 = require("../../mappers/ShopperMap");
const createShopperErrors_1 = require("./createShopperErrors");
class CreateShopperController extends BaseController_1.BaseController {
    constructor(useCase) {
        super();
        this.useCase = useCase;
    }
    async executeImpl() {
        const dto = this.req.body;
        dto.decoded = this.authReq;
        dto.shopper_user_id = this.authReq.userId;
        try {
            const result = await this.useCase.execute(dto);
            const resultVal = result.value;
            if (result.isLeft()) {
                const error = result.value;
                switch (error.constructor) {
                    case createShopperErrors_1.CreateShopperErrors.ShopperAlreadyExists:
                        return this.conflict(error.errorValue().message);
                    case createShopperErrors_1.CreateShopperErrors.GuardError:
                        return this.conflict(error.errorValue().message);
                    case AppError_1.GenericAppError.UnexpectedError:
                        return this.conflict(error.errorValue().message);
                    default:
                        return this.fail(error.errorValue());
                }
            }
            else {
                return this.ok(this.res, ShopperMap_1.ShopperMap.toResponseDto(resultVal.getValue()));
            }
        }
        catch (err) {
            this.fail(err);
        }
    }
}
exports.CreateShopperController = CreateShopperController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlU2hvcHBlckNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zaG9wcGVyL3VzZWNhc2UvY3JlYXRlU2hvcHBlci9jcmVhdGVTaG9wcGVyQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwwRUFBc0U7QUFDdEUsOERBQWlFO0FBQ2pFLHlEQUFxRDtBQUVyRCwrREFBMkQ7QUFHM0QsTUFBYSx1QkFBd0IsU0FBUSwrQkFBYztJQUd6RCxZQUFZLE9BQTZCO1FBQ3ZDLEtBQUssRUFBRSxDQUFBO1FBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7SUFDeEIsQ0FBQztJQUVELEtBQUssQ0FBQyxXQUFXO1FBQ2YsTUFBTSxHQUFHLEdBQXFCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBd0IsQ0FBQTtRQUMvRCxHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUE7UUFDMUIsR0FBRyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQTtRQUV6QyxJQUFJO1lBQ0YsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUM5QyxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFBO1lBQzlCLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNuQixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFBO2dCQUUxQixRQUFRLEtBQUssQ0FBQyxXQUFXLEVBQUU7b0JBQ3pCLEtBQUsseUNBQW1CLENBQUMsb0JBQW9CO3dCQUMzQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFBO29CQUNsRCxLQUFLLHlDQUFtQixDQUFDLFVBQVU7d0JBQ2pDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ2xELEtBQUssMEJBQWUsQ0FBQyxlQUFlO3dCQUNsQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFBO29CQUNsRDt3QkFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUE7aUJBQ3ZDO2FBQ0Y7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsdUJBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQTthQUN6RTtTQUNGO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ2Y7SUFDSCxDQUFDO0NBQ0Y7QUFwQ0QsMERBb0NDIn0=