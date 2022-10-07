"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShopCategoryController = void 0;
const BaseController_1 = require("../../../../core/infra/BaseController");
const AppError_1 = require("../../../../core/logic/AppError");
const ShopCategoryMap_1 = require("../../mappers/ShopCategoryMap");
const createShopCategoryErrors_1 = require("./createShopCategoryErrors");
class CreateShopCategoryController extends BaseController_1.BaseController {
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
                    case createShopCategoryErrors_1.CreateShopCategoryErrors.ShopCategoryAlreadyExists:
                        return this.conflict(error.errorValue().message);
                    case createShopCategoryErrors_1.CreateShopCategoryErrors.GuardError:
                        return this.conflict(error.errorValue().message);
                    case AppError_1.GenericAppError.UnexpectedError:
                        return this.conflict(error.errorValue().message);
                    default:
                        return this.fail(error.errorValue());
                }
            }
            else {
                return this.ok(this.res, ShopCategoryMap_1.ShopCategoryMap.toResponeDto(resultVal.getValue()));
            }
        }
        catch (err) {
            this.fail(err);
        }
    }
}
exports.CreateShopCategoryController = CreateShopCategoryController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlU2hvcENhdGVnb3J5Q29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Nob3AvdXNlQ2FzZXMvY3JlYXRlU2hvcENhdGVnb3J5L2NyZWF0ZVNob3BDYXRlZ29yeUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMEVBQXVFO0FBQ3ZFLDhEQUFrRTtBQUNsRSxtRUFBZ0U7QUFFaEUseUVBQXNFO0FBR3RFLE1BQWEsNEJBQTZCLFNBQVEsK0JBQWM7SUFHOUQsWUFBWSxPQUFrQztRQUM1QyxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxLQUFLLENBQUMsV0FBVztRQUNmLE1BQU0sR0FBRyxHQUEwQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQTZCLENBQUM7UUFFMUUsSUFBSTtZQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0MsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUMvQixJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDbkIsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFFM0IsUUFBUSxLQUFLLENBQUMsV0FBVyxFQUFFO29CQUN6QixLQUFLLG1EQUF3QixDQUFDLHlCQUF5Qjt3QkFDckQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbkQsS0FBSyxtREFBd0IsQ0FBQyxVQUFVO3dCQUN0QyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNuRCxLQUFLLDBCQUFlLENBQUMsZUFBZTt3QkFDbEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbkQ7d0JBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO2lCQUN4QzthQUNGO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGlDQUFlLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDOUU7U0FDRjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoQjtJQUNILENBQUM7Q0FDRjtBQWxDRCxvRUFrQ0MifQ==