"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleRepo = void 0;
const RoleMap_1 = require("../mappers/RoleMap");
class RoleRepo {
    constructor(models) {
        this.models = models;
    }
    createBaseQuery() {
        return {
            where: {}
        };
    }
    async exists(userId) {
        const baseQuery = this.createBaseQuery();
        baseQuery.where['role_user_id'] = userId.id.toString();
        const role = await this.models.BaseUser.findOne(baseQuery);
        return !!role === true;
    }
    async save(role) {
        const UserRoleModel = this.models.Role;
        const rawRole = RoleMap_1.RoleMap.toPersistence(role);
        try {
            await UserRoleModel.create(rawRole);
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
}
exports.RoleRepo = RoleRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZVJlcG8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2Vycy9yZXBvcy9yb2xlUmVwby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxnREFBNkM7QUFPN0MsTUFBYSxRQUFRO0lBR25CLFlBQVksTUFBVztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRU8sZUFBZTtRQUNyQixPQUFPO1lBQ0wsS0FBSyxFQUFFLEVBQUU7U0FDVixDQUFDO0lBQ0osQ0FBQztJQUVNLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBYztRQUNoQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDekMsU0FBUyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3ZELE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNELE9BQU8sQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLENBQUM7SUFDekIsQ0FBQztJQUVNLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBUztRQUN6QixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUV2QyxNQUFNLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU1QyxJQUFJO1lBQ0YsTUFBTSxhQUFhLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3JDO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDO0NBQ0Y7QUFoQ0QsNEJBZ0NDIn0=