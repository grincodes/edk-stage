"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopDocument = exports.ShopDocumentType = void 0;
const AggregateRoot_1 = require("../../../core/domain/AggregateRoot");
const Guard_1 = require("../../../core/logic/Guard");
const Result_1 = require("../../../core/logic/Result");
const shopDocumentId_1 = require("./shopDocumentId");
const shopDocumentCreated_1 = require("./events/shopDocumentCreated");
var ShopDocumentType;
(function (ShopDocumentType) {
    ShopDocumentType["CAC"] = "CAC";
    ShopDocumentType["INCORPRATION"] = "INCORPRATION";
})(ShopDocumentType = exports.ShopDocumentType || (exports.ShopDocumentType = {}));
class ShopDocument extends AggregateRoot_1.AggregateRoot {
    get documentId() {
        return shopDocumentId_1.ShopDocumentId.create(this._id).getValue();
    }
    get shopId() {
        return this.props.shopId;
    }
    get documentUrl() {
        return this.props.documentUrl;
    }
    get documentType() {
        return this.props.documentType;
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const guardResult = Guard_1.Guard.againstNullOrUndefinedBulk([
            { argument: props.shopId, argumentName: "shopId" },
            { argument: props.documentUrl, argumentName: "businessDocumentUrl" },
            { argument: props.documentUrl, argumentName: "businessDocumentUrl" }
        ]);
        if (!guardResult.succeeded) {
            return Result_1.Result.fail(guardResult.message);
        }
        const document = new ShopDocument(props, id);
        const isNewShopDocument = !!id === false;
        if (isNewShopDocument) {
            document.addDomainEvent(new shopDocumentCreated_1.ShopDocumentCreatedEvent(document));
        }
        return Result_1.Result.ok(document);
    }
}
exports.ShopDocument = ShopDocument;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcERvY3VtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvc2hvcC9kb21haW4vc2hvcERvY3VtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHNFQUFrRTtBQUNsRSxxREFBaUQ7QUFDakQsdURBQW1EO0FBR25ELHFEQUFpRDtBQUNqRCxzRUFBdUU7QUFFdkUsSUFBWSxnQkFHWDtBQUhELFdBQVksZ0JBQWdCO0lBQzFCLCtCQUFhLENBQUE7SUFDYixpREFBK0IsQ0FBQTtBQUNqQyxDQUFDLEVBSFcsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUFHM0I7QUFPRCxNQUFhLFlBQWEsU0FBUSw2QkFBaUM7SUFDakUsSUFBSSxVQUFVO1FBQ1osT0FBTywrQkFBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDbkQsQ0FBQztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUE7SUFDMUIsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUE7SUFDL0IsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUE7SUFDaEMsQ0FBQztJQUVELFlBQW9CLEtBQXlCLEVBQUUsRUFBbUI7UUFDaEUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUNsQixDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUF5QixFQUFFLEVBQW1CO1FBQ2pFLE1BQU0sV0FBVyxHQUFHLGFBQUssQ0FBQywwQkFBMEIsQ0FBQztZQUNuRCxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUU7WUFDbEQsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUscUJBQXFCLEVBQUU7WUFDcEUsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUscUJBQXFCLEVBQUU7U0FDckUsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7WUFDMUIsT0FBTyxlQUFNLENBQUMsSUFBSSxDQUFlLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUN0RDtRQUVELE1BQU0sUUFBUSxHQUFHLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUM1QyxNQUFNLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUssS0FBSyxDQUFBO1FBRXhDLElBQUksaUJBQWlCLEVBQUU7WUFDckIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLDhDQUF3QixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7U0FDaEU7UUFDRCxPQUFPLGVBQU0sQ0FBQyxFQUFFLENBQWUsUUFBUSxDQUFDLENBQUE7SUFDMUMsQ0FBQztDQUNGO0FBeENELG9DQXdDQyJ9