"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
const UniqueEntityId_1 = require("./UniqueEntityId");
const isEntity = (v) => {
    return v instanceof Entity;
};
class Entity {
    constructor(props, id) {
        this._id = id ? id : new UniqueEntityId_1.UniqueEntityID();
        this.props = props;
    }
    equals(object) {
        if (object == null || object == undefined) {
            return false;
        }
        if (this === object) {
            return true;
        }
        if (!isEntity(object)) {
            return false;
        }
        return this._id.equals(object._id);
    }
}
exports.Entity = Entity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50aXR5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvcmUvZG9tYWluL0VudGl0eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxREFBaUQ7QUFFakQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFNLEVBQW9CLEVBQUU7SUFDNUMsT0FBTyxDQUFDLFlBQVksTUFBTSxDQUFBO0FBQzVCLENBQUMsQ0FBQTtBQUVELE1BQXNCLE1BQU07SUFJMUIsWUFBWSxLQUFRLEVBQUUsRUFBbUI7UUFDdkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSwrQkFBYyxFQUFFLENBQUE7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDcEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxNQUFrQjtRQUM5QixJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxJQUFJLFNBQVMsRUFBRTtZQUN6QyxPQUFPLEtBQUssQ0FBQTtTQUNiO1FBRUQsSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO1lBQ25CLE9BQU8sSUFBSSxDQUFBO1NBQ1o7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sS0FBSyxDQUFBO1NBQ2I7UUFFRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNwQyxDQUFDO0NBQ0Y7QUF4QkQsd0JBd0JDIn0=