"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopDeletedEvent = void 0;
class ShopDeletedEvent {
    constructor(shop) {
        this.dateTimeOccurred = new Date();
        this.shop = shop;
    }
    getAggregateId() {
        return this.shop.id;
    }
}
exports.ShopDeletedEvent = ShopDeletedEvent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcERlbGV0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zaG9wL2RvbWFpbi9ldmVudHMvc2hvcERlbGV0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEsTUFBYSxnQkFBZ0I7SUFJM0IsWUFBWSxJQUFVO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO0lBQ2xCLENBQUM7SUFFRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0NBQ0Y7QUFaRCw0Q0FZQyJ9