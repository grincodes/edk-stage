"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleMap = void 0;
const Mapper_1 = require("../../../core/infra/Mapper");
class RoleMap extends Mapper_1.Mapper {
    static toPersistence(roleProps) {
        return {
            role_id: roleProps.id.toString(),
            role_user_id: roleProps.userId.id.toValue(),
            role: roleProps.role.value
        };
    }
}
exports.RoleMap = RoleMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9sZU1hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3VzZXJzL21hcHBlcnMvUm9sZU1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1REFBbUQ7QUFHbkQsTUFBYSxPQUFRLFNBQVEsZUFBWTtJQUNoQyxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQWU7UUFDekMsT0FBTztZQUNMLE9BQU8sRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUNoQyxZQUFZLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO1lBQzNDLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUs7U0FDM0IsQ0FBQTtJQUNILENBQUM7Q0FDRjtBQVJELDBCQVFDIn0=