"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalDeliveryPartner = void 0;
const AggregateRoot_1 = require("../../../core/domain/AggregateRoot");
const Result_1 = require("../../../core/logic/Result");
const deliveryPartnerId_1 = require("./deliveryPartnerId");
class LocalDeliveryPartner extends AggregateRoot_1.AggregateRoot {
    get id() {
        return this._id;
    }
    get deliveryPartnerId() {
        return deliveryPartnerId_1.DeliveryPartnerId.create(this._id).getValue();
    }
    get deliveryPartnerName() {
        return this.props.delivery_partner_name;
    }
    get isActive() {
        return this.props.isActive;
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const local_delivery_partner = new LocalDeliveryPartner(props, id);
        return Result_1.Result.ok(local_delivery_partner);
    }
}
exports.LocalDeliveryPartner = LocalDeliveryPartner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxEZWxpdmVyeVBhcnRuZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvZGVsaXZlcnlfcGFydG5lcnMvZG9tYWluL2xvY2FsRGVsaXZlcnlQYXJ0bmVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzRUFBa0U7QUFFbEUsdURBQW1EO0FBQ25ELDJEQUF1RDtBQVF2RCxNQUFhLG9CQUFxQixTQUFRLDZCQUF3QztJQUNoRixJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUE7SUFDakIsQ0FBQztJQUVELElBQUksaUJBQWlCO1FBQ25CLE9BQU8scUNBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUN0RCxDQUFDO0lBRUQsSUFBSSxtQkFBbUI7UUFDckIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFBO0lBQ3pDLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFBO0lBQzVCLENBQUM7SUFFRCxZQUFvQixLQUFnQyxFQUFFLEVBQW1CO1FBQ3ZFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDbEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBZ0MsRUFBRSxFQUFtQjtRQUN4RSxNQUFNLHNCQUFzQixHQUFHLElBQUksb0JBQW9CLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBRWxFLE9BQU8sZUFBTSxDQUFDLEVBQUUsQ0FBdUIsc0JBQXNCLENBQUMsQ0FBQTtJQUNoRSxDQUFDO0NBQ0Y7QUExQkQsb0RBMEJDIn0=