"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignUserRole = void 0;
const Result_1 = require("../../../../core/logic/Result");
const role_1 = require("../../domain/role");
const userId_1 = require("../../domain/userId");
// type Response = Either<
//   GenericAppError.UnexpectedError |
//   Result<any>,
//   Result<void>
// >
class AssignUserRole {
    constructor(roleRepo) {
        this.roleRepo = roleRepo;
    }
    async execute(request) {
        const { user } = request;
        const userRoleOrError = role_1.Role.create({
            userId: userId_1.UserId.create(user.id).getValue(),
            role: user.props.role,
        });
        if (userRoleOrError.isFailure) {
            return Result_1.Result.fail(userRoleOrError.error);
        }
        const role = userRoleOrError.getValue();
        try {
            await this.roleRepo.save(role);
            console.log(`[AssignUserRole]: User ${user.props.email} assigned to ${user.props.role}`);
        }
        catch (err) {
            return Result_1.Result.fail(err);
        }
        return Result_1.Result.ok(role);
    }
}
exports.AssignUserRole = AssignUserRole;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXNzaWduVXNlclJvbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy91c2Vycy91c2VDYXNlcy9hc3NpZ25Vc2VyUm9sZS9Bc3NpZ25Vc2VyUm9sZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSwwREFBMkU7QUFFM0UsNENBQXdDO0FBRXhDLGdEQUE0QztBQU01QywwQkFBMEI7QUFDMUIsc0NBQXNDO0FBQ3RDLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakIsSUFBSTtBQUVKLE1BQWEsY0FBYztJQUd6QixZQUFZLFFBQW1CO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO0lBQzFCLENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQWdCO1FBQzVCLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUE7UUFFeEIsTUFBTSxlQUFlLEdBQUcsV0FBSSxDQUFDLE1BQU0sQ0FBQztZQUNsQyxNQUFNLEVBQUUsZUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQ3pDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7U0FDdEIsQ0FBQyxDQUFBO1FBRUYsSUFBSSxlQUFlLENBQUMsU0FBUyxFQUFFO1lBQzdCLE9BQU8sZUFBTSxDQUFDLElBQUksQ0FBTyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDaEQ7UUFFRCxNQUFNLElBQUksR0FBUyxlQUFlLENBQUMsUUFBUSxFQUFFLENBQUE7UUFFN0MsSUFBSTtZQUNGLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFFOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGdCQUFnQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7U0FDekY7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sZUFBTSxDQUFDLElBQUksQ0FBTyxHQUFHLENBQUMsQ0FBQTtTQUM5QjtRQUVELE9BQU8sZUFBTSxDQUFDLEVBQUUsQ0FBTyxJQUFJLENBQUMsQ0FBQTtJQUM5QixDQUFDO0NBQ0Y7QUEvQkQsd0NBK0JDIn0=