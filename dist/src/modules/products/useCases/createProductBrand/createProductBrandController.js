"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductBrandController = void 0;
const BaseController_1 = require("../../../../core/infra/BaseController");
const AppError_1 = require("../../../../core/logic/AppError");
const productBrandMap_1 = require("../../mappers/productBrandMap");
const createProductBrandErrors_1 = require("./createProductBrandErrors");
class CreateProductBrandController extends BaseController_1.BaseController {
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
                    case createProductBrandErrors_1.CreateProductBrandErrors.BrandAlreadyExists:
                        return this.conflict(error.errorValue().message);
                    case createProductBrandErrors_1.CreateProductBrandErrors.GuardError:
                        return this.conflict(error.errorValue().message);
                    case AppError_1.GenericAppError.UnexpectedError:
                        return this.conflict(error.errorValue().message);
                    default:
                        return this.fail(error.errorValue());
                }
            }
            else {
                return this.ok(this.res, productBrandMap_1.ProductBrandMap.toResponeDto(resultVal.getValue()));
            }
        }
        catch (err) {
            this.fail(err);
        }
    }
}
exports.CreateProductBrandController = CreateProductBrandController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJvZHVjdEJyYW5kQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3VzZUNhc2VzL2NyZWF0ZVByb2R1Y3RCcmFuZC9jcmVhdGVQcm9kdWN0QnJhbmRDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBFQUFzRTtBQUN0RSw4REFBaUU7QUFDakUsbUVBQStEO0FBRS9ELHlFQUFxRTtBQUdyRSxNQUFhLDRCQUE2QixTQUFRLCtCQUFjO0lBRzlELFlBQVksT0FBa0M7UUFDNUMsS0FBSyxFQUFFLENBQUE7UUFDUCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtJQUN4QixDQUFDO0lBRUQsS0FBSyxDQUFDLFdBQVc7UUFDZixNQUFNLEdBQUcsR0FBMEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUE2QixDQUFBO1FBRXpFLElBQUk7WUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQzlDLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUE7WUFDOUIsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ25CLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUE7Z0JBRTFCLFFBQVEsS0FBSyxDQUFDLFdBQVcsRUFBRTtvQkFDekIsS0FBSyxtREFBd0IsQ0FBQyxrQkFBa0I7d0JBQzlDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ2xELEtBQUssbURBQXdCLENBQUMsVUFBVTt3QkFDdEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDbEQsS0FBSywwQkFBZSxDQUFDLGVBQWU7d0JBQ2xDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ2xEO3dCQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQTtpQkFDdkM7YUFDRjtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxpQ0FBZSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFBO2FBQzdFO1NBQ0Y7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDZjtJQUNILENBQUM7Q0FDRjtBQWxDRCxvRUFrQ0MifQ==