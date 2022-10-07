"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMap = void 0;
const Mapper_1 = require("../../../core/infra/Mapper");
const UniqueEntityID_1 = require("../../../core/domain/UniqueEntityID");
const userEmail_1 = require("../domain/userEmail");
const userPassword_1 = require("../domain/userPassword");
const user_1 = require("../domain/user");
const userRoles_1 = require("../domain/userRoles");
const Result_1 = require("../../../core/logic/Result");
const userRole_1 = require("../domain/userRole");
class UserMap extends Mapper_1.Mapper {
    static async toPersistence(user) {
        let password = null;
        if (!!user.password === true) {
            if (user.password.isAlreadyHashed()) {
                password = user.password.value;
            }
            else {
                password = await user.password.getHashedValue();
            }
        }
        return {
            base_user_id: user.id.toString(),
            user_email: user.email.value,
            user_password: password,
            first_name: user.firstName,
            last_name: user.lastName,
            is_email_verified: user.isEmailVerified,
        };
    }
    static toDomain(raw) {
        //TODO Handling roles return console.log('raw role ',raw.Role);
        const userEmailOrError = userEmail_1.UserEmail.create(raw.user_email);
        const userPasswordOrError = userPassword_1.UserPassword.create({ value: raw.user_password, hashed: true });
        if (!raw.Role.length) {
            // throw error
            console.log("very bad all users must have a role");
            return null;
        }
        const userRoles = raw.Role.map((roleObj) => {
            return userRole_1.UserRole.create(roleObj.role).getValue();
        });
        const rolesOrError = userRoles_1.UserRoles.create(userRoles);
        const combinedPropsResult = Result_1.Result.combine([userEmailOrError, userPasswordOrError]);
        if (!combinedPropsResult.isFailure) {
            const userOrError = user_1.User.create({
                email: userEmailOrError.getValue(),
                password: userPasswordOrError.getValue(),
                firstName: raw.first_name,
                lastName: raw.last_name,
                isEmailVerified: raw.is_email_verified,
                role: rolesOrError[0],
                roles: rolesOrError,
            }, new UniqueEntityID_1.UniqueEntityID(raw.base_user_id));
            userOrError.isFailure ? console.log(userOrError.error) : "";
            return userOrError.isSuccess ? userOrError.getValue() : null;
        }
        return combinedPropsResult.errorValue();
    }
    static toResponeDto(user) {
        const response = {
            id: user.id.toValue(),
            email: user.email.value,
            role: user.role.value,
        };
        return response;
    }
}
exports.UserMap = UserMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlck1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL21hcHBlcnMvVXNlck1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1REFBbUQ7QUFDbkQsd0VBQW9FO0FBQ3BFLG1EQUErQztBQUMvQyx5REFBcUQ7QUFDckQseUNBQXFDO0FBRXJDLG1EQUErQztBQUMvQyx1REFBbUQ7QUFDbkQsaURBQTZDO0FBRTdDLE1BQWEsT0FBUSxTQUFRLGVBQVk7SUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBVTtRQUMxQyxJQUFJLFFBQVEsR0FBVyxJQUFJLENBQUE7UUFDM0IsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDNUIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxFQUFFO2dCQUNuQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUE7YUFDL0I7aUJBQU07Z0JBQ0wsUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQTthQUNoRDtTQUNGO1FBRUQsT0FBTztZQUNMLFlBQVksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUNoQyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQzVCLGFBQWEsRUFBRSxRQUFRO1lBQ3ZCLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUztZQUMxQixTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDeEIsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGVBQWU7U0FDeEMsQ0FBQTtJQUNILENBQUM7SUFFTSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQVE7UUFDN0IsK0RBQStEO1FBQy9ELE1BQU0sZ0JBQWdCLEdBQUcscUJBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3pELE1BQU0sbUJBQW1CLEdBQUcsMkJBQVksQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtRQUMzRixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDcEIsY0FBYztZQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQTtZQUNsRCxPQUFPLElBQUksQ0FBQTtTQUNaO1FBQ0QsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUN6QyxPQUFPLG1CQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNqRCxDQUFDLENBQUMsQ0FBQTtRQUVGLE1BQU0sWUFBWSxHQUFHLHFCQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ2hELE1BQU0sbUJBQW1CLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGdCQUFnQixFQUFFLG1CQUFtQixDQUFDLENBQUMsQ0FBQTtRQUVuRixJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFO1lBQ2xDLE1BQU0sV0FBVyxHQUFHLFdBQUksQ0FBQyxNQUFNLENBQzdCO2dCQUNFLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2xDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3hDLFNBQVMsRUFBRSxHQUFHLENBQUMsVUFBVTtnQkFDekIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxTQUFTO2dCQUN2QixlQUFlLEVBQUUsR0FBRyxDQUFDLGlCQUFpQjtnQkFDdEMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLEtBQUssRUFBRSxZQUFZO2FBQ3BCLEVBQ0QsSUFBSSwrQkFBYyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FDckMsQ0FBQTtZQUVELFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUE7WUFDM0QsT0FBTyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtTQUM3RDtRQUVELE9BQU8sbUJBQW1CLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDekMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBVTtRQUNuQyxNQUFNLFFBQVEsR0FBRztZQUNmLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUNyQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUs7U0FDdEIsQ0FBQTtRQUVELE9BQU8sUUFBUSxDQUFBO0lBQ2pCLENBQUM7Q0FDRjtBQW5FRCwwQkFtRUMifQ==