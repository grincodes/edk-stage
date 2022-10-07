"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopLocation = void 0;
const AggregateRoot_1 = require("../../../core/domain/AggregateRoot");
const Guard_1 = require("../../../core/logic/Guard");
const Result_1 = require("../../../core/logic/Result");
const shopLocationId_1 = require("./shopLocationId");
class ShopLocation extends AggregateRoot_1.AggregateRoot {
    get id() {
        return this._id;
    }
    get shopLocationId() {
        return shopLocationId_1.ShopLocationId.create(this.id).getValue();
    }
    get shopId() {
        return this.props.shopId;
    }
    set shopId(shopId) {
        this.props.shopId = shopId;
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
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const guardArgs = [
            { argument: props.address, argumentName: 'address' },
            { argument: props.country, argumentName: 'country' },
            { argument: props.state, argumentName: 'state' },
            { argument: props.city, argumentName: 'city' }
        ];
        const guardAtLeastChars = [
            { numChars: 3, text: props.address, argumentName: 'address' },
            { numChars: 3, text: props.state, argumentName: 'state' },
            { numChars: 3, text: props.city, argumentName: 'city' },
            { numChars: 3, text: props.address, argumentName: 'country' }
        ];
        const guardResult = Guard_1.Guard.againstNullOrUndefinedBulk(guardArgs);
        if (!guardResult.succeeded) {
            return Result_1.Result.fail(guardResult.message);
        }
        const guardResultAtLeast = Guard_1.Guard.againstAtLeastBulk(guardAtLeastChars);
        if (!guardResultAtLeast.succeeded) {
            return Result_1.Result.fail(guardResultAtLeast.message);
        }
        const shopLocation = new ShopLocation(props, id);
        return Result_1.Result.ok(shopLocation);
    }
}
exports.ShopLocation = ShopLocation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcExvY2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvc2hvcC9kb21haW4vc2hvcExvY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNFQUFtRTtBQUVuRSxxREFBa0U7QUFDbEUsdURBQW9EO0FBRXBELHFEQUFrRDtBQVlsRCxNQUFhLFlBQWEsU0FBUSw2QkFBaUM7SUFDakUsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTywrQkFBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkQsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQUksTUFBTSxDQUFDLE1BQWM7UUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJLEdBQUc7UUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxZQUFZLEtBQXlCLEVBQUUsRUFBbUI7UUFDeEQsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUF5QixFQUFFLEVBQW1CO1FBQ2pFLE1BQU0sU0FBUyxHQUFxQjtZQUNsQyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUU7WUFDcEQsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUFFO1lBQ3BELEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRTtZQUNoRCxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUU7U0FDL0MsQ0FBQztRQUVGLE1BQU0saUJBQWlCLEdBQUc7WUFDeEIsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUU7WUFDN0QsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUU7WUFDekQsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUU7WUFDdkQsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUU7U0FDOUQsQ0FBQztRQUVGLE1BQU0sV0FBVyxHQUFHLGFBQUssQ0FBQywwQkFBMEIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtZQUMxQixPQUFPLGVBQU0sQ0FBQyxJQUFJLENBQWUsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsTUFBTSxrQkFBa0IsR0FBRyxhQUFLLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUV2RSxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxFQUFFO1lBQ2pDLE9BQU8sZUFBTSxDQUFDLElBQUksQ0FBZSxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5RDtRQUVELE1BQU0sWUFBWSxHQUFHLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqRCxPQUFPLGVBQU0sQ0FBQyxFQUFFLENBQWUsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztDQUNGO0FBekVELG9DQXlFQyJ9