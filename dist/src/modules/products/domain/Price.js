"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Price = void 0;
const ValueObject_1 = require("../../../core/domain/ValueObject");
const Result_1 = require("../../../core/logic/Result");
class Price extends ValueObject_1.ValueObject {
    get value() {
        return this.props.value;
    }
    constructor(props) {
        super(props);
    }
    static create(price) {
        if (price === 0 && !isNaN(price) && price != null && price != undefined) {
            return Result_1.Result.fail("Price cannot be zero or undefined");
        }
        else {
            return Result_1.Result.ok(new Price({ value: price }));
        }
    }
}
exports.Price = Price;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9kdWN0cy9kb21haW4vUHJpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsa0VBQThEO0FBQzlELHVEQUFtRDtBQU1uRCxNQUFhLEtBQU0sU0FBUSx5QkFBdUI7SUFDaEQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQTtJQUN6QixDQUFDO0lBRUQsWUFBb0IsS0FBaUI7UUFDbkMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2QsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBYTtRQUNoQyxJQUFJLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksU0FBUyxFQUFFO1lBQ3ZFLE9BQU8sZUFBTSxDQUFDLElBQUksQ0FBUSxtQ0FBbUMsQ0FBQyxDQUFBO1NBQy9EO2FBQU07WUFDTCxPQUFPLGVBQU0sQ0FBQyxFQUFFLENBQVEsSUFBSSxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBQ3JEO0lBQ0gsQ0FBQztDQUNGO0FBaEJELHNCQWdCQyJ9