"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopVerifiedEvent = void 0;
class ShopVerifiedEvent {
    constructor(shop) {
        this.dateTimeOccurred = new Date();
        this.shop = shop;
    }
    getAggregateId() {
        return this.shop.id;
    }
}
exports.ShopVerifiedEvent = ShopVerifiedEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcFZlcmlmaWVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvc2hvcC9kb21haW4vZXZlbnRzL3Nob3BWZXJpZmllZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxNQUFhLGlCQUFpQjtJQUk1QixZQUFZLElBQVU7UUFDcEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7UUFDbEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7SUFDbEIsQ0FBQztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFBO0lBQ3JCLENBQUM7Q0FDRjtBQVpELDhDQVlDIn0=