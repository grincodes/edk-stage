"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisOtpService = exports.authService = void 0;
const redisAuthService_1 = require("./redis/redisAuthService");
const redisConnection_1 = require("./redis/redisConnection");
const redisOtpService_1 = require("./redis/redisOtpService");
const authService = new redisAuthService_1.RedisAuthService(redisConnection_1.redisConnection);
exports.authService = authService;
const redisOtpService = new redisOtpService_1.RedisOtpCodeService(redisConnection_1.redisConnection);
exports.redisOtpService = redisOtpService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2Vycy9zZXJ2aWNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrREFBMkQ7QUFDM0QsNkRBQXlEO0FBQ3pELDZEQUE2RDtBQUU3RCxNQUFNLFdBQVcsR0FBRyxJQUFJLG1DQUFnQixDQUFDLGlDQUFlLENBQUMsQ0FBQTtBQUdoRCxrQ0FBVztBQUZwQixNQUFNLGVBQWUsR0FBRyxJQUFJLHFDQUFtQixDQUFDLGlDQUFlLENBQUMsQ0FBQTtBQUUxQywwQ0FBZSJ9