"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseFakeRepo = void 0;
class BaseFakeRepo {
    constructor() {
        this._items = [];
    }
    addFakeItem(t) {
        let found = false;
        for (const item of this._items) {
            if (this.compareFakeItems(item, t)) {
                found = true;
            }
        }
        if (!found) {
            this._items.push(t);
        }
    }
    removeFakeItem(t) {
        this._items = this._items.filter((item) => !this.compareFakeItems(item, t));
    }
}
exports.BaseFakeRepo = BaseFakeRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUZha2VSZXBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvcmUvdGVzdHMvQmFzZUZha2VSZXBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQXNCLFlBQVk7SUFHaEM7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQTtJQUNsQixDQUFDO0lBRU0sV0FBVyxDQUFDLENBQUk7UUFDckIsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2pCLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUM5QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2xDLEtBQUssR0FBRyxJQUFJLENBQUE7YUFDYjtTQUNGO1FBRUQsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ3BCO0lBQ0gsQ0FBQztJQUVNLGNBQWMsQ0FBQyxDQUFJO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzdFLENBQUM7Q0FHRjtBQXpCRCxvQ0F5QkMifQ==