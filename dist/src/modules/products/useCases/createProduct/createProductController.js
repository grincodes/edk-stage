"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductController = void 0;
const BaseController_1 = require("../../../../core/infra/BaseController");
const AppError_1 = require("../../../../core/logic/AppError");
const productMap_1 = require("../../mappers/productMap");
const createProductImageErrors_1 = require("../createProductImage/createProductImageErrors");
const createProductErrors_1 = require("./createProductErrors");
class CreateProductController extends BaseController_1.BaseController {
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
                    case createProductErrors_1.CreateProductErrors.GuardError:
                        return this.conflict(error.errorValue().message);
                    case createProductErrors_1.CreateProductErrors.ProductAlreadyExists:
                        return this.conflict(error.errorValue().message);
                    case createProductErrors_1.CreateProductErrors.ProductMustHaveVariants:
                        return this.conflict(error.errorValue().message);
                    case createProductImageErrors_1.CreateProductImageErrors.InvalidImageUrl:
                        return this.conflict(error.errorValue().message);
                    case createProductImageErrors_1.CreateProductImageErrors.GuardError:
                        return this.conflict(error.errorValue().message);
                    case AppError_1.GenericAppError.UnexpectedError:
                        return this.conflict(error.errorValue().message);
                    default:
                        return this.fail(error.errorValue().message ? error.errorValue().message : error.errorValue());
                }
            }
            else {
                return this.ok(this.res, productMap_1.ProductMap.toResponeDto(resultVal.getValue()));
            }
        }
        catch (err) {
            this.fail(err);
        }
    }
}
exports.CreateProductController = CreateProductController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJvZHVjdENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9kdWN0cy91c2VDYXNlcy9jcmVhdGVQcm9kdWN0L2NyZWF0ZVByb2R1Y3RDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBFQUFzRTtBQUN0RSw4REFBaUU7QUFDakUseURBQXFEO0FBQ3JELDZGQUF5RjtBQUV6RiwrREFBMkQ7QUFHM0QsTUFBYSx1QkFBd0IsU0FBUSwrQkFBYztJQUd6RCxZQUFZLE9BQTZCO1FBQ3ZDLEtBQUssRUFBRSxDQUFBO1FBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7SUFDeEIsQ0FBQztJQUVTLEtBQUssQ0FBQyxXQUFXO1FBQ3pCLE1BQU0sR0FBRyxHQUFxQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQXdCLENBQUE7UUFFL0QsSUFBSTtZQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDOUMsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQTtZQUM5QixJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDbkIsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQTtnQkFFMUIsUUFBUSxLQUFLLENBQUMsV0FBVyxFQUFFO29CQUN6QixLQUFLLHlDQUFtQixDQUFDLFVBQVU7d0JBQ2pDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ2xELEtBQUsseUNBQW1CLENBQUMsb0JBQW9CO3dCQUMzQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFBO29CQUNsRCxLQUFLLHlDQUFtQixDQUFDLHVCQUF1Qjt3QkFDOUMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtvQkFDbEQsS0FBSyxtREFBd0IsQ0FBQyxlQUFlO3dCQUMzQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFBO29CQUNsRCxLQUFLLG1EQUF3QixDQUFDLFVBQVU7d0JBQ3RDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7b0JBQ2xELEtBQUssMEJBQWUsQ0FBQyxlQUFlO3dCQUNsQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFBO29CQUNsRDt3QkFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUE7aUJBQ2pHO2FBQ0Y7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsdUJBQVUsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQTthQUN4RTtTQUNGO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ2Y7SUFDSCxDQUFDO0NBQ0Y7QUF4Q0QsMERBd0NDIn0=