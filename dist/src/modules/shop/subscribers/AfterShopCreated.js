"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AfterShopCreated = void 0;
const DomainEvents_1 = require("../../../core/domain/events/DomainEvents");
const shopCreated_1 = require("../domain/events/shopCreated");
class AfterShopCreated {
    constructor(createShopLocation) {
        this.setupSubscriptions();
        this.createShopLocation = createShopLocation;
    }
    setupSubscriptions() {
        DomainEvents_1.DomainEvents.register(this.onUserCreatedEvent.bind(this), shopCreated_1.ShopCreatedEvent.name);
    }
    async onUserCreatedEvent(event) {
        const { shop } = event;
        this.createShopLocation
            .execute({ shop })
            .then((r) => {
            console.log(r);
        })
            .catch((err) => {
            console.log(err);
        });
    }
}
exports.AfterShopCreated = AfterShopCreated;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWZ0ZXJTaG9wQ3JlYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Nob3Avc3Vic2NyaWJlcnMvQWZ0ZXJTaG9wQ3JlYXRlZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwyRUFBdUU7QUFDdkUsOERBQStEO0FBRy9ELE1BQWEsZ0JBQWdCO0lBRzNCLFlBQVksa0JBQTZDO1FBQ3ZELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO1FBQ3pCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQTtJQUM5QyxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLDJCQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsOEJBQWdCLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbEYsQ0FBQztJQUVPLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxLQUF1QjtRQUN0RCxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFBO1FBRXRCLElBQUksQ0FBQyxrQkFBa0I7YUFDcEIsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDakIsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2hCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNsQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7Q0FDRjtBQXhCRCw0Q0F3QkMifQ==