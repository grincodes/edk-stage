"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = __importDefault(require("../models"));
const DomainEvents_1 = require("../../../core/domain/events/DomainEvents");
const UniqueEntityID_1 = require("../../../core/domain/UniqueEntityID");
const dispatchEventsCallback = (model, primaryKeyField) => {
    const aggregateId = new UniqueEntityID_1.UniqueEntityID(model[primaryKeyField]);
    DomainEvents_1.DomainEvents.dispatchEventsForAggregate(aggregateId);
};
(async function createHooksForAggregateRoots() {
    const { BaseUser } = models_1.default;
    BaseUser.addHook("afterCreate", (m) => dispatchEventsCallback(m, "base_user_id"));
    BaseUser.addHook("afterDestroy", (m) => dispatchEventsCallback(m, "base_user_id"));
    BaseUser.addHook("afterUpdate", (m) => dispatchEventsCallback(m, "base_user_id"));
    BaseUser.addHook("afterSave", (m) => dispatchEventsCallback(m, "base_user_id"));
    BaseUser.addHook("afterUpsert", (m) => dispatchEventsCallback(m, "base_user_id"));
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvaW5mcmEvc2VxdWVsaXplL2hvb2tzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdURBQThCO0FBQzlCLDJFQUF1RTtBQUN2RSx3RUFBb0U7QUFFcEUsTUFBTSxzQkFBc0IsR0FBRyxDQUFDLEtBQVUsRUFBRSxlQUF1QixFQUFFLEVBQUU7SUFDckUsTUFBTSxXQUFXLEdBQUcsSUFBSSwrQkFBYyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFBO0lBRTlELDJCQUFZLENBQUMsMEJBQTBCLENBQUMsV0FBVyxDQUFDLENBQUE7QUFDdEQsQ0FBQyxDQUVBO0FBQUEsQ0FBQyxLQUFLLFVBQVUsNEJBQTRCO0lBQzNDLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxnQkFBTSxDQUFBO0lBRTNCLFFBQVEsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQTtJQUN0RixRQUFRLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUE7SUFDdkYsUUFBUSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFNLEVBQUUsRUFBRSxDQUFDLHNCQUFzQixDQUFDLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFBO0lBQ3RGLFFBQVEsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBTSxFQUFFLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQTtJQUNwRixRQUFRLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQU0sRUFBRSxFQUFFLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUE7QUFDeEYsQ0FBQyxDQUFDLEVBQUUsQ0FBQSJ9