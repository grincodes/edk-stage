"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProductCategoryController = void 0;
const BaseController_1 = require("../../../../core/infra/BaseController");
const productCategoryMap_1 = require("../../mappers/productCategoryMap");
class GetAllProductCategoryController extends BaseController_1.BaseController {
    constructor(useCase) {
        super();
        this.useCase = useCase;
    }
    async executeImpl() {
        try {
            const result = await this.useCase.execute();
            if (result.isLeft()) {
                const error = result.value;
                switch (error.constructor) {
                    default:
                        return this.fail(error.errorValue().message);
                }
            }
            else {
                return this.ok(this.res, productCategoryMap_1.ProductCategoryMap.toAllResponeDto(result.value.getValue()));
            }
        }
        catch (err) {
            this.fail(err);
        }
    }
}
exports.GetAllProductCategoryController = GetAllProductCategoryController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QWxsUHJvZHVjdENhdGVnb3J5Q29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3VzZUNhc2VzL2dldEFsbFByb2R1Y3RDYXRlZ29yeS9nZXRBbGxQcm9kdWN0Q2F0ZWdvcnlDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBFQUFzRTtBQUN0RSx5RUFBcUU7QUFHckUsTUFBYSwrQkFBZ0MsU0FBUSwrQkFBYztJQUdqRSxZQUFZLE9BQXFDO1FBQy9DLEtBQUssRUFBRSxDQUFBO1FBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7SUFDeEIsQ0FBQztJQUVELEtBQUssQ0FBQyxXQUFXO1FBQ2YsSUFBSTtZQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUUzQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDbkIsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQTtnQkFFMUIsUUFBUSxLQUFLLENBQUMsV0FBVyxFQUFFO29CQUN6Qjt3QkFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2lCQUMvQzthQUNGO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLHVDQUFrQixDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQTthQUN0RjtTQUNGO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ2Y7SUFDSCxDQUFDO0NBQ0Y7QUExQkQsMEVBMEJDIn0=