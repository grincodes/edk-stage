"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AfterUserCreated = void 0;
const DomainEvents_1 = require("../../../core/domain/events/DomainEvents");
const userCreated_1 = require("../domain/events/userCreated");
// import { SendVerificationEmailUseCase } from "../useCases/sendVerificationEmail/SendVerificationEmailUseCase"
class AfterUserCreated {
    // private sendVerificationEmail: SendVerificationEmailUseCase
    constructor(assignUserRole) {
        this.setupSubscriptions();
        this.assignUserRole = assignUserRole;
        // this.sendVerificationEmail = sendVerificationEmail
    }
    setupSubscriptions() {
        DomainEvents_1.DomainEvents.register(this.onUserCreatedEvent.bind(this), userCreated_1.UserCreatedEvent.name);
    }
    async onUserCreatedEvent(event) {
        const { user } = event;
        this.assignUserRole
            .execute({ user })
            .then((r) => {
            console.log(r);
        })
            .catch((err) => {
            console.log(err);
        });
        // this.sendVerificationEmail
        //   .execute({ user })
        //   .then((r) => {
        //     console.log(r)
        //   })
        //   .catch((err) => {
        //     console.log(err)
        //   })
    }
}
exports.AfterUserCreated = AfterUserCreated;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWZ0ZXJVc2VyQ3JlYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL3N1YnNjcmliZXJzL0FmdGVyVXNlckNyZWF0ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsMkVBQXVFO0FBRXZFLDhEQUErRDtBQUUvRCxnSEFBZ0g7QUFFaEgsTUFBYSxnQkFBZ0I7SUFFM0IsOERBQThEO0lBRTlELFlBQVksY0FBOEI7UUFDeEMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUE7UUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUE7UUFDcEMscURBQXFEO0lBQ3ZELENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsMkJBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSw4QkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNsRixDQUFDO0lBRU8sS0FBSyxDQUFDLGtCQUFrQixDQUFDLEtBQXVCO1FBQ3RELE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUE7UUFFdEIsSUFBSSxDQUFDLGNBQWM7YUFDaEIsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7YUFDakIsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ2hCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNsQixDQUFDLENBQUMsQ0FBQTtRQUVKLDZCQUE2QjtRQUM3Qix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixPQUFPO1FBQ1Asc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixPQUFPO0lBQ1QsQ0FBQztDQUNGO0FBbkNELDRDQW1DQyJ9