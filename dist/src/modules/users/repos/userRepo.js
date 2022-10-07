"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepo = void 0;
const UserMap_1 = require("../mappers/UserMap");
const userId_1 = require("../domain/userId");
class UserRepo {
    constructor(models) {
        this.models = models;
    }
    createBaseQuery() {
        const { models } = this;
        return {
            where: {},
            include: [{ model: models.Role, as: "Role", required: false }],
        };
    }
    async findUserById(id) {
        const _id = id instanceof userId_1.UserId ? id.id.toValue() : id;
        const user = await this.models.BaseUser.findByPk(_id).toJSON();
        if (!!user === true)
            return UserMap_1.UserMap.toDomain(user);
        return null;
    }
    async findUserByEmail(email) {
        const baseQuery = this.createBaseQuery();
        baseQuery.where["user_email"] = email.value.toString();
        const rawuser = await this.models.BaseUser.findOne(baseQuery);
        const user = rawuser.toJSON();
        return UserMap_1.UserMap.toDomain(user);
    }
    async exists(email) {
        const baseQuery = this.createBaseQuery();
        baseQuery.where["user_email"] = email.value.toString();
        const user = await this.models.BaseUser.findOne(baseQuery);
        return !!user === true;
    }
    async verifyUserById(id) {
        const BaseUserModel = this.models.BaseUser;
        try {
            await BaseUserModel.update({ is_email_verified: true }, {
                where: { base_user_id: id },
            });
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
    async save(user) {
        const BaseUserModel = this.models.BaseUser;
        const exists = await this.exists(user.email);
        const rawUser = await UserMap_1.UserMap.toPersistence(user);
        try {
            if (!exists) {
                // Create new
                await BaseUserModel.create(rawUser);
            }
            else {
                // Save old
                const sequelizeUserInstance = await BaseUserModel.findOne({
                    where: { user_email: user.email.value },
                });
                await sequelizeUserInstance.update(rawUser);
            }
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
}
exports.UserRepo = UserRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclJlcG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2Vycy9yZXBvcy91c2VyUmVwby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxnREFBNEM7QUFFNUMsNkNBQXlDO0FBVXpDLE1BQWEsUUFBUTtJQUduQixZQUFZLE1BQVc7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7SUFDdEIsQ0FBQztJQUVPLGVBQWU7UUFDckIsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQTtRQUN2QixPQUFPO1lBQ0wsS0FBSyxFQUFFLEVBQUU7WUFDVCxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQy9ELENBQUE7SUFDSCxDQUFDO0lBRU0sS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFtQjtRQUMzQyxNQUFNLEdBQUcsR0FBRyxFQUFFLFlBQVksZUFBTSxDQUFDLENBQUMsQ0FBVSxFQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7UUFFakUsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUE7UUFDOUQsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUk7WUFBRSxPQUFPLGlCQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBRWxELE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQztJQUVNLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBZ0I7UUFDM0MsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO1FBQ3hDLFNBQVMsQ0FBQyxLQUFLLENBQUMsWUFB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