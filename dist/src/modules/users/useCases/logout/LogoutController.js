"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoutController = void 0;
const BaseController_1 = require("../../../../core/infra/BaseController");
class LogoutController extends BaseController_1.BaseController {
    constructor(useCase) {
        super();
        this.useCase = useCase;
    }
    async executeImpl() {
        const dto = this.req.body;
        try {
            const result = await this.useCase.execute(dto);
            if (result.isLeft()) {
                return this.fail(result.value.errorValue().message);
            }
            else {
                return this.ok(this.res);
            }
        }
        catch (err) {
            return this.fail(err);
        }
    }
}
exports.LogoutController = LogoutController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nb3V0Q29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL3VzZUNhc2VzL2xvZ291dC9Mb2dvdXRDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLDBFQUFzRTtBQUd0RSxNQUFhLGdCQUFpQixTQUFRLCtCQUFjO0lBR2xELFlBQVksT0FBc0I7UUFDaEMsS0FBSyxFQUFFLENBQUE7UUFDUCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtJQUN4QixDQUFDO0lBRUQsS0FBSyxDQUFDLFdBQVc7UUFDZixNQUFNLEdBQUcsR0FBYyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQWlCLENBQUE7UUFFakQsSUFBSTtZQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7WUFFOUMsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ25CLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2FBQ3BEO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7YUFDekI7U0FDRjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ3RCO0lBQ0gsQ0FBQztDQUNGO0FBdkJELDRDQXVCQyJ9