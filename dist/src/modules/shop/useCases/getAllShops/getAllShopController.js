"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllShopsController = void 0;
const BaseController_1 = require("../../../../core/infra/BaseController");
const ShopMap_1 = require("../../mappers/ShopMap");
const getAllShopsErrors_1 = require("./getAllShopsErrors");
class GetAllShopsController extends BaseController_1.BaseController {
    constructor(useCase) {
        super();
        this.useCase = useCase;
    }
    async executeImpl() {
        const dto = {
            page: Number(this.req.query.page),
            size: Number(this.req.query.size)
        };
        try {
            const result = await this.useCase.execute(dto);
            if (result.isLeft()) {
                const error = result.value;
                switch (error.constructor) {
                    case getAllShopsErrors_1.GetAllShopErrors.InvalidQueryPassed:
                        return this.conflict(error.errorValue().message);
                    default:
                        return this.fail(error.errorValue().message);
                }
            }
            else {
                const shops = result.value.getValue();
                const paginatedShops = ShopMap_1.ShopMap.toPagination(shops, dto.page, dto.size);
                return this.ok(this.res, paginatedShops);
            }
        }
        catch (err) {
            return this.fail(err);
        }
    }
}
exports.GetAllShopsController = GetAllShopsController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QWxsU2hvcENvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zaG9wL3VzZUNhc2VzL2dldEFsbFNob3BzL2dldEFsbFNob3BDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBFQUF1RTtBQUN2RSxtREFBZ0Q7QUFFaEQsMkRBQXVEO0FBR3ZELE1BQWEscUJBQXNCLFNBQVEsK0JBQWM7SUFHdkQsWUFBWSxPQUEyQjtRQUNyQyxLQUFLLEVBQUUsQ0FBQztRQUNSLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxLQUFLLENBQUMsV0FBVztRQUNmLE1BQU0sR0FBRyxHQUFtQjtZQUMxQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNqQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztTQUNsQyxDQUFDO1FBRUYsSUFBSTtZQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFL0MsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ25CLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBRTNCLFFBQVEsS0FBSyxDQUFDLFdBQVcsRUFBRTtvQkFDekIsS0FBSyxvQ0FBZ0IsQ0FBQyxrQkFBa0I7d0JBQ3RDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ25EO3dCQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQ2hEO2FBQ0Y7aUJBQU07Z0JBQ0wsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdEMsTUFBTSxjQUFjLEdBQUcsaUJBQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2RSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQStCLElBQUksQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDLENBQUM7YUFDeEU7U0FDRjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQztDQUNGO0FBbkNELHNEQW1DQyJ9