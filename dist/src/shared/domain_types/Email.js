"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
/* eslint-disable no-useless-escape */
const ValueObject_1 = require("../../core/domain/ValueObject");
const Result_1 = require("../../core/logic/Result");
class Email extends ValueObject_1.ValueObject {
    get value() {
        return this.props.value;
    }
    constructor(props) {
        super(props);
    }
    static isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    static format(email) {
        return email.trim().toLowerCase();
    }
    static create(email) {
        if (!this.isValidEmail(email)) {
            return Result_1.Result.fail("Email address not valid");
        }
        else {
            return Result_1.Result.ok(new Email({ value: this.format(email) }));
        }
    }
}
exports.Email = Email;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1haWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2hhcmVkL2RvbWFpbl90eXBlcy9FbWFpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBc0M7QUFDdEMsK0RBQTJEO0FBQzNELG9EQUFnRDtBQU1oRCxNQUFhLEtBQU0sU0FBUSx5QkFBdUI7SUFDaEQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQTtJQUN6QixDQUFDO0lBRUQsWUFBb0IsS0FBaUI7UUFDbkMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ2QsQ0FBQztJQUVNLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBYTtRQUN0QyxNQUFNLEVBQUUsR0FBRyx3SkFBd0osQ0FBQTtRQUNuSyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDdkIsQ0FBQztJQUVPLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBYTtRQUNqQyxPQUFPLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUNuQyxDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdCLE9BQU8sZUFBTSxDQUFDLElBQUksQ0FBUSx5QkFBeUIsQ0FBQyxDQUFBO1NBQ3JEO2FBQU07WUFDTCxPQUFPLGVBQU0sQ0FBQyxFQUFFLENBQVEsSUFBSSxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtTQUNsRTtJQUNILENBQUM7Q0FDRjtBQXpCRCxzQkF5QkMifQ==