"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProductBrandController = void 0;
const BaseController_1 = require("../../../../core/infra/BaseController");
const productBrandMap_1 = require("../../mappers/productBrandMap");
class GetAllProductBrandController extends BaseController_1.BaseController {
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
                return this.ok(this.res, productBrandMap_1.ProductBrandMap.toAllResponeDto(result.value.getValue()));
            }
        }
        catch (err) {
            this.fail(err);
        }
    }
}
exports.GetAllProductBrandController = GetAllProductBrandController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QWxsUHJvZHVjdEJyYW5kQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3VzZUNhc2VzL2dldEFsbFByb2R1Y3RCcmFuZC9nZXRBbGxQcm9kdWN0QnJhbmRDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBFQUF1RTtBQUN2RSxtRUFBZ0U7QUFHaEUsTUFBYSw0QkFBNkIsU0FBUSwrQkFBYztJQUc5RCxZQUFZLE9BQWtDO1FBQzVDLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVELEtBQUssQ0FBQyxXQUFXO1FBQ2YsSUFBSTtZQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUU1QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDbkIsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFFM0IsUUFBUSxLQUFLLENBQUMsV0FBVyxFQUFFO29CQUN6Qjt3QkFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNoRDthQUNGO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGlDQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3BGO1NBQ0Y7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEI7SUFDSCxDQUFDO0NBQ0Y7QUExQkQsb0VBMEJDIn0=