"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetShopByIdController = void 0;
const BaseController_1 = require("../../../../core/infra/BaseController");
const getShopByIdErrors_1 = require("./getShopByIdErrors");
class GetShopByIdController extends BaseController_1.BaseController {
    constructor(useCase) {
        super();
        this.useCase = useCase;
    }
    async executeImpl() {
        const dto = {
            shopId: this.req.params.shopId
        };
        try {
            const result = await this.useCase.execute(dto);
            if (result.isLeft()) {
                const error = result.value;
                switch (error.constructor) {
                    case getShopByIdErrors_1.GetShopByIdErrors.ShopDoesNotExistError:
                        return this.notFound(error.errorValue().message);
                    default:
                        return this.fail(error.errorValue().message);
                }
            }
            else {
                const shop = result.value.getValue();
                return this.ok(this.res, shop);
            }
        }
        catch (err) {
            return this.fail(err);
        }
    }
}
exports.GetShopByIdController = GetShopByIdController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U2hvcEJ5SWRDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvc2hvcC91c2VDYXNlcy9nZXRTaG9wQnlJZC9nZXRTaG9wQnlJZENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMEVBQXVFO0FBRXZFLDJEQUF3RDtBQUd4RCxNQUFhLHFCQUFzQixTQUFRLCtCQUFjO0lBR3ZELFlBQVksT0FBMkI7UUFDckMsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRUQsS0FBSyxDQUFDLFdBQVc7UUFDZixNQUFNLEdBQUcsR0FBbUI7WUFDMUIsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU07U0FDL0IsQ0FBQztRQUVGLElBQUk7WUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRS9DLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNuQixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUUzQixRQUFRLEtBQUssQ0FBQyxXQUFXLEVBQUU7b0JBQ3pCLEtBQUsscUNBQWlCLENBQUMscUJBQXFCO3dCQUMxQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNuRDt3QkFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNoRDthQUNGO2lCQUFNO2dCQUNMLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3JDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ2hDO1NBQ0Y7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7Q0FDRjtBQWpDRCxzREFpQ0MifQ==