"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rabbitmqConnection = void 0;
const callback_api_1 = __importDefault(require("amqplib/callback_api"));
const config_1 = require("../../config");
const CONN_URL = config_1.isProduction ? process.env.RABBITMQ_CONNECTION_URL : process.env.RABBITMQ_DEV;
let rabbitmqConnection = null;
exports.rabbitmqConnection = rabbitmqConnection;
callback_api_1.default.connect(CONN_URL, function (err, conn) {
    exports.rabbitmqConnection = rabbitmqConnection = conn;
});
process.on("exit", (code) => {
    rabbitmqConnection.close();
    console.log(`Closing rabbitmq channel`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9pbmZyYS9yYWJiaXRNcS9jb25uZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHdFQUF1QztBQUN2Qyx5Q0FBMkM7QUFFM0MsTUFBTSxRQUFRLEdBQUcscUJBQVksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUE7QUFFOUYsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLENBQUE7QUFVcEIsZ0RBQWtCO0FBVDNCLHNCQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFVLEdBQUcsRUFBRSxJQUFJO0lBQ3hDLDZCQUFBLGtCQUFrQixHQUFHLElBQUksQ0FBQTtBQUMzQixDQUFDLENBQUMsQ0FBQTtBQUVGLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7SUFDMUIsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFBO0FBQ3pDLENBQUMsQ0FBQyxDQUFBIn0=