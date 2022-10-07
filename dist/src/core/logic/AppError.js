"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericAppError = void 0;
const Result_1 = require("./Result");
var GenericAppError;
(function (GenericAppError) {
    class UnexpectedError extends Result_1.Result {
        constructor(err) {
            super(false, {
                message: `An unexpected error occurred.`,
                error: err
            });
            console.log(`[AppError]: An unexpected error occurred`);
            console.error(err);
        }
        static create(err) {
            return new UnexpectedError(err);
        }
    }
    GenericAppError.UnexpectedError = UnexpectedError;
})(GenericAppError = exports.GenericAppError || (exports.GenericAppError = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvY29yZS9sb2dpYy9BcHBFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBa0M7QUFHbEMsSUFBaUIsZUFBZSxDQWUvQjtBQWZELFdBQWlCLGVBQWU7SUFDOUIsTUFBYSxlQUFnQixTQUFRLGVBQW9CO1FBQ3ZELFlBQW1CLEdBQVE7WUFDekIsS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDWCxPQUFPLEVBQUUsK0JBQStCO2dCQUN4QyxLQUFLLEVBQUUsR0FBRzthQUNLLENBQUMsQ0FBQztZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7WUFDeEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDO1FBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFRO1lBQzNCLE9BQU8sSUFBSSxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsQ0FBQztLQUNGO0lBYlksK0JBQWUsa0JBYTNCLENBQUE7QUFDSCxDQUFDLEVBZmdCLGVBQWUsR0FBZix1QkFBZSxLQUFmLHVCQUFlLFFBZS9CIn0=