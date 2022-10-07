"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueObject = void 0;
class ValueObject {
    constructor(props) {
        const baseProps = Object.assign({}, props);
        this.props = baseProps;
    }
    equals(vo) {
        if (vo === null || vo === undefined) {
            return false;
        }
        if (vo.props === undefined) {
            return false;
        }
        return JSON.stringify(this.props) === JSON.stringify(vo.props);
    }
}
exports.ValueObject = ValueObject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsdWVPYmplY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29yZS9kb21haW4vVmFsdWVPYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBTUEsTUFBc0IsV0FBVztJQUcvQixZQUFZLEtBQVE7UUFDbEIsTUFBTSxTQUFTLHFCQUNWLEtBQUssQ0FDVCxDQUFBO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUE7SUFDeEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxFQUFtQjtRQUMvQixJQUFJLEVBQUUsS0FBSyxJQUFJLElBQUksRUFBRSxLQUFLLFNBQVMsRUFBRTtZQUNuQyxPQUFPLEtBQUssQ0FBQTtTQUNiO1FBRUQsSUFBSSxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUMxQixPQUFPLEtBQUssQ0FBQTtTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNoRSxDQUFDO0NBQ0Y7QUF0QkQsa0NBc0JDIn0=