"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProductAttributeController = void 0;
const BaseController_1 = require("../../../../core/infra/BaseController");
const productAttributeMap_1 = require("../../mappers/productAttributeMap");
class GetAllProductAttributeController extends BaseController_1.BaseController {
    constructor(useCase) {
        super();
        this.useCase = useCase;
    }
    async executeImpl() {
        try {
            const result = await this.useCase.execute();
            const resultVal = result.value;
            if (result.isLeft()) {
                const error = result.value;
                switch (error.constructor) {
                    default:
                        return this.fail(error.errorValue().message);
                }
            }
            else {
                return this.ok(this.res, productAttributeMap_1.ProductAttributeMap.toAllResponeDto(resultVal.getValue()));
            }
        }
        catch (err) {
            this.fail(err);
        }
    }
}
exports.GetAllProductAttributeController = GetAllProductAttributeController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QWxsUHJvZHVjdEF0dHJpYnV0ZUNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9kdWN0cy91c2VDYXNlcy9nZXRBbGxQcm9kdWN0QXR0cmlidXRlL2dldEFsbFByb2R1Y3RBdHRyaWJ1dGVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBFQUFzRTtBQUN0RSwyRUFBdUU7QUFHdkUsTUFBYSxnQ0FBaUMsU0FBUSwrQkFBYztJQUdsRSxZQUFZLE9BQXNDO1FBQ2hELEtBQUssRUFBRSxDQUFBO1FBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7SUFDeEIsQ0FBQztJQUVELEtBQUssQ0FBQyxXQUFXO1FBQ2YsSUFBSTtZQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUMzQyxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFBO1lBQzlCLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNuQixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFBO2dCQUUxQixRQUFRLEtBQUssQ0FBQyxXQUFXLEVBQUU7b0JBQ3pCO3dCQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7aUJBQy9DO2FBQ0Y7aUJBQU07Z0JBQ0wsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUseUNBQW1CLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUE7YUFDcEY7U0FDRjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUNmO0lBQ0gsQ0FBQztDQUNGO0FBMUJELDRFQTBCQyJ9