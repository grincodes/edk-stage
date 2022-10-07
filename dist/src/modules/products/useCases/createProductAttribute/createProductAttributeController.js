"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductAttributeController = void 0;
const BaseController_1 = require("../../../../core/infra/BaseController");
const AppError_1 = require("../../../../core/logic/AppError");
const productAttributeMap_1 = require("../../mappers/productAttributeMap");
const createProductAttributeErrors_1 = require("./createProductAttributeErrors");
class CreateProductAttributeController extends BaseController_1.BaseController {
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
                    case createProductAttributeErrors_1.CreateProductAttributeErrors.ProductAttributeAlreadyExists:
                        return this.conflict(error.errorValue().message);
                    case createProductAttributeErrors_1.CreateProductAttributeErrors.GuardError:
                        return this.conflict(error.errorValue().message);
                    case AppError_1.GenericAppError.UnexpectedError:
                        return this.conflict(error.errorValue().message);
                    default:
                        return this.fail(error.errorValue());
                }
            }
            else {
                return this.ok(this.res, productAttributeMap_1.ProductAttributeMap.toResponeDto(resultVal.getValue()));
            }
        }
        catch (err) {
            this.fail(err);
        }
    }
}
exports.CreateProductAttributeController = CreateProductAttributeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJvZHVjdEF0dHJpYnV0ZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9kdWN0cy91c2VDYXNlcy9jcmVhdGVQcm9kdWN0QXR0cmlidXRlL2NyZWF0ZVByb2R1Y3RBdHRyaWJ1dGVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBFQUF1RTtBQUN2RSw4REFBa0U7QUFDbEUsMkVBQXdFO0FBRXhFLGlGQUE4RTtBQUc5RSxNQUFhLGdDQUFpQyxTQUFRLCtCQUFjO0lBR2xFLFlBQVksT0FBc0M7UUFDaEQsS0FBSyxFQUFFLENBQUM7UUFDUixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRUQsS0FBSyxDQUFDLFdBQVc7UUFDZixNQUFNLEdBQUcsR0FBOEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFpQyxDQUFDO1FBRWxGLElBQUk7WUFDRixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDL0IsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ25CLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBRTNCLFFBQVEsS0FBSyxDQUFDLFdBQVcsRUFBRTtvQkFDekIsS0FBSywyREFBNEIsQ0FBQyw2QkFBNkI7d0JBQzdELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ25ELEtBQUssMkRBQTRCLENBQUMsVUFBVTt3QkFDMUMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDbkQsS0FBSywwQkFBZSxDQUFDLGVBQWU7d0JBQ2xDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ25EO3dCQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztpQkFDeEM7YUFDRjtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSx5Q0FBbUIsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNsRjtTQUNGO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQztDQUNGO0FBbENELDRFQWtDQyJ9