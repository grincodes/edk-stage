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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisAuthService = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const rand_token_1 = __importDefault(require("rand-token"));
const config_1 = require("../../../../config");
const abstractRedisClient_1 = require("./abstractRedisClient");
/**
 * @class JWTClient
 * @extends AbstractRedisClient
 * @desc This class is responsible for persisting jwts to redis
 * and for signing tokens. It should also be responsible for determining their
 * validity.
 */
class RedisAuthService extends abstractRedisClient_1.AbstractRedisClient {
    constructor(redisClient) {
        super(redisClient);
        this.jwtHashName = "activeJwtClients";
    }
    async getPermissions(email, refreshToken) {
        const token = await this.getToken(email, refreshToken);
        const userProps = await this.decodeJWT(token);
        return userProps.roles;
    }
    async hasPermissionToAccessRole(email, refreshToken, role) {
        const roles = await this.getPermissions(email, refreshToken);
        if (!roles.length) {
            return false;
        }
        return roles.includes(role);
    }
    async refreshTokenExists(refreshToken) {
        const keys = await this.getAllKeys(`*${refreshToken}*`);
        return keys.length !== 0;
    }
    async getEmailFromRefreshToken(refreshToken) {
        const keys = await this.getAllKeys(`*${refreshToken}*`);
        const exists = keys.length !== 0;
        if (!exists)
            throw new Error("email not found for refresh token.");
        const key = keys[0];
        return key.substring(key.indexOf(this.jwtHashName) + this.jwtHashName.length + 1);
    }
    async saveAuthenticatedUser(user) {
        if (user.isLoggedIn()) {
            await this.addToken(user.email.value, user.refreshToken, user.accessToken);
        }
    }
    async deAuthenticateUser(email) {
        await this.clearAllSessions(email);
    }
    createRefreshToken() {
        return rand_token_1.default.uid(256);
    }
    /**
     * @function signJWT
     * @desc Signs the JWT token using the server secret with some claims
     * about the current user.
     */
    signJWT(props) {
        const claims = {
            email: props.email,
            roles: props.roles,
            userId: props.userId,
            isEmailVerified: props.isEmailVerified
        };
        return jwt.sign(claims, config_1.authConfig.secret, {
            expiresIn: config_1.authConfig.tokenExpiryTime
        });
    }
    /**
     * @method decodeJWT
     * @desc Decodes the JWT using the server secret. If successful decode,
     * it returns the data from the token.
     * @param {token} string
     * @return Promise<any>
     */
    decodeJWT(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, config_1.authConfig.secret, (err, decoded) => {
                if (err)
                    return resolve(null);
                return resolve(decoded);
            });
        });
    }
    constructKey(email, refreshToken) {
        return `refresh-${refreshToken}.${this.jwtHashName}.${email}`;
    }
    /**
     * @method addToken
     * @desc Adds the token for this user to redis.
     *
     * @param {email} string
     * @param {refreshToken} string
     * @param {token} string
     * @return Promise<any>
     */
    addToken(email, refreshToken, token) {
        return this.set(this.constructKey(email, refreshToken), token);
    }
    /**
     * @method clearAllTokens
     * @desc Clears all jwt tokens from redis. Usually useful for testing.
     * @return Promise<any>
     */
    async clearAllTokens() {
        const allKeys = await this.getAllKeys(`*${this.jwtHashName}*`);
        return Promise.all(allKeys.map((key) => this.deleteOne(key)));
    }
    /**
     * @method countSessions
     * @desc Counts the total number of sessions for a particular user.
     * @param {email} string
     * @return Promise<number>
     */
    countSessions(email) {
        return this.count(`*${this.jwtHashName}.${email}`);
    }
    /**
     * @method countTokens
     * @desc Counts the total number of sessions for a particular user.
     * @return Promise<number>
     */
    countTokens() {
        return this.count(`*${this.jwtHashName}*`);
    }
    /**
     * @method getTokens
     * @desc Gets the user's tokens that are currently active.
     * @return Promise<string[]>
     */
    async getTokens(email) {
        const keyValues = await this.getAllKeyValue(`*${this.jwtHashName}.${email}`);
        return keyValues.map((kv) => kv.value);
    }
    /**
     * @method getToken
     * @desc Gets a single token for the user.
     * @param {email} string
     * @param {refreshToken} string
     * @return Promise<string>
     */
    async getToken(email, refreshToken) {
        return this.getOne(this.constructKey(email, refreshToken));
    }
    /**
     * @method clearToken
     * @desc Deletes a single user's session token.
     * @param {email} string
     * @param {refreshToken} string
     * @return Promise<string>
     */
    async clearToken(email, refreshToken) {
        return this.deleteOne(this.constructKey(email, refreshToken));
    }
    /**
     * @method clearAllSessions
     * @desc Clears all active sessions for the current user.
     * @param {email} string
     * @return Promise<any>
     */
    async clearAllSessions(email) {
        const keyValues = await this.getAllKeyValue(`*${this.jwtHashName}.${email}`);
        const keys = keyValues.map((kv) => kv.key);
        return Promise.all(keys.map((key) => this.deleteOne(key)));
    }
    /**
     * @method sessionExists
     * @desc Checks if the session for this user exists
     * @param {email} string
     * @param {refreshToken} string
     * @return Promise<boolean>
     */
    async sessionExists(email, refreshToken) {
        const token = await this.getToken(email, refreshToken);
        if (token) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.RedisAuthService = RedisAuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkaXNBdXRoU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL3NlcnZpY2VzL3JlZGlzL3JlZGlzQXV0aFNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrREFBbUM7QUFFbkMsNERBQWtDO0FBQ2xDLCtDQUErQztBQUMvQywrREFBMkQ7QUFNM0Q7Ozs7OztHQU1HO0FBRUgsTUFBYSxnQkFBaUIsU0FBUSx5Q0FBbUI7SUFHdkQsWUFBWSxXQUE0QjtRQUN0QyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUE7UUFIYixnQkFBVyxHQUFHLGtCQUFrQixDQUFBO0lBSXZDLENBQUM7SUFFTSxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQWEsRUFBRSxZQUFvQjtRQUM3RCxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFBO1FBQ3RELE1BQU0sU0FBUyxHQUFjLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN4RCxPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUE7SUFDeEIsQ0FBQztJQUVNLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxLQUFhLEVBQUUsWUFBb0IsRUFBRSxJQUFZO1FBQ3RGLE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUE7UUFFNUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDakIsT0FBTyxLQUFLLENBQUE7U0FDYjtRQUVELE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBRU0sS0FBSyxDQUFDLGtCQUFrQixDQUFDLFlBQTBCO1FBQ3hELE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxD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