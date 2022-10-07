"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userId_1 = require("../../../modules/users/domain/userId");
const UniqueEntityId_1 = require("../UniqueEntityId");
let userId;
let id;
describe("Core Domain", () => {
    beforeEach(() => {
        id = new UniqueEntityId_1.UniqueEntityID();
        userId = userId_1.UserId.create(id).getValue();
    });
    it("should return truthy value on unique identity comparism", () => {
        const res = userId.id.equals(id);
        expect(res).toBeTruthy();
    });
    it("should return a truthy value after validating unique id", () => {
        const res = UniqueEntityId_1.UniqueEntityID.isValidId("e89abbb8-4607-4812-a697-97ee359a5287");
        console.log(res);
        expect(res).toBeTruthy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9tYWluLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29yZS9kb21haW4vdGVzdHMvRG9tYWluLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpRUFBNkQ7QUFDN0Qsc0RBQWtEO0FBRWxELElBQUksTUFBYyxDQUFBO0FBQ2xCLElBQUksRUFBa0IsQ0FBQTtBQUV0QixRQUFRLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRTtJQUMzQixVQUFVLENBQUMsR0FBRyxFQUFFO1FBQ2QsRUFBRSxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFBO1FBQ3pCLE1BQU0sR0FBRyxlQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ3ZDLENBQUMsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLHlEQUF5RCxFQUFFLEdBQUcsRUFBRTtRQUNqRSxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNoQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDMUIsQ0FBQyxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMseURBQXlELEVBQUMsR0FBRSxFQUFFO1FBQy9ELE1BQU0sR0FBRyxHQUFHLCtCQUFjLENBQUMsU0FBUyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7UUFDN0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVqQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDMUIsQ0FBQyxDQUFDLENBQUE7QUFDSixDQUFDLENBQUMsQ0FBQSJ9