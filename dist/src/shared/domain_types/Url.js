"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url = void 0;
const ValueObject_1 = require("../../core/domain/ValueObject");
const Guard_1 = require("../../core/logic/Guard");
const Result_1 = require("../../core/logic/Result");
const TextUtils_1 = require("../../utils/TextUtils");
class Url extends ValueObject_1.ValueObject {
    get value() {
        return this.props.value;
    }
    static isValidUrl(url) {
        return TextUtils_1.TextUtils.validateWebURL(url);
    }
    constructor(props) {
        super(props);
    }
    static create(url) {
        const urlResult = Guard_1.Guard.againstNullOrUndefined(url, "url");
        if (!urlResult.succeeded) {
            return Result_1.Result.fail(urlResult.message);
        }
        if (!this.isValidUrl(url)) {
            return Result_1.Result.fail(`Invalid url ${url}`);
        }
        return Result_1.Result.ok(new Url({ value: url }));
    }
}
exports.Url = Url;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXJsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NoYXJlZC9kb21haW5fdHlwZXMvVXJsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtEQUEyRDtBQUMzRCxrREFBOEM7QUFDOUMsb0RBQWdEO0FBQ2hELHFEQUFpRDtBQU1qRCxNQUFhLEdBQUksU0FBUSx5QkFBc0I7SUFDN0MsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQTtJQUN6QixDQUFDO0lBRU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFXO1FBQ25DLE9BQU8scUJBQVMsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUNELFlBQW9CLEtBQWdCO1FBQ2xDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNkLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQVc7UUFDOUIsTUFBTSxTQUFTLEdBQUcsYUFBSyxDQUFDLHNCQUFzQixDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUUxRCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUN4QixPQUFPLGVBQU0sQ0FBQyxJQUFJLENBQU0sU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQzNDO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDekIsT0FBTyxlQUFNLENBQUMsSUFBSSxDQUFNLGVBQWUsR0FBRyxFQUFFLENBQUMsQ0FBQTtTQUM5QztRQUVELE9BQU8sZUFBTSxDQUFDLEVBQUUsQ0FBTSxJQUFJLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDaEQsQ0FBQztDQUNGO0FBekJELGtCQXlCQyJ9