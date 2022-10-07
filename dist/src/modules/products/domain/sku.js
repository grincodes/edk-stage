"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sku = void 0;
const slug_1 = __importDefault(require("slug"));
const ValueObject_1 = require("../../../core/domain/ValueObject");
const Result_1 = require("../../../core/logic/Result");
const TextUtils_1 = require("../../../utils/TextUtils");
slug_1.default.defaults.mode = "pretty";
slug_1.default.defaults.modes["pretty"] = {
    replacement: "-",
    symbols: false,
    lower: true,
    charmap: slug_1.default.charmap,
    multicharmap: slug_1.default.multicharmap // replace multi-characters
};
class Sku extends ValueObject_1.ValueObject {
    get value() {
        return this.props.value;
    }
    constructor(props) {
        super(props);
    }
    static createFromExisting(sku) {
        if (!!sku === true) {
            return Result_1.Result.ok(new Sku({ value: sku }));
        }
        else {
            return Result_1.Result.fail("No sku passed in");
        }
    }
    static create(variant_name) {
        let returnSku = "";
        // Run the sku algorithm here to create a sku
        // Strip all non alphabetic characters such as . / ; ,
        returnSku = variant_name.replace(/[\W_]+/g, " ");
        returnSku = TextUtils_1.TextUtils.createRandomNumericString(7) + "-" + (0, slug_1.default)(variant_name);
        return Result_1.Result.ok(new Sku({ value: returnSku }));
    }
}
exports.Sku = Sku;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2t1LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvZG9tYWluL3NrdS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnREFBdUI7QUFDdkIsa0VBQThEO0FBQzlELHVEQUFtRDtBQUNuRCx3REFBb0Q7QUFFcEQsY0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFBO0FBQzdCLGNBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHO0lBQzlCLFdBQVcsRUFBRSxHQUFHO0lBQ2hCLE9BQU8sRUFBRSxLQUFLO0lBQ2QsS0FBSyxFQUFFLElBQUk7SUFDWCxPQUFPLEVBQUUsY0FBSSxDQUFDLE9BQU87SUFDckIsWUFBWSxFQUFFLGNBQUksQ0FBQyxZQUFZLENBQUMsMkJBQTJCO0NBQzVELENBQUE7QUFNRCxNQUFhLEdBQUksU0FBUSx5QkFBcUI7SUFDNUMsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQTtJQUN6QixDQUFDO0lBRUQsWUFBb0IsS0FBZTtRQUNqQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDZCxDQUFDO0lBRU0sTUFBTSxDQUFDLGtCQUFrQixDQUFDLEdBQVc7UUFDMUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksRUFBRTtZQUNsQixPQUFPLGVBQU0sQ0FBQyxFQUFFLENBQU0sSUFBSSxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBQy9DO2FBQU07WUFDTCxPQUFPLGVBQU0sQ0FBQyxJQUFJLENBQU0sa0JBQWtCLENBQUMsQ0FBQTtTQUM1QztJQUNILENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQW9CO1FBQ3ZDLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQTtRQUVsQiw2Q0FBNkM7UUFDN0Msc0RBQXNEO1FBQ3RELFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUNoRCxTQUFTLEdBQUcscUJBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBQSxjQUFJLEVBQUMsWUFBWSxDQUFDLENBQUE7UUFFN0UsT0FBTyxlQUFNLENBQUMsRUFBRSxDQUFNLElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUN0RCxDQUFDO0NBQ0Y7QUEzQkQsa0JBMkJDIn0=