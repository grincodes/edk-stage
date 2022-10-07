"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sinon = __importStar(require("sinon"));
const DomainEvents_1 = require("../DomainEvents");
const mockJobCreatedEvent_1 = require("./mocks/events/mockJobCreatedEvent");
const mockJobDeletedEvent_1 = require("./mocks/events/mockJobDeletedEvent");
const mockJobAggregateRoot_1 = require("./mocks/domain/mockJobAggregateRoot");
const mockPostToSocial_1 = require("./mocks/services/mockPostToSocial");
const mockJobAggregateRootId_1 = require("./mocks/domain/mockJobAggregateRootId");
const UniqueEntityID_1 = require("../../UniqueEntityID");
let social;
let job;
let spy;
describe("Domain Events", () => {
    beforeEach(() => {
        social = null;
        DomainEvents_1.DomainEvents.clearHandlers();
        DomainEvents_1.DomainEvents.clearMarkedAggregates();
        spy = null;
        job = null;
    });
    describe("Given a JobCreatedEvent, JobDeletedEvent and a PostToSocial handler class", () => {
        it("Should be able to setup event subscriptions", () => {
            social = new mockPostToSocial_1.MockPostToSocial();
            social.setupSubscriptions();
            expect(Object.keys(DomainEvents_1.DomainEvents["handlersMap"]).length).toBe(2);
            expect(DomainEvents_1.DomainEvents["handlersMap"][mockJobCreatedEvent_1.MockJobCreatedEvent.name].length).toBe(1);
            expect(DomainEvents_1.DomainEvents["handlersMap"][mockJobDeletedEvent_1.MockJobDeletedEvent.name].length).toBe(1);
        });
        it("There should be exactly one handler subscribed to the JobCreatedEvent", () => {
            social = new mockPostToSocial_1.MockPostToSocial();
            social.setupSubscriptions();
            expect(DomainEvents_1.DomainEvents["handlersMap"][mockJobCreatedEvent_1.MockJobCreatedEvent.name].length).toBe(1);
        });
        it("There should be exactly one handler subscribed to the JobDeletedEvent", () => {
            social = new mockPostToSocial_1.MockPostToSocial();
            social.setupSubscriptions();
            expect(DomainEvents_1.DomainEvents["handlersMap"][mockJobCreatedEvent_1.MockJobCreatedEvent.name].length).toBe(1);
        });
        it("Should add the event to the DomainEvents list when the event is created", () => {
            job = mockJobAggregateRoot_1.MockJobAggregateRoot.createJob({}, mockJobAggregateRootId_1.MockJobAggregateRootId);
            social = new mockPostToSocial_1.MockPostToSocial();
            social.setupSubscriptions();
            const domainEventsAggregateSpy = sinon.spy(DomainEvents_1.DomainEvents, "markAggregateForDispatch");
            // setTimeout(() => {
            //   expect(domainEventsAggregateSpy.calledOnce).toBeTruthy();
            //   expect(domainEventsAggregateSpy.callCount).toBe(0)
            //   expect(DomainEvents['markedAggregates'][0]['length']).toBe(1);
            // }, 1000);
        });
        it("Should call the handlers when the event is dispatched after marking the aggregate root", () => {
            social = new mockPostToSocial_1.MockPostToSocial();
            social.setupSubscriptions();
            const jobCreatedEventSpy = sinon.spy(social, "handleJobCreatedEvent");
            const jobDeletedEventSpy = sinon.spy(social, "handleDeletedEvent");
            // Create the event, mark the aggregate
            job = mockJobAggregateRoot_1.MockJobAggregateRoot.createJob({}, mockJobAggregateRootId_1.MockJobAggregateRootId);
            // Dispatch the events now
            DomainEvents_1.DomainEvents.dispatchEventsForAggregate(mockJobAggregateRootId_1.MockJobAggregateRootId);
            // setTimeout(() => {
            //   expect(jobCreatedEventSpy.calledOnce).toBeFalsy();
            //   expect(jobDeletedEventSpy.calledOnce).toBeTruthy();
            // }, 1000);
        });
        it("Should remove the marked aggregate from the marked aggregates list after it gets dispatched", () => {
            social = new mockPostToSocial_1.MockPostToSocial();
            social.setupSubscriptions();
            // Create the event, mark the aggregate
            job = mockJobAggregateRoot_1.MockJobAggregateRoot.createJob({}, mockJobAggregateRootId_1.MockJobAggregateRootId);
            // Dispatch the events now
            DomainEvents_1.DomainEvents.dispatchEventsForAggregate(mockJobAggregateRootId_1.MockJobAggregateRootId);
            // setTimeout(() => {
            //   expect(DomainEvents['markedAggregates']['length']).toBe(0);
            // }, 1000);
        });
        it("Should only add the domain event to the ", () => {
            social = new mockPostToSocial_1.MockPostToSocial();
            social.setupSubscriptions();
            // Create the event, mark the aggregate
            mockJobAggregateRoot_1.MockJobAggregateRoot.createJob({}, new UniqueEntityID_1.UniqueEntityID("99"));
            expect(DomainEvents_1.DomainEvents["markedAggregates"]["length"]).toBe(1);
            // Create a new job, it should also get marked
            job = mockJobAggregateRoot_1.MockJobAggregateRoot.createJob({}, new UniqueEntityID_1.UniqueEntityID("12"));
            expect(DomainEvents_1.DomainEvents["markedAggregates"]["length"]).toBe(2);
            // Dispatch another action from the second job created
            job.deleteJob();
            // The number of aggregates should be the same
            expect(DomainEvents_1.DomainEvents["markedAggregates"]["length"]).toBe(2);
            // However, the second aggregate should have two events now
            expect(DomainEvents_1.DomainEvents["markedAggregates"][1].domainEvents.length).toBe(2);
            // And the first aggregate should have one event
            expect(DomainEvents_1.DomainEvents["markedAggregates"][0].domainEvents.length).toBe(1);
            // Dispatch the event for the first job
            DomainEvents_1.DomainEvents.dispatchEventsForAggregate(new UniqueEntityID_1.UniqueEntityID("99"));
            expect(DomainEvents_1.DomainEvents["markedAggregates"]["length"]).toBe(1);
            // The job with two events should still be there
            expect(DomainEvents_1.DomainEvents["markedAggregates"][0].domainEvents.length).toBe(2);
            // Dispatch the event for the second job
            DomainEvents_1.DomainEvents.dispatchEventsForAggregate(new UniqueEntityID_1.UniqueEntityID("12"));
            // There should be no more domain events in the list
            expect(DomainEvents_1.DomainEvents["markedAggregates"]["length"]).toBe(0);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluRXZlbnRzLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29yZS9kb21haW4vZXZlbnRzL3Rlc3RzL2RvbWFpbkV2ZW50cy5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBOEI7QUFDOUIsa0RBQThDO0FBQzlDLDRFQUF3RTtBQUN4RSw0RUFBd0U7QUFDeEUsOEVBQTBFO0FBQzFFLHdFQUFvRTtBQUNwRSxrRkFBOEU7QUFDOUUseURBQXFEO0FBRXJELElBQUksTUFBd0IsQ0FBQTtBQUM1QixJQUFJLEdBQXlCLENBQUE7QUFDN0IsSUFBSSxHQUFHLENBQUE7QUFFUCxRQUFRLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtJQUM3QixVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ2QsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUNiLDJCQUFZLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDNUIsMkJBQVksQ0FBQyxxQkFBcUIsRUFBRSxDQUFBO1FBQ3BDLEdBQUcsR0FBRyxJQUFJLENBQUE7UUFDVixHQUFHLEdBQUcsSUFBSSxDQUFBO0lBQ1osQ0FBQyxDQUFDLENBQUE7SUFFRixRQUFRLENBQUMsMkVBQTJFLEVBQUUsR0FBRyxFQUFFO1FBQ3pGLEVBQUUsQ0FBQyw2Q0FBNkMsRUFBRSxHQUFHLEVBQUU7WUFDckQsTUFBTSxHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQTtZQUMvQixNQUFNLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtZQUUzQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywyQkFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBRS9ELE1BQU0sQ0FBQywyQkFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDLHlDQUFtQixDQUFDLElBQUksQ0FBQyxDQUFD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