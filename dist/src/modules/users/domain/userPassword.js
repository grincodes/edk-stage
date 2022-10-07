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
exports.UserPassword = void 0;
const bcrypt = __importStar(require("bcrypt-nodejs"));
const ValueObject_1 = require("../../../core/domain/ValueObject");
const Guard_1 = require("../../../core/logic/Guard");
const Result_1 = require("../../../core/logic/Result");
class UserPassword extends ValueObject_1.ValueObject {
    constructor(props) {
        super(props);
    }
    get value() {
        return this.props.value;
    }
    static isAppropriateLength(password) {
        return password.length >= this.minLength;
    }
    /**
     * @method comparePassword
     * @desc Compares as plain-text and hashed password.
     */
    async comparePassword(plainTextPassword) {
        let hashed;
        if (this.isAlreadyHashed()) {
            hashed = this.props.value;
            return this.bcryptCompare(plainTextPassword, hashed);
        }
        else {
            return this.props.value === plainTextPassword;
        }
    }
    bcryptCompare(plainText, hashed) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(plainText, hashed, (err, compareResult) => {
                if (err)
                    return resolve(false);
                return resolve(compareResult);
            });
        });
    }
    isAlreadyHashed() {
        return this.props.hashed;
    }
    hashPassword(password) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, null, null, (err, hash) => {
                if (err)
                    return reject(err);
                resolve(hash);
            });
        });
    }
    getHashedValue() {
        return new Promise((resolve) => {
            if (this.isAlreadyHashed()) {
                return resolve(this.props.value);
            }
            else {
                return resolve(this.hashPassword(this.props.value));
            }
        });
    }
    static create(props) {
        const guardResult = Guard_1.Guard.againstNullOrUndefined(props.value, "password");
        if (!guardResult.succeeded) {
            return Result_1.Result.fail(guardResult.message);
        }
        else {
            if (!props.hashed) {
                if (!this.isAppropriateLength(props.value)) {
                    return Result_1.Result.fail("Password doesnt meet criteria [8 chars min].");
                }
            }
            return Result_1.Result.ok(new UserPassword({
                value: props.value,
                hashed: !!props.hashed === true
            }));
        }
    }
}
exports.UserPassword = UserPassword;
UserPassword.minLength = 6;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclBhc3N3b3JkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlcnMvZG9tYWluL3VzZXJQYXNzd29yZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUF1QztBQUN2QyxrRUFBOEQ7QUFDOUQscURBQWlEO0FBQ2pELHVEQUFtRDtBQU9uRCxNQUFhLFlBQWEsU0FBUSx5QkFBK0I7SUFPL0QsWUFBb0IsS0FBeUI7UUFDM0MsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2QsQ0FBQztJQU5ELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUE7SUFDekIsQ0FBQztJQU1PLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFnQjtRQUNqRCxPQUFPLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQTtJQUMxQyxDQUFDO0lBRUQ7OztPQUdHO0lBRUksS0FBSyxDQUFDLGVBQWUsQ0FBQyxpQkFBeUI7UUFDcEQsSUFBSSxNQUFjLENBQUE7UUFDbEIsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUU7WUFDMUIsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFBO1lBQ3pCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQTtTQUNyRDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxpQkFBaUIsQ0FBQTtTQUM5QztJQUNILENBQUM7SUFFTyxhQUFhLENBQUMsU0FBaUIsRUFBRSxNQUFjO1FBQ3JELE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLGFBQWEsRUFBRSxFQUFFO2dCQUN2RCxJQUFJLEdBQUc7b0JBQUUsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQzlCLE9BQU8sT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBQy9CLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRU0sZUFBZTtRQUNwQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFBO0lBQzFCLENBQUM7SUFFTyxZQUFZLENBQUMsUUFBZ0I7UUFDbkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO2dCQUM5QyxJQUFJLEdBQUc7b0JBQUUsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQzNCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNmLENBQUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRU0sY0FBYztRQUNuQixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDN0IsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUU7Z0JBQzFCLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7YUFDakM7aUJBQU07Z0JBQ0wsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7YUFDcEQ7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQXlCO1FBQzVDLE1BQU0sV0FBVyxHQUFHLGFBQUssQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFBO1FBRXpFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO1lBQzFCLE9BQU8sZUFBTSxDQUFDLElBQUksQ0FBZSxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDdEQ7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDMUMsT0FBTyxlQUFNLENBQUMsSUFBSSxDQUFlLDhDQUE4QyxDQUFDLENBQUE7aUJBQ2pGO2FBQ0Y7WUFFRCxPQUFPLGVBQU0sQ0FBQyxFQUFFLENBQ2QsSUFBSSxZQUFZLENBQUM7Z0JBQ2YsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO2dCQUNsQixNQUFNLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssSUFBSTthQUNoQyxDQUFDLENBQ0gsQ0FBQTtTQUNGO0lBQ0gsQ0FBQzs7QUFqRkgsb0NBa0ZDO0FBakZlLHNCQUFTLEdBQUcsQ0FBQyxDQUFBIn0=