"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductAttributeValueController = void 0;
const BaseController_1 = require("../../../../core/infra/BaseController");
const AppError_1 = require("../../../../core/logic/AppError");
const productAttributeValueMap_1 = require("../../mappers/productAttributeValueMap");
const createProductAttributeValueErrors_1 = require("./createProductAttributeValueErrors");
class CreateProductAttributeValueController extends BaseController_1.BaseController {
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
                    case createProductAttributeValueErrors_1.CreateProductAttributeValueErrors.ProductAttributeValueAlreadyExists:
                        return this.conflict(error.errorValue().message);
                    case createProductAttributeValueErrors_1.CreateProductAttributeValueErrors.GuardError:
                        return this.conflict(error.errorValue().message);
                    case AppError_1.GenericAppError.UnexpectedError:
                        return this.conflict(error.errorValue().message);
                    default:
                        return this.fail(error.errorValue());
                }
            }
            else {
                return this.ok(this.res, productAttributeValueMap_1.ProductAttributeValueMap.toResponeDto(resultVal.getValue()));
            }
        }
        catch (err) {
            this.fail(err);
        }
    }
}
exports.CreateProductAttributeValueController = CreateProductAttributeValueController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJvZHVjdEF0dHJpYnV0ZVZhbHVlQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3VzZUNhc2VzL2NyZWF0ZVByb2R1Y3RBdHRyaWJ1dGVWYWx1ZS9jcmVhdGVQcm9kdWN0QXR0cmlidXRlVmFsdWVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBFQUF1RTtBQUN2RSw4REFBa0U7QUFDbEUscUZBQWtGO0FBRWxGLDJGQUF3RjtBQUd4RixNQUFhLHFDQUFzQyxTQUFRLCtCQUFjO0lBR3ZFLFlBQVksT0FBMkM7UUFDckQsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRUQsS0FBSyxDQUFDLFdBQVc7UUFDZixNQUFNLEdBQUcsR0FBbUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFzQyxDQUFDO1FBRTVGLElBQUk7WUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDL0IsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ25CLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBRTNCLFFBQVEsS0FBSyxDQUFDLFdBQVcsRUFBRTtvQkFDekIsS0FBSyxxRUFBaUMsQ0FBQyxrQ0FBa0M7d0JBQ3ZFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ25ELEtBQUsscUVBQWlDLENBQUMsVUFBVTt3QkFDL0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbkQsS0FBSywwQkFBZSxDQUFDLGVBQWU7d0JBQ2xDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ25EO3dCQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztpQkFDeEM7YUFDRjtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxtREFBd0IsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN2RjtTQUNGO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQztDQUNGO0FBbENELHNGQWtDQyJ9