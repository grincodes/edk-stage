"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRoot = void 0;
const Entity_1 = require("./Entity");
const DomainEvents_1 = require("./events/DomainEvents");
class AggregateRoot extends Entity_1.Entity {
    constructor() {
        super(...arguments);
        this._domainEvents = [];
    }
    get id() {
        return this._id;
    }
    get domainEvents() {
        return this._domainEvents;
    }
    addDomainEvent(domainEvent) {
        // Add the domain event to this aggregate's list of domain events
        this._domainEvents.push(domainEvent);
        // Add this aggregate instance to the domain event's list of aggregates who's
        // events it eventually needs to dispatch.
        DomainEvents_1.DomainEvents.markAggregateForDispatch(this);
        // Log the domain event
        this.logDomainEventAdded(domainEvent);
    }
    clearEvents() {
        this._domainEvents.splice(0, this._domainEvents.length);
    }
    logDomainEventAdded(domainEvent) {
        const thisClass = Reflect.getPrototypeOf(this);
        const domainEventClass = Reflect.getPrototypeOf(domainEvent);
        console.info(`[Domain Event Created]:`, thisClass.constructor.name, "==>", domainEventClass.constructor.name);
    }
}
exports.AggregateRoot = AggregateRoot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWdncmVnYXRlUm9vdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb3JlL2RvbWFpbi9BZ2dyZWdhdGVSb290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFpQztBQUVqQyx3REFBb0Q7QUFHcEQsTUFBc0IsYUFBaUIsU0FBUSxlQUFTO0lBQXhEOztRQUNVLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQTtJQTZCNUMsQ0FBQztJQTNCQyxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUE7SUFDakIsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQTtJQUMzQixDQUFDO0lBRVMsY0FBYyxDQUFDLFdBQXlCO1FBQ2hELGlFQUFpRTtRQUNqRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUNwQyw2RUFBNkU7UUFDN0UsMENBQTBDO1FBQzFDLDJCQUFZLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDM0MsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUN2QyxDQUFDO0lBRU0sV0FBVztRQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN6RCxDQUFDO0lBRU8sbUJBQW1CLENBQUMsV0FBeUI7UUFDbkQsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM5QyxNQUFNLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDNUQsT0FBTyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQy9HLENBQUM7Q0FDRjtBQTlCRCxzQ0E4QkMifQ==