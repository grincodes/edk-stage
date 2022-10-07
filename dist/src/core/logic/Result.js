"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.right = exports.left = exports.Right = exports.Left = exports.Result = void 0;
class Result {
    constructor(isSuccess, error, value) {
        if (isSuccess && error) {
            throw new Error("InvalidOperation: A result cannot be successful and contain an error");
        }
        if (!isSuccess && !error) {
            throw new Error("InvalidOperation: A failing result needs to contain an error message");
        }
        this.isSuccess = isSuccess;
        this.isFailure = !isSuccess;
        this.error = error;
        this._value = value;
        Object.freeze(this);
    }
    getValue() {
        if (!this.isSuccess) {
            console.log(this.error);
            throw new Error("Can't get the value of an error result. Use 'errorValue' instead.");
        }
        return this._value;
    }
    errorValue() {
        return this.error;
    }
    static ok(value) {
        return new Result(true, null, value);
    }
    static fail(error) {
        return new Result(false, error);
    }
    static combine(results) {
        for (const result of results) {
            if (result.isFailure)
                return result;
        }
        return Result.ok();
    }
}
exports.Result = Result;
class Left {
    constructor(value) {
        this.value = value;
    }
    isLeft() {
        return true;
    }
    isRight() {
        return false;
    }
}
exports.Left = Left;
class Right {
    constructor(value) {
        this.value = value;
    }
    isLeft() {
        return false;
    }
    isRight() {
        return true;
    }
}
exports.Right = Right;
const left = (l) => {
    return new Left(l);
};
exports.left = left;
const right = (a) => {
    return new Right(a);
};
exports.right = right;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdWx0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvcmUvbG9naWMvUmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQWEsTUFBTTtJQU1qQixZQUFtQixTQUFrQixFQUFFLEtBQWtCLEVBQUUsS0FBUztRQUNsRSxJQUFJLFNBQVMsSUFBSSxLQUFLLEVBQUU7WUFDdEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxzRUFBc0UsQ0FBQyxDQUFBO1NBQ3hGO1FBQ0QsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUN4QixNQUFNLElBQUksS0FBSyxDQUFDLHNFQUFzRSxDQUFDLENBQUE7U0FDeEY7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQTtRQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsU0FBUyxDQUFBO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBRW5CLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDckIsQ0FBQztJQUVNLFFBQVE7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUN2QixNQUFNLElBQUksS0FBSyxDQUFDLG1FQUFtRSxDQUFDLENBQUE7U0FDckY7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDcEIsQ0FBQztJQUVNLFVBQVU7UUFDZixPQUFPLElBQUksQ0FBQyxLQUFVLENBQUE7SUFDeEIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxFQUFFLENBQUksS0FBUztRQUMzQixPQUFPLElBQUksTUFBTSxDQUFJLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDekMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxJQUFJLENBQUksS0FBVTtRQUM5QixPQUFPLElBQUksTUFBTSxDQUFJLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUNwQyxDQUFDO0lBRU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFzQjtRQUMxQyxLQUFLLE1BQU0sTUFBTSxJQUFJLE9BQU8sRUFBRTtZQUM1QixJQUFJLE1BQU0sQ0FBQyxTQUFTO2dCQUFFLE9BQU8sTUFBTSxDQUFBO1NBQ3BDO1FBQ0QsT0FBTyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQUE7SUFDcEIsQ0FBQztDQUNGO0FBakRELHdCQWlEQztBQUlELE1BQWEsSUFBSTtJQUdmLFlBQVksS0FBUTtRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtJQUNwQixDQUFDO0lBRUQsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQztJQUVELE9BQU87UUFDTCxPQUFPLEtBQUssQ0FBQTtJQUNkLENBQUM7Q0FDRjtBQWRELG9CQWNDO0FBRUQsTUFBYSxLQUFLO0lBR2hCLFlBQVksS0FBUTtRQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtJQUNwQixDQUFDO0lBRUQsTUFBTTtRQUNKLE9BQU8sS0FBSyxDQUFBO0lBQ2QsQ0FBQztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7Q0FDRjtBQWRELHNCQWNDO0FBRU0sTUFBTSxJQUFJLEdBQUcsQ0FBTyxDQUFJLEVBQWdCLEVBQUU7SUFDL0MsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNwQixDQUFDLENBQUE7QUFGWSxRQUFBLElBQUksUUFFaEI7QUFFTSxNQUFNLEtBQUssR0FBRyxDQUFPLENBQUksRUFBZ0IsRUFBRTtJQUNoRCxPQUFPLElBQUksS0FBSyxDQUFPLENBQUMsQ0FBQyxDQUFBO0FBQzNCLENBQUMsQ0FBQTtBQUZZLFFBQUEsS0FBSyxTQUVqQiJ9