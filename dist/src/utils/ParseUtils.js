"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseUtils = void 0;
const Result_1 = require("../core/logic/Result");
class ParseArrayConfig {
    constructor(raw) {
        this.raw = raw;
    }
    to(dataType) {
        switch (dataType) {
            case "number":
                return JSON.parse(this.raw);
            case "string":
                return JSON.parse(this.raw);
            case "object":
                return JSON.parse(this.raw);
        }
    }
}
class ParseUtils {
    static parseBoolean(raw) {
        if (raw === "" || raw === undefined || raw === null || raw === "null")
            return false;
        return JSON.parse(raw);
    }
    static parseObject(raw) {
        let returnData;
        try {
            returnData = JSON.parse(raw);
        }
        catch (err) {
            return Result_1.Result.fail(err);
        }
        return Result_1.Result.ok(returnData);
    }
    static parseArray(rawArrayString) {
        return new ParseArrayConfig(rawArrayString);
    }
}
exports.ParseUtils = ParseUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyc2VVdGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9QYXJzZVV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlEQUE2QztBQUk3QyxNQUFNLGdCQUFnQjtJQUdwQixZQUFZLEdBQVE7UUFDbEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUE7SUFDaEIsQ0FBQztJQUVNLEVBQUUsQ0FBQyxRQUF1QjtRQUMvQixRQUFRLFFBQVEsRUFBRTtZQUNoQixLQUFLLFFBQVE7Z0JBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWEsQ0FBQTtZQUN6QyxLQUFLLFFBQVE7Z0JBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWEsQ0FBQTtZQUN6QyxLQUFLLFFBQVE7Z0JBQ1gsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWEsQ0FBQTtTQUMxQztJQUNILENBQUM7Q0FDRjtBQUVELE1BQWEsVUFBVTtJQUNkLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBUTtRQUNqQyxJQUFJLEdBQUcsS0FBSyxFQUFFLElBQUksR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxNQUFNO1lBQUUsT0FBTyxLQUFLLENBQUE7UUFDbkYsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3hCLENBQUM7SUFFTSxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQVE7UUFDaEMsSUFBSSxVQUFlLENBQUE7UUFDbkIsSUFBSTtZQUNGLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQzdCO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLGVBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDeEI7UUFFRCxPQUFPLGVBQU0sQ0FBQyxFQUFFLENBQU0sVUFBVSxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxVQUFVLENBQUMsY0FBbUI7UUFDMUMsT0FBTyxJQUFJLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFBO0lBQzdDLENBQUM7Q0FDRjtBQXBCRCxnQ0FvQkMifQ==