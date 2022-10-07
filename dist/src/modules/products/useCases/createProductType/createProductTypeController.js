"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductTypeController = void 0;
const BaseController_1 = require("../../../../core/infra/BaseController");
const AppError_1 = require("../../../../core/logic/AppError");
const productTypeMap_1 = require("../../mappers/productTypeMap");
const createProductTypeErrors_1 = require("./createProductTypeErrors");
class CreateProductTypeController extends BaseController_1.BaseController {
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
                    case createProductTypeErrors_1.CreateProductTypeErrors.ProductTypeAlreadyExists:
                        return this.conflict(error.errorValue().message);
                    case createProductTypeErrors_1.CreateProductTypeErrors.GuardError:
                        return this.conflict(error.errorValue().message);
                    case AppError_1.GenericAppError.UnexpectedError:
                        return this.conflict(error.errorValue().message);
                    default:
                        return this.fail(error.errorValue());
                }
            }
            else {
                return this.ok(this.res, productTypeMap_1.ProductTypeMap.toResponeDto(resultVal.getValue()));
            }
        }
        catch (err) {
            this.fail(err);
        }
    }
}
exports.CreateProductTypeController = CreateProductTypeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJvZHVjdFR5cGVDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvdXNlQ2FzZXMvY3JlYXRlUHJvZHVjdFR5cGUvY3JlYXRlUHJvZHVjdFR5cGVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBFQUFzRTtBQUN0RSw4REFBaUU7QUFDakUsaUVBQTZEO0FBRTdELHVFQUFtRTtBQUduRSxNQUFhLDJCQUE0QixTQUFRLCtCQUFjO0lBRzdELFlBQVksT0FBaUM7UUFDM0MsS0FBSyxFQUFFLENBQUE7UUFDUCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtJQUN4QixDQUFDO0lBRUQsS0FBSyxDQUFDLFdBQVc7UUFDZixNQUFNLEdBQUcsR0FBeUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUE0QixDQUFBO1FBRXZFLElBQUk7WUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQzlDLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUE7WUFDOUIsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ25CLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUE7Z0JBRTFCLFFBQVEsS0FBSyxDQUFDLFdBQVcsRUFBRTtvQkFDekIsS0FBSyxpREFBdUIsQ0FBQyx3QkFBd0I7d0JBQ25ELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ2xELEtBQUssaURBQXVCLENBQUMsVUFBVTt3QkFDckMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDbEQsS0FBSywwQkFBZSxDQUFDLGVBQWU7d0JBQ2xDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ2xEO3dCQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQTtpQkFDdkM7YUFDRjtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSwrQkFBYyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFBO2FBQzVFO1NBQ0Y7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDZjtJQUNILENBQUM7Q0FDRjtBQWxDRCxrRUFrQ0MifQ==