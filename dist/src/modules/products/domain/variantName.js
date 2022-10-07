"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariantName = void 0;
const slug_1 = __importDefault(require("slug"));
const ValueObject_1 = require("../../../core/domain/ValueObject");
const Guard_1 = require("../../../core/logic/Guard");
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
class VariantName extends ValueObject_1.ValueObject {
    get value() {
        return this.props.value;
    }
    constructor(props) {
        super(props);
    }
    static createFromExisting(variantName) {
        if (!!variantName === true) {
            return Result_1.Result.ok(new VariantName({ value: variantName }));
        }
        else {
            return Result_1.Result.fail("No variant name passed in");
        }
    }
    static create(variant_name) {
        const guardResult = Guard_1.Guard.againstNullOrUndefined(variant_name, 'variant name');
        if (!guardResult.succeeded) {
            return Result_1.Result.fail(guardResult.message);
        }
        const guardResultAtLeast = Guard_1.Guard.againstAtLeast(3, variant_name, 'variant name');
        if (!guardResultAtLeast.succeeded) {
            return Result_1.Result.fail(guardResultAtLeast.message);
        }
        let returnVariantName = "";
        // Run the VariantName algorithm here to create a VariantName
        // Strip all non alphabetic characters such as . / ; ,
        returnVariantName = variant_name.replace(/[\W_]+/g, " ");
        returnVariantName = TextUtils_1.TextUtils.createRandomNumericString(7) + "-" + (0, slug_1.default)(variant_name);
        return Result_1.Result.ok(new VariantName({ value: returnVariantName }));
    }
}
exports.VariantName = VariantName;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudE5hbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9kdWN0cy9kb21haW4vdmFyaWFudE5hbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0RBQXVCO0FBQ3ZCLGtFQUE4RDtBQUM5RCxxREFBaUQ7QUFDakQsdURBQW1EO0FBQ25ELHdEQUFvRDtBQUVwRCxjQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUE7QUFDN0IsY0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUc7SUFDOUIsV0FBVyxFQUFFLEdBQUc7SUFDaEIsT0FBTyxFQUFFLEtBQUs7SUFDZCxLQUFLLEVBQUUsSUFBSTtJQUNYLE9BQU8sRUFBRSxjQUFJLENBQUMsT0FBTztJQUNyQixZQUFZLEVBQUUsY0FBSSxDQUFDLFlBQVksQ0FBQywyQkFBMkI7Q0FDNUQsQ0FBQTtBQU1ELE1BQWEsV0FBWSxTQUFRLHlCQUE2QjtJQUM1RCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFBO0lBQ3pCLENBQUM7SUFFRCxZQUFvQixLQUF1QjtRQUN6QyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDZCxDQUFDO0lBRU0sTUFBTSxDQUFDLGtCQUFrQixDQUFDLFdBQW1CO1FBQ2xELElBQUksQ0FBQyxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDMUIsT0FBTyxlQUFNLENBQUMsRUFBRSxDQUFjLElBQUksV0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQTtTQUN2RTthQUFNO1lBQ0wsT0FBTyxlQUFNLENBQUMsSUFBSSxDQUFjLDJCQUEyQixDQUFDLENBQUE7U0FDN0Q7SUFDSCxDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFvQjtRQUV2QyxNQUFNLFdBQVcsR0FBRyxhQUFLLENBQUMsc0JBQXNCLENBQUMsWUFBWSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO1lBQzFCLE9BQU8sZUFBTSxDQUFDLElBQUksQ0FBYyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdEQ7UUFFRCxNQUFNLGtCQUFrQixHQUFHLGFBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQztRQUVqRixJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFO1lBQ2pDLE9BQU8sZUFBTSxDQUFDLElBQUksQ0FBYyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM3RDtRQUVELElBQUksaUJBQWlCLEdBQUcsRUFBRSxDQUFBO1FBRTFCLDZEQUE2RDtRQUM3RCxzREFBc0Q7UUFDdEQsaUJBQWlCLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDeEQsaUJBQWlCLEdBQUcscUJBQVMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBQSxjQUFJLEVBQUMsWUFBWSxDQUFDLENBQUE7UUFFckYsT0FBTyxlQUFNLENBQUMsRUFBRSxDQUFjLElBQUksV0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzlFLENBQUM7Q0FDRjtBQXZDRCxrQ0F1Q0MifQ==