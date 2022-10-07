"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guard = void 0;
class Guard {
    static combine(guardResults) {
        for (const result of guardResults) {
            if (result.succeeded === false)
                return result;
        }
        return { succeeded: true };
    }
    static againstAtLeast(numChars, text, argumentName) {
        return text.length >= numChars ? { succeeded: true } : { succeeded: false, message: `${argumentName} is null or undefined` };
    }
    static againstAtLeastBulk(args) {
        for (const arg of args) {
            const result = this.againstAtLeast(arg.numChars, arg.text, arg.argumentName);
            if (!result.succeeded)
                return result;
        }
        return { succeeded: true };
    }
    static againstNullOrUndefined(argument, argumentName) {
        if (argument === null || argument === undefined) {
            return {
                succeeded: false,
                message: `${argumentName} is null or undefined`
            };
        }
        else {
            return { succeeded: true };
        }
    }
    static againstNullOrUndefinedBulk(args) {
        for (const arg of args) {
            const result = this.againstNullOrUndefined(arg.argument, arg.argumentName);
            if (!result.succeeded)
                return result;
        }
        return { succeeded: true };
    }
    static isOneOf(value, validValues, argumentName) {
        let isValid = false;
        for (const validValue of validValues) {
            if (value === validValue) {
                isValid = true;
            }
        }
        if (isValid) {
            return { succeeded: true };
        }
        else {
            return {
                succeeded: false,
                message: `${argumentName} isn't oneOf the correct types in ${JSON.stringify(validValues)}. Got "${value}".`
            };
        }
    }
    static inRange(num, min, max, argumentName) {
        const isInRange = num >= min && num <= max;
        if (!isInRange) {
            return {
                succeeded: false,
                message: `${argumentName} is not within range ${min} to ${max}.`
            };
        }
        else {
            return { succeeded: true };
        }
    }
    static allInRange(numbers, min, max, argumentName) {
        let failingResult = null;
        for (const num of numbers) {
            const numIsInRangeResult = this.inRange(num, min, max, argumentName);
            if (!numIsInRangeResult.succeeded)
                failingResult = numIsInRangeResult;
        }
        if (failingResult) {
            return {
                succeeded: false,
                message: `${argumentName} is not within the range.`
            };
        }
        else {
            return { succeeded: true };
        }
    }
}
exports.Guard = Guard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR3VhcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29yZS9sb2dpYy9HdWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFtQkEsTUFBYSxLQUFLO0lBQ1QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUE0QjtRQUNoRCxLQUFLLE1BQU0sTUFBTSxJQUFJLFlBQVksRUFBRTtZQUNqQyxJQUFJLE1BQU0sQ0FBQyxTQUFTLEtBQUssS0FBSztnQkFBRSxPQUFPLE1BQU0sQ0FBQTtTQUM5QztRQUVELE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBZ0IsRUFBRSxJQUFZLEVBQUUsWUFBb0I7UUFDL0UsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsR0FBRyxZQUFZLHVCQUF1QixFQUFFLENBQUE7SUFDOUgsQ0FBQztJQUVNLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUE0QjtRQUMzRCxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksRUFBRTtZQUN0QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDNUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTO2dCQUFFLE9BQU8sTUFBTSxDQUFBO1NBQ3JDO1FBRUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0sTUFBTSxDQUFDLHNCQUFzQixDQUFDLFFBQWEsRUFBRSxZQUFvQjtRQUN0RSxJQUFJLFFBQVEsS0FBSyxJQUFJLElBQUksUUFBUSxL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