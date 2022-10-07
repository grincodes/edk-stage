"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = exports.ShopOwnerType = void 0;
const AggregateRoot_1 = require("../../../core/domain/AggregateRoot");
const Result_1 = require("../../../core/logic/Result");
const shopCreated_1 = require("./events/shopCreated");
const shopDeleted_1 = require("./events/shopDeleted");
const shopVerified_1 = require("./events/shopVerified");
const shopId_1 = require("./shopId");
var ShopOwnerType;
(function (ShopOwnerType) {
    ShopOwnerType["USER"] = "USER";
    ShopOwnerType["BUSINESS"] = "BUSINESS";
    ShopOwnerType["3RDPARTY"] = "3RDPARTY";
})(ShopOwnerType = exports.ShopOwnerType || (exports.ShopOwnerType = {}));
class Shop extends AggregateRoot_1.AggregateRoot {
    get id() {
        return this._id;
    }
    get shopId() {
        return shopId_1.ShopId.create(this._id).getValue();
    }
    get shopCategoryId() {
        return this.props.shopCategoryId;
    }
    get shopCategory() {
        return this.props.shopCategory;
    }
    get shopName() {
        return this.props.shopName;
    }
    get shopPhone() {
        return this.props.shopPhone;
    }
    get shopEmail() {
        return this.props.shopEmail;
    }
    get shopLogo() {
        return this.props.shopLogo;
    }
    get shopLocation() {
        return this.props.shopLocation;
    }
    get shopDocuments() {
        return this.props.shopDocuments;
    }
    get shopOwnerType() {
        return this.props.shopOwnerType;
    }
    get ownerId() {
        return this.props.ownerId;
    }
    get localDeliveryPartner() {
        return this.props.localDeliveryPartner;
    }
    get localDeliveryPartnerId() {
        return this.props.localDeliveryPartnerId;
    }
    get internationalDeliveryPartnerId() {
        return this.props.internationalDeliveryPartnerId;
    }
    get isDeleted() {
        return this.props.isDeleted;
    }
    get isVerified() {
        return this.isVerified;
    }
    verify() {
        if (!this.props.isVerified) {
            this.addDomainEvent(new shopVerified_1.ShopVerifiedEvent(this));
            this.props.isVerified = true;
        }
    }
    delete() {
        if (!this.props.isDeleted) {
            this.addDomainEvent(new shopDeleted_1.ShopDeletedEvent(this));
            this.props.isDeleted = true;
        }
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const isNewShop = !!id === false;
        const shop = new Shop(Object.assign(Object.assign({}, props), { isDeleted: props.isDeleted ? props.isDeleted : false, isVerified: props.isVerified ? props.isVerified : false }), id);
        if (isNewShop) {
            shop.addDomainEvent(new shopCreated_1.ShopCreatedEvent(shop));
        }
        return Result_1.Result.ok(shop);
    }
}
exports.Shop = Shop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Nob3AvZG9tYWluL3Nob3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0VBQWtFO0FBRWxFLHVEQUFtRDtBQUtuRCxzREFBdUQ7QUFDdkQsc0RBQXVEO0FBQ3ZELHdEQUF5RDtBQUV6RCxxQ0FBaUM7QUFNakMsSUFBWSxhQUlYO0FBSkQsV0FBWSxhQUFhO0lBQ3ZCLDhCQUFlLENBQUE7SUFDZixzQ0FBdUIsQ0FBQTtJQUN2QixzQ0FBdUIsQ0FBQTtBQUN6QixDQUFDLEVBSlcsYUFBYSxHQUFiLHFCQUFhLEtBQWIscUJBQWEsUUFJeEI7QUFxQkQsTUFBYSxJQUFLLFNBQVEsNkJBQXdCO0lBQ2hELElBQUksRUFBRTtRQUNKLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNqQixDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxlQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUMzQyxDQUFDO0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUE7SUFDbEMsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUE7SUFDaEMsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUE7SUFDNUIsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUE7SUFDN0IsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUE7SUFDN0IsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxR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