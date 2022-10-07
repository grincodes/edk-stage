"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopLogo = void 0;
const ValueObject_1 = require("../../../core/domain/ValueObject");
const Guard_1 = require("../../../core/logic/Guard");
const Result_1 = require("../../../core/logic/Result");
const TextUtils_1 = require("../../../utils/TextUtils");
class ShopLogo extends ValueObject_1.ValueObject {
    static isValidUrl(url) {
        return TextUtils_1.TextUtils.validateWebURL(url);
    }
    constructor(props) {
        super(props);
    }
    get value() {
        return this.props.value;
    }
    static create(logo) {
        const shopLogoResult = Guard_1.Guard.againstNullOrUndefined(logo, "shop logo");
        if (!shopLogoResult.succeeded) {
            return Result_1.Result.fail(shopLogoResult.message);
        }
        if (!this.isValidUrl(logo)) {
            return Result_1.Result.fail("Invalid shop logo url");
        }
        return Result_1.Result.ok(new ShopLogo({ value: logo }));
    }
}
exports.ShopLogo = ShopLogo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcExvZ28uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zaG9wL2RvbWFpbi9zaG9wTG9nby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrRUFBOEQ7QUFDOUQscURBQWlEO0FBQ2pELHVEQUFtRDtBQUNuRCx3REFBb0Q7QUFNcEQsTUFBYSxRQUFTLFNBQVEseUJBQTJCO0lBQy9DLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBVztRQUNuQyxPQUFPLHFCQUFTLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFDRCxZQUFvQixLQUFxQjtRQUN2QyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDZCxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQTtJQUN6QixDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFZO1FBQy9CLE1BQU0sY0FBYyxHQUFHLGFBQUssQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUE7UUFFdEUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUU7WUFDN0IsT0FBTyxlQUFNLENBQUMsSUFBSSxDQUFXLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUNyRDtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzFCLE9BQU8sZUFBTSxDQUFDLElBQUksQ0FBVyx1QkFBdUIsQ0FBQyxDQUFBO1NBQ3REO1FBRUQsT0FBTyxlQUFNLENBQUMsRUFBRSxDQUFXLElBQUksUUFBUSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUMzRCxDQUFDO0NBQ0Y7QUF6QkQsNEJBeUJDIn0=