"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopperAddress = void 0;
const Entity_1 = require("../../../core/domain/Entity");
const Guard_1 = require("../../../core/logic/Guard");
const Result_1 = require("../../../core/logic/Result");
const shopperAddressId_1 = require("./shopperAddressId");
class ShopperAddress extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    get shopperAddressId() {
        return shopperAddressId_1.ShopperAddressId.create(this.id).getValue();
    }
    get shopperId() {
        return this.props.shopperId;
    }
    set shopperId(shopperId) {
        this.props.shopperId = shopperId;
    }
    get address() {
        return this.props.address;
    }
    get state() {
        return this.props.state;
    }
    get country() {
        return this.props.country;
    }
    get city() {
        return this.props.city;
    }
    get lng() {
        return this.props.lng;
    }
    get lat() {
        return this.props.lat;
    }
    get isDefault() {
        return this.props.isDefault;
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const guardArgs = [
            { argument: props.address, argumentName: "address" },
            { argument: props.country, argumentName: "country" },
            { argument: props.state, argumentName: "state" },
            { argument: props.city, argumentName: "city" },
        ];
        const guardAtLeastChars = [
            { numChars: 3, text: props.address, argumentName: "address" },
            { numChars: 3, text: props.state, argumentName: "state" },
            { numChars: 3, text: props.city, argumentName: "city" },
            { numChars: 3, text: props.address, argumentName: "country" },
        ];
        const guardResult = Guard_1.Guard.againstNullOrUndefinedBulk(guardArgs);
        if (!guardResult.succeeded) {
            return Result_1.Result.fail(guardResult.message);
        }
        const guardResultAtLeast = Guard_1.Guard.againstAtLeastBulk(guardAtLeastChars);
        if (!guardResultAtLeast.succeeded) {
            return Result_1.Result.fail(guardResultAtLeast.message);
        }
        const shopperAddress = new ShopperAddress(Object.assign(Object.assign({}, props), { isDefault: false }), id);
        return Result_1.Result.ok(shopperAddress);
    }
}
exports.ShopperAddress = ShopperAddress;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBlckFkZHJlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zaG9wcGVyL2RvbWFpbi9zaG9wcGVyQWRkcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3REFBb0Q7QUFFcEQscURBQWlFO0FBQ2pFLHVEQUFtRDtBQUNuRCx5REFBcUQ7QUFjckQsTUFBYSxjQUFlLFNBQVEsZUFBNEI7SUFDOUQsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ2pCLENBQUM7SUFFRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLG1DQUFnQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDcEQsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUE7SUFDN0IsQ0FBQztJQUVELElBQUksU0FBUyxDQUFDLFNBQW9CO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQTtJQUNsQyxDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQTtJQUMzQixDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQTtJQUN6QixDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQTtJQUMzQixDQUFDO0lBRUQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQTtJQUN4QixDQUFDO0lBRUQsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQTtJQUN2QixDQUFDO0lBRUQsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQTtJQUN2QixDQUFDO0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQTtJQUM3QixDQUFDO0lBRUQsWUFBWSxLQUEyQixFQUFFLEVBQW1CO1FBQzFELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDbEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBMkIsRUFBRSxFQUFtQjtRQUNuRSxNQUFNLFNBQVMsR0FBcUI7WUFDbEMsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFO1lBQ3BELEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRTtZQUNwRCxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUU7WUFDaEQsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFO1NBQy9DLENBQUE7UUFFRCxNQUFNLGlCQUFpQixHQUFHO1lBQ3hCLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFO1lBQzdELEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFO1lBQ3pELEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFO1lBQ3ZELEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFO1NBQzlELENBQUE7UUFFRCxNQUFNLFdBQVcsR0FBRyxhQUFLLENBQUMsMEJBQTBCLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDL0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7WUFDMUIsT0FBTyxlQUFNLENBQUMsSUFBSSxDQUFpQixXQUFXLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDeEQ7UUFDRCxNQUFNLGtCQUFrQixHQUFHLGFBQUssQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBRXRFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUU7WUFDakMsT0FBTyxlQUFNLENBQUMsSUFBSSxDQUFpQixrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUMvRDtRQUVELE1BQU0sY0FBYyxHQUFHLElBQUksY0FBYyxpQ0FBTSxLQUFLLEtBQUUsU0FBUyxFQUFFLEtBQUssS0FBSSxFQUFFLENBQUMsQ0FBQTtRQUM3RSxPQUFPLGVBQU0sQ0FBQyxFQUFFLENBQWlCLGNBQWMsQ0FBQyxDQUFBO0lBQ2xELENBQUM7Q0FDRjtBQTdFRCx3Q0E2RUMifQ==