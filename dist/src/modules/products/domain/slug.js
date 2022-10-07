"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slug = void 0;
const slug_1 = __importDefault(require("slug"));
const ValueObject_1 = require("../../../core/domain/ValueObject");
const Result_1 = require("../../../core/logic/Result");
slug_1.default.defaults.mode = "pretty";
slug_1.default.defaults.modes["pretty"] = {
    replacement: "-",
    symbols: false,
    lower: true,
    charmap: slug_1.default.charmap,
    multicharmap: slug_1.default.multicharmap, // replace multi-characters
};
class Slug extends ValueObject_1.ValueObject {
    get value() {
        return this.props.value;
    }
    constructor(props) {
        super(props);
    }
    static createFromExisting(slugName) {
        if (!!slugName === true) {
            return Result_1.Result.ok(new Slug({ value: slugName }));
        }
        else {
            return Result_1.Result.fail("No slug passed in");
        }
    }
    static create(name) {
        let returnSlug = "";
        // Run the slug algorithm here to create a slug
        // Strip all non alphabetic characters such as . / ; ,
        returnSlug = name.replace(/[\W_]+/g, " ");
        returnSlug = (0, slug_1.default)(name);
        return Result_1.Result.ok(new Slug({ value: returnSlug }));
    }
}
exports.Slug = Slug;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2x1Zy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL2RvbWFpbi9zbHVnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdEQUF1QjtBQUN2QixrRUFBOEQ7QUFDOUQsdURBQW1EO0FBRW5ELGNBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQTtBQUM3QixjQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRztJQUM5QixXQUFXLEVBQUUsR0FBRztJQUNoQixPQUFPLEVBQUUsS0FBSztJQUNkLEtBQUssRUFBRSxJQUFJO0lBQ1gsT0FBTyxFQUFFLGNBQUksQ0FBQyxPQUFPO0lBQ3JCLFlBQVksRUFBRSxjQUFJLENBQUMsWUFBWSxFQUFFLDJCQUEyQjtDQUM3RCxDQUFBO0FBTUQsTUFBYSxJQUFLLFNBQVEseUJBQXNCO0lBQzlDLElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUE7SUFDekIsQ0FBQztJQUVELFlBQW9CLEtBQWdCO1FBQ2xDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNkLENBQUM7SUFFTSxNQUFNLENBQUMsa0JBQWtCLENBQUMsUUFBZ0I7UUFDL0MsSUFBSSxDQUFDLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUN2QixPQUFPLGVBQU0sQ0FBQyxFQUFFLENBQU8sSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBQ3REO2FBQU07WUFDTCxPQUFPLGVBQU0sQ0FBQyxJQUFJLENBQU8sbUJBQW1CLENBQUMsQ0FBQTtTQUM5QztJQUNILENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQVk7UUFDL0IsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFBO1FBRW5CLCtDQUErQztRQUMvQyxzREFBc0Q7UUFDdEQsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1FBQ3pDLFVBQVUsR0FBRyxJQUFBLGNBQUksRUFBQyxJQUFJLENBQUMsQ0FBQTtRQUV2QixPQUFPLGVBQU0sQ0FBQyxFQUFFLENBQU8sSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ3pELENBQUM7Q0FDRjtBQTNCRCxvQkEyQkMifQ==