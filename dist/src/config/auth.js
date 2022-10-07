"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authConfig = void 0;
const authConfig = {
    secret: process.env.JWT_SECRET || "edekeeTech2020",
    tokenExpiryTime: 300000,
    redisServerPort: process.env.REDIS_PORT || 6379,
    redisServerURL: process.env.REDIS_URL,
    redisConnectionString: process.env.REDIS_CONNECTION_STRING,
};
exports.authConfig = authConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb25maWcvYXV0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFNLFVBQVUsR0FBRztJQUNqQixNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLElBQUksZ0JBQWdCO0lBQ2xELGVBQWUsRUFBRSxNQUFNO0lBQ3ZCLGVBQWUsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsSUFBSSxJQUFJO0lBQy9DLGNBQWMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVM7SUFDckMscUJBQXFCLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUI7Q0FDM0QsQ0FBQTtBQUVRLGdDQUFVIn0=