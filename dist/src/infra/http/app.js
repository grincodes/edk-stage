"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const v1_1 = require("./api/v1");
const config_1 = require("../../config");
const app = (0, express_1.default)();
exports.app = app;
const origin = {
    origin: config_1.isProduction ? "https://" : "*",
};
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)(origin));
app.use((0, compression_1.default)());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("combined"));
app.use("/api/v1", v1_1.v1Router);
// New api versions can go here
app.listen(process.env.PORT || 4000, () => {
    console.log(`[App]: Server listening on 4000`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2luZnJhL2h0dHAvYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNEQUE2QjtBQUM3Qiw4REFBb0M7QUFDcEMsb0RBQTJCO0FBQzNCLGdEQUF1QjtBQUN2QixvREFBMkI7QUFDM0IsOERBQXFDO0FBQ3JDLGlDQUFtQztBQUNuQyx5Q0FBMkM7QUFFM0MsTUFBTSxHQUFHLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUE7QUFxQlosa0JBQUc7QUFuQlosTUFBTSxNQUFNLEdBQUc7SUFDYixNQUFNLEVBQUUscUJBQVksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHO0NBQ3hDLENBQUE7QUFFRCxHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUMxQixHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUNsRCxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsY0FBSSxFQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7QUFDckIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFBLHFCQUFXLEdBQUUsQ0FBQyxDQUFBO0FBQ3RCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxnQkFBTSxHQUFFLENBQUMsQ0FBQTtBQUNqQixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsZ0JBQU0sRUFBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO0FBRTNCLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLGFBQVEsQ0FBQyxDQUFBO0FBRTVCLCtCQUErQjtBQUUvQixHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFBO0FBQ2hELENBQUMsQ0FBQyxDQUFBIn0=