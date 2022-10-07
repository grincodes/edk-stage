"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identifier = void 0;
class Identifier {
    constructor(value) {
        this.value = value;
        this.value = value;
    }
    equals(id) {
        if (id == null || id == undefined) {
            console.log("Identifier Null or Undefined");
            return false;
        }
        // if(!(id instanceof this.constructor)){
        //     console.log('FAlse');
        //     return false
        // }
        return id.toValue() == this.value;
    }
    toString() {
        return String(this.value);
    }
    toValue() {
        return this.value;
    }
}
exports.Identifier = Identifier;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWRlbnRpZmllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2RvbWFpbi9JZGVudGlmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQWEsVUFBVTtJQUNyQixZQUFvQixLQUFRO1FBQVIsVUFBSyxHQUFMLEtBQUssQ0FBRztRQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtJQUNwQixDQUFDO0lBRUQsTUFBTSxDQUFDLEVBQWtCO1FBQ3ZCLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksU0FBUyxFQUFFO1lBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQTtZQUUzQyxPQUFPLEtBQUssQ0FBQTtTQUNiO1FBQ0QseUNBQXlDO1FBQ3pDLDRCQUE0QjtRQUM1QixtQkFBbUI7UUFDbkIsSUFBSTtRQUVKLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDbkMsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDbkIsQ0FBQztDQUNGO0FBMUJELGdDQTBCQyJ9