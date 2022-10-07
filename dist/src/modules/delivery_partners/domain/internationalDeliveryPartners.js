"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternationalDeliveryPartner = void 0;
const AggregateRoot_1 = require("../../../core/domain/AggregateRoot");
const Result_1 = require("../../../core/logic/Result");
const deliveryPartnerId_1 = require("./deliveryPartnerId");
class InternationalDeliveryPartner extends AggregateRoot_1.AggregateRoot {
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
        const international_delivery_partner = new InternationalDeliveryPartner(props, id);
        return Result_1.Result.ok(international_delivery_partner);
    }
}
exports.InternationalDeliveryPartner = InternationalDeliveryPartner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYXRpb25hbERlbGl2ZXJ5UGFydG5lcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9kZWxpdmVyeV9wYXJ0bmVycy9kb21haW4vaW50ZXJuYXRpb25hbERlbGl2ZXJ5UGFydG5lcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0VBQWtFO0FBRWxFLHVEQUFtRDtBQUNuRCwyREFBdUQ7QUFRdkQsTUFBYSw0QkFBNkIsU0FBUSw2QkFBZ0Q7SUFDaEcsSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ2pCLENBQUM7SUFFRCxJQUFJLGlCQUFpQjtRQUNuQixPQUFPLHFDQUFpQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDdEQsQ0FBQztJQUVELElBQUksbUJBQW1CO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQTtJQUN6QyxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQTtJQUM1QixDQUFDO0lBRUQsWUFBb0IsS0FBd0MsRUFBRSxFQUFtQjtRQUMvRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQ2xCLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQXdDLEVBQUUsRUFBbUI7UUFDaEYsTUFBTSw4QkFBOEIsR0FBRyxJQUFJLDRCQUE0QixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUVsRixPQUFPLGVBQU0sQ0FBQyxFQUFFLENBQStCLDhCQUE4QixDQUFDLENBQUE7SUFDaEYsQ0FBQztDQUNGO0FBMUJELG9FQTBCQyJ9