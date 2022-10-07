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
exports.redisConnection = void 0;
const redis = __importStar(require("redis"));
const config_1 = require("../../../../config");
const port = config_1.authConfig.redisServerPort;
const host = config_1.authConfig.redisServerURL;
const redisConnection = config_1.isProduction ? redis.createClient({ url: config_1.authConfig.redisConnectionString }) : redis.createClient({ url: host }); // creates a new client
exports.redisConnection = redisConnection;
redisConnection.on("error", (err) => console.log("Redis Client Error", err));
redisConnection
    .connect()
    .then(() => {
    console.log("Redis Client");
})
    .catch((err) => {
    console.log("Redis Client Error", err);
});
redisConnection.on("connect", () => {
    console.log(`[Redis]: Connected to redis server at ${host}:${port}`);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkaXNDb25uZWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvdXNlcnMvc2VydmljZXMvcmVkaXMvcmVkaXNDb25uZWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQThCO0FBRTlCLCtDQUE2RDtBQUU3RCxNQUFNLElBQUksR0FBRyxtQkFBVSxDQUFDLGVBQWUsQ0FBQTtBQUN2QyxNQUFNLElBQUksR0FBRyxtQkFBVSxDQUFDLGNBQWMsQ0FBQTtBQUN0QyxNQUFNLGVBQWUsR0FBb0IscUJBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLEdBQUcsRUFBRSxtQkFBVSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUMsdUJBQXVCO0FBZ0J4SywwQ0FBZTtBQWR4QixlQUFlLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBRTVFLGVBQWU7S0FDWixPQUFPLEVBQUU7S0FDVCxJQUFJLENBQUMsR0FBRyxFQUFFO0lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQTtBQUM3QixDQUFDLENBQUM7S0FDRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxDQUFDLENBQUE7QUFDeEMsQ0FBQyxDQUFDLENBQUE7QUFDSixlQUFlLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUU7SUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUE7QUFDdEUsQ0FBQyxDQUFDLENBQUEifQ==