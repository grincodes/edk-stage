"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopCreatedEvent = void 0;
class ShopCreatedEvent {
    constructor(shop) {
        this.dateTimeOccurred = new Date();
        this.shop = shop;
    }
    getAggregateId() {
        return this.shop.id;
    }
}
exports.ShopCreatedEvent = ShopCreatedEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcENyZWF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zaG9wL2RvbWFpbi9ldmVudHMvc2hvcENyZWF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEsTUFBYSxnQkFBZ0I7SUFJM0IsWUFBWSxJQUFVO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO0lBQ2xCLENBQUM7SUFFRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0NBQ0Y7QUFaRCw0Q0FZQyJ9