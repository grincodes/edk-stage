"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductByWebIdController = void 0;
const BaseController_1 = require("../../../../core/infra/BaseController");
class GetProductByWebIdController extends BaseController_1.BaseController {
    constructor(useCase) {
        super();
        this.useCase = useCase;
    }
    async executeImpl() {
        try {
            const dto = {
                shopid: this.req.params.shopId,
                productWebId: this.req.params.productWebId
            };
            const result = await this.useCase.execute(dto);
            if (result.isLeft()) {
                const error = result.value;
                switch (error.constructor) {
                    default:
                        return this.fail(error.errorValue().message);
                }
            }
            else {
                const product = result.value.getValue();
                return this.ok(this.res, product);
            }
        }
        catch (err) {
            return this.fail(err);
        }
    }
}
exports.GetProductByWebIdController = GetProductByWebIdController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0UHJvZHVjdEJ5V2ViSWRDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvdXNlQ2FzZXMvZ2V0UHJvZHVjdEJ5V2ViSWQvZ2V0UHJvZHVjdEJ5V2ViSWRDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBFQUFzRTtBQU10RSxNQUFhLDJCQUE0QixTQUFRLCtCQUFjO0lBRzdELFlBQVksT0FBaUM7UUFDM0MsS0FBSyxFQUFFLENBQUE7UUFDUCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtJQUN4QixDQUFDO0lBRVMsS0FBSyxDQUFDLFdBQVc7UUFDekIsSUFBSTtZQUNGLE1BQU0sR0FBRyxHQUF5QjtnQkFDaEMsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU07Z0JBQzlCLFlBQVksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxZQUFZO2FBQzNDLENBQUE7WUFFRCxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBRTlDLElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUNuQixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFBO2dCQUUxQixRQUFRLEtBQUssQ0FBQyxXQUFXLEVBQUU7b0JBQ3pCO3dCQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7aUJBQy9DO2FBQ0Y7aUJBQU07Z0JBQ0wsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQTtnQkFDdkMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFVLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUE7YUFDM0M7U0FDRjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ3RCO0lBQ0gsQ0FBQztDQUNGO0FBaENELGtFQWdDQyJ9