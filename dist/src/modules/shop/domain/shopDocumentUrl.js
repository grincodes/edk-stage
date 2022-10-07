"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopDocumentUrl = void 0;
const ValueObject_1 = require("../../../core/domain/ValueObject");
const Guard_1 = require("../../../core/logic/Guard");
const Result_1 = require("../../../core/logic/Result");
const TextUtils_1 = require("../../../utils/TextUtils");
class ShopDocumentUrl extends ValueObject_1.ValueObject {
    get value() {
        return this.props.value;
    }
    static isValidUrl(url) {
        return TextUtils_1.TextUtils.validateWebURL(url);
    }
    constructor(props) {
        super(props);
    }
    static create(props) {
        const ShopDocumentUrlResult = Guard_1.Guard.againstNullOrUndefined(props.value, "shop document");
        if (!ShopDocumentUrlResult.succeeded) {
            return Result_1.Result.fail(ShopDocumentUrlResult.message);
        }
        if (!this.isValidUrl(props.value)) {
            return Result_1.Result.fail("Invalid url");
        }
        return Result_1.Result.ok(new ShopDocumentUrl(props));
    }
}
exports.ShopDocumentUrl = ShopDocumentUrl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcERvY3VtZW50VXJsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvc2hvcC9kb21haW4vc2hvcERvY3VtZW50VXJsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGtFQUE4RDtBQUM5RCxxREFBaUQ7QUFDakQsdURBQW1EO0FBQ25ELHdEQUFvRDtBQU1wRCxNQUFhLGVBQWdCLFNBQVEseUJBQTZCO0lBQ2hFLElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUE7SUFDekIsQ0FBQztJQUVPLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBVztRQUNuQyxPQUFPLHFCQUFTLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFDRCxZQUFvQixLQUF1QjtRQUN6QyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDZCxDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUF1QjtRQUMxQyxNQUFNLHFCQUFxQixHQUFHLGFBQUssQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFBO1FBRXhGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLEVBQUU7WUFDcEMsT0FBTyxlQUFNLENBQUMsSUFBSSxDQUFrQixxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUNuRTtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQyxPQUFPLGVBQU0sQ0FBQyxJQUFJLENBQWtCLGFBQWEsQ0FBQyxDQUFBO1NBQ25EO1FBRUQsT0FBTyxlQUFNLENBQUMsRUFBRSxDQUFrQixJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBQy9ELENBQUM7Q0FDRjtBQXpCRCwwQ0F5QkMifQ==