"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockPostToSocial = void 0;
const mockJobCreatedEvent_1 = require("../events/mockJobCreatedEvent");
const mockJobDeletedEvent_1 = require("../events/mockJobDeletedEvent");
const DomainEvents_1 = require("../../../DomainEvents");
class MockPostToSocial {
    constructor() { }
    /**
     * This is how we may setup subscriptions to domain events.
     */
    setupSubscriptions() {
        DomainEvents_1.DomainEvents.register(this.handleJobCreatedEvent, mockJobCreatedEvent_1.MockJobCreatedEvent.name);
        DomainEvents_1.DomainEvents.register(this.handleDeletedEvent, mockJobDeletedEvent_1.MockJobDeletedEvent.name);
    }
    /**
     * These are examples of how we define the handlers for domain events.
     */
    handleJobCreatedEvent(event) {
        console.log("A job was created!!!");
    }
    handleDeletedEvent(event) {
        console.log("A job was deleted!!!");
    }
}
exports.MockPostToSocial = MockPostToSocial;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ja1Bvc3RUb1NvY2lhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb3JlL2RvbWFpbi9ldmVudHMvdGVzdHMvbW9ja3Mvc2VydmljZXMvbW9ja1Bvc3RUb1NvY2lhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1RUFBbUU7QUFDbkUsdUVBQW1FO0FBRW5FLHdEQUFvRDtBQUVwRCxNQUFhLGdCQUFnQjtJQUMzQixnQkFBZSxDQUFDO0lBRWhCOztPQUVHO0lBRUgsa0JBQWtCO1FBQ2hCLDJCQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSx5Q0FBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMzRSwyQkFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUseUNBQW1CLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDMUUsQ0FBQztJQUVEOztPQUVHO0lBRUgscUJBQXFCLENBQUMsS0FBMEI7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO0lBQ3JDLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxLQUEwQjtRQUMzQyxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUE7SUFDckMsQ0FBQztDQUNGO0FBdkJELDRDQXVCQyJ9