"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockJobAggregateRoot = void 0;
const aggregateRoot_1 = require("../../../../aggregateRoot");
const mockJobCreatedEvent_1 = require("../events/mockJobCreatedEvent");
const mockJobDeletedEvent_1 = require("../events/mockJobDeletedEvent");
class MockJobAggregateRoot extends aggregateRoot_1.AggregateRoot {
    constructor(props, id) {
        super(props, id);
    }
    static createJob(props, id) {
        const job = new this(props, id);
        job.addDomainEvent(new mockJobCreatedEvent_1.MockJobCreatedEvent(job.id));
        return job;
    }
    deleteJob() {
        this.addDomainEvent(new mockJobDeletedEvent_1.MockJobDeletedEvent(this.id));
    }
}
exports.MockJobAggregateRoot = MockJobAggregateRoot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9ja0pvYkFnZ3JlZ2F0ZVJvb3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29yZS9kb21haW4vZXZlbnRzL3Rlc3RzL21vY2tzL2RvbWFpbi9tb2NrSm9iQWdncmVnYXRlUm9vdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2REFBeUQ7QUFDekQsdUVBQW1FO0FBRW5FLHVFQUFtRTtBQUluRSxNQUFhLG9CQUFxQixTQUFRLDZCQUE0QjtJQUNwRSxZQUFvQixLQUFvQixFQUFFLEVBQW1CO1FBQzNELEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDbEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBb0IsRUFBRSxFQUFtQjtRQUMvRCxNQUFNLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDL0IsR0FBRyxDQUFDLGNBQWMsQ0FBQyxJQUFJLHlDQUFtQixDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ25ELE9BQU8sR0FBRyxDQUFBO0lBQ1osQ0FBQztJQUVNLFNBQVM7UUFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUkseUNBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDdkQsQ0FBQztDQUNGO0FBZEQsb0RBY0MifQ==