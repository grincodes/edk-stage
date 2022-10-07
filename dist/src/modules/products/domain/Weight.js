"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weight = exports.Unit = void 0;
const ValueObject_1 = require("../../../core/domain/ValueObject");
const Result_1 = require("../../../core/logic/Result");
var Unit;
(function (Unit) {
    Unit["Kilogram"] = "Kg";
})(Unit = exports.Unit || (exports.Unit = {}));
class Weight extends ValueObject_1.ValueObject {
    get value() {
        return this.props.value;
    }
    constructor(props) {
        super(props);
    }
    static create(props) {
        if (props.value === 0 && !isNaN(props.value) && props.value != null && props.value != undefined) {
            return Result_1.Result.fail("Weight cannot be zero or undefined");
        }
        else {
            return Result_1.Result.ok(new Weight(props));
        }
    }
}
exports.Weight = Weight;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2VpZ2h0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvZG9tYWluL1dlaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrRUFBOEQ7QUFDOUQsdURBQW1EO0FBRW5ELElBQVksSUFFWDtBQUZELFdBQVksSUFBSTtJQUNkLHVCQUFpQixDQUFBO0FBQ25CLENBQUMsRUFGVyxJQUFJLEdBQUosWUFBSSxLQUFKLFlBQUksUUFFZjtBQU9ELE1BQWEsTUFBTyxTQUFRLHlCQUF3QjtJQUNsRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFBO0lBQ3pCLENBQUM7SUFFRCxZQUFvQixLQUFrQjtRQUNwQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDZCxDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFrQjtRQUNyQyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLFNBQVMsRUFBRTtZQUMvRixPQUFPLGVBQU0sQ0FBQyxJQUFJLENBQVMsb0NBQW9DLENBQUMsQ0FBQTtTQUNqRTthQUFNO1lBQ0wsT0FBTyxlQUFNLENBQUMsRUFBRSxDQUFTLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7U0FDNUM7SUFDSCxDQUFDO0NBQ0Y7QUFoQkQsd0JBZ0JDIn0=