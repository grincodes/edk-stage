"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProductByShopIdController = void 0;
const BaseController_1 = require("../../../../core/infra/BaseController");
const productMap_1 = require("../../mappers/productMap");
class GetAllProductByShopIdController extends BaseController_1.BaseController {
    constructor(useCase) {
        super();
        this.useCase = useCase;
    }
    async executeImpl() {
        try {
            const dto = {
                shopid: this.req.params.shopId,
                page: Number(this.req.query.page),
                size: Number(this.req.query.size)
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
                const products = result.value.getValue();
                return this.ok(this.res, productMap_1.ProductMap.toPagination(products, dto.page, dto.size));
            }
        }
        catch (err) {
            return this.fail(err);
        }
    }
}
exports.GetAllProductByShopIdController = GetAllProductByShopIdController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QWxsUHJvZHVjdEJ5U2hvcElkQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3VzZUNhc2VzL2dldEFsbFByb2R1Y3RCeVNob3BJZC9nZXRBbGxQcm9kdWN0QnlTaG9wSWRDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBFQUFzRTtBQUN0RSx5REFBcUQ7QUFLckQsTUFBYSwrQkFBZ0MsU0FBUSwrQkFBYztJQUdqRSxZQUFZLE9BQXFDO1FBQy9DLEtBQUssRUFBRSxDQUFBO1FBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7SUFDeEIsQ0FBQztJQUVTLEtBQUssQ0FBQyxXQUFXO1FBQ3pCLElBQUk7WUFDRixNQUFNLEdBQUcsR0FBOEI7Z0JBQ3JDLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNO2dCQUM5QixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDakMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7YUFDbEMsQ0FBQTtZQUVELE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7WUFFOUMsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ25CLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUE7Z0JBRTFCLFFBQVEsS0FBSyxDQUFDLFdBQVcsRUFBRTtvQkFDekI7d0JBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtpQkFDL0M7YUFDRjtpQkFBTTtnQkFDTCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFBO2dCQUN4QyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQWtDLElBQUksQ0FBQyxHQUFHLEVBQUUsdUJBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7YUFDakg7U0FDRjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ3RCO0lBQ0gsQ0FBQztDQUNGO0FBakNELDBFQWlDQyJ9