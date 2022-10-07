"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainEvents = void 0;
class DomainEvents {
    /**
     * @method markAggregateForDispatch
     * @static
     * @desc Called by aggregate root objects that have created domain
     * events to eventually be dispatched when the infrastructure commits
     * the unit of work.
     */
    static markAggregateForDispatch(aggregate) {
        const aggregateFound = !!this.findMarkedAggregateByID(aggregate.id);
        if (!aggregateFound) {
            DomainEvents.markedAggregates.push(aggregate);
        }
    }
    static dispatchAggregateEvents(aggregate) {
        aggregate.domainEvents.forEach((event) => this.dispatch(event));
    }
    static removeAggregateFromMarkedDispatchList(aggregate) {
        const index = DomainEvents.markedAggregates.findIndex((a) => a.equals(aggregate));
        DomainEvents.markedAggregates.splice(index, 1);
    }
    static findMarkedAggregateByID(id) {
        let found = null;
        for (const aggregate of DomainEvents.markedAggregates) {
            if (aggregate.id.equals(id)) {
                found = aggregate;
            }
        }
        return found;
    }
    static dispatchEventsForAggregate(id) {
        const aggregate = this.findMarkedAggregateByID(id);
        if (aggregate) {
            this.dispatchAggregateEvents(aggregate);
            aggregate.clearEvents();
            this.removeAggregateFromMarkedDispatchList(aggregate);
        }
    }
    static register(callback, eventClassName) {
        if (!this.handlersMap.hasOwnProperty(eventClassName)) {
            this.handlersMap[eventClassName] = [];
        }
        this.handlersMap[eventClassName].push(callback);
        // create rabbitmq channel
        //   conn.createChannel(function (err, channel) {
        //     ch = channel;
        // });
    }
    static clearHandlers() {
        this.handlersMap = {};
    }
    static clearMarkedAggregates() {
        DomainEvents.markedAggregates = [];
    }
    static dispatch(event) {
        console.log("an event has actually been dispatched on dispatch(");
        const eventClassName = event.constructor.name;
        if (this.handlersMap.hasOwnProperty(eventClassName)) {
            const handlers = this.handlersMap[eventClassName];
            for (const handler of handlers) {
                handler(event);
            }
        }
        //  ch.sendToQueue(queueName, new Buffer(data), {persistent: true});
    }
}
exports.DomainEvents = DomainEvents;
DomainEvents.handlersMap = {};
DomainEvents.markedAggregates = [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9tYWluRXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2NvcmUvZG9tYWluL2V2ZW50cy9Eb21haW5FdmVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEsTUFBYSxZQUFZO0lBSXZCOzs7Ozs7T0FNRztJQUVJLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxTQUE2QjtRQUNsRSxNQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUVuRSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ25CLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7U0FDOUM7SUFDSCxDQUFDO0lBRU8sTUFBTSxDQUFDLHVCQUF1QixDQUFDLFNBQTZCO1FBQ2xFLFNBQVMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBbUIsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBQy9FLENBQUM7SUFFTyxNQUFNLENBQUMscUNBQXFDLENBQUMsU0FBNkI7UUFDaEYsTUFBTSxLQUFLLEdBQUcsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO1FBQ2pGLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFFTyxNQUFNLENBQUMsdUJBQXVCLENBQUMsRUFBa0I7UUFDdkQsSUFBSSxLQUFLLEdBQXVCLElBQUksQ0FBQTtRQUVwQyxLQUFLLE1BQU0sU0FBUyxJQUFJLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNyRCxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUMzQixLQUFLLEdBQUcsU0FBUyxDQUFBO2FBQ2xCO1NBQ0Y7UUFFRCxPQUFPLEtBQUssQ0FBQTtJQUNkLENBQUM7SUFFTSxNQUFNLENBQUMsMEJBQTBCLENBQUMsRUFBa0I7UUFDekQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBRWxELElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ3ZDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtZQUN2QixJQUFJLENBQUMscUNBQXFDLENBQUMsU0FBUyxDQUFDLENBQUE7U0FDdEQ7SUFDSCxDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUF1QyxFQUFFLGNBQXNCO1FBQ3BGLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUNwRCxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtTQUN0QztRQUNELElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBRS9DLDBCQUEwQjtRQUMxQixpREFBaUQ7UUFDakQsb0JBQW9CO1FBQ3BCLE1BQU07SUFDUixDQUFDO0lBRU0sTUFBTSxDQUFDLGFBQWE7UUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUE7SUFDdkIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxxQkFBcUI7UUFDakMsWUFBWSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQTtJQUNwQyxDQUFDO0lBRU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFtQjtRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLG9EQUFvRCxDQUFDLENBQUE7UUFFakUsTUFBTSxjQUFjLEdBQVcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUE7UUFFckQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUNuRCxNQUFNLFFBQVEsR0FBVSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFBO1lBRXhELEtBQUssTUFBTSxPQUFPLElBQUksUUFBUSxFQUFFO2dCQUM5QixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7YUFDZjtTQUNGO1FBRUQsb0VBQW9FO0lBQ3RFLENBQUM7O0FBckZILG9DQXNGQztBQXJGZ0Isd0JBQVcsR0FBRyxFQUFFLENBQUE7QUFDaEIsNkJBQWdCLEdBQXlCLEVBQUUsQ0FBQSJ9