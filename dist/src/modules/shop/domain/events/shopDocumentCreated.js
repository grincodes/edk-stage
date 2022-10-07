"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopDocumentCreatedEvent = void 0;
class ShopDocumentCreatedEvent {
    constructor(shopDocument) {
        this.dateTimeOccurred = new Date();
        this.shopDocument = shopDocument;
    }
    getAggregateId() {
        return this.shopDocument.id;
    }
}
exports.ShopDocumentCreatedEvent = ShopDocumentCreatedEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcERvY3VtZW50Q3JlYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Nob3AvZG9tYWluL2V2ZW50cy9zaG9wRG9jdW1lbnRDcmVhdGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLE1BQWEsd0JBQXdCO0lBSW5DLFlBQVksWUFBMEI7UUFDcEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUE7SUFDbEMsQ0FBQztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFBO0lBQzdCLENBQUM7Q0FDRjtBQVpELDREQVlDIn0=