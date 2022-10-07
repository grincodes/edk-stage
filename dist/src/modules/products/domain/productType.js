"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductType = void 0;
const Entity_1 = require("../../../core/domain/Entity");
const Guard_1 = require("../../../core/logic/Guard");
const Result_1 = require("../../../core/logic/Result");
const productTypeId_1 = require("./productTypeId");
class ProductType extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    get productTypeId() {
        return productTypeId_1.ProductTypeId.create(this._id).getValue();
    }
    get name() {
        return this.props.name;
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const guardResult = Guard_1.Guard.againstNullOrUndefined(props.name, "brand name");
        if (!guardResult.succeeded) {
            return Result_1.Result.fail(guardResult.message);
        }
        const guardResultAtLeast = Guard_1.Guard.againstAtLeast(3, props.name, "brand name");
        if (!guardResultAtLeast.succeeded) {
            return Result_1.Result.fail(guardResultAtLeast.message);
        }
        const brand = new ProductType(props, id);
        return Result_1.Result.ok(brand);
    }
}
exports.ProductType = ProductType;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdFR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9kdWN0cy9kb21haW4vcHJvZHVjdFR5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0RBQW9EO0FBRXBELHFEQUFpRDtBQUNqRCx1REFBbUQ7QUFDbkQsbURBQStDO0FBTS9DLE1BQWEsV0FBWSxTQUFRLGVBQXdCO0lBQ3ZELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNqQixDQUFDO0lBRUQsSUFBSSxhQUFhO1FBQ2YsT0FBTyw2QkFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDbEQsQ0FBQztJQUVELElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUE7SUFDeEIsQ0FBQztJQUVELFlBQW9CLEtBQXVCLEVBQUUsRUFBbUI7UUFDOUQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUNsQixDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUF1QixFQUFFLEVBQW1CO1FBQy9ELE1BQU0sV0FBVyxHQUFHLGFBQUssQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFBO1FBQzFFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO1lBQzFCLE9BQU8sZUFBTSxDQUFDLElBQUksQ0FBYyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDckQ7UUFFRCxNQUFNLGtCQUFrQixHQUFHLGFBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUE7UUFFNUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRTtZQUNqQyxPQUFPLGVBQU0sQ0FBQyxJQUFJLENBQWMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDNUQ7UUFDRCxNQUFNLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFFeEMsT0FBTyxlQUFNLENBQUMsRUFBRSxDQUFjLEtBQUssQ0FBQyxDQUFBO0lBQ3RDLENBQUM7Q0FDRjtBQWhDRCxrQ0FnQ0MifQ==