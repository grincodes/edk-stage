"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product360VideoMap = void 0;
const Mapper_1 = require("../../../core/infra/Mapper");
class Product360VideoMap extends Mapper_1.Mapper {
    static toPersistence(product360Video) {
        return {
            v360_id: product360Video.id.toString(),
            product_id: product360Video.productId.toString(),
            url: product360Video.url.value,
        };
    }
    static toResponeDto(product360Video) {
        const response = {
            id: product360Video.id.toString(),
            url: product360Video.url.value,
        };
        return response;
    }
}
exports.Product360VideoMap = Product360VideoMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdDM2MFZpZGVvTWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvbWFwcGVycy9wcm9kdWN0MzYwVmlkZW9NYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdURBQW1EO0FBSW5ELE1BQWEsa0JBQW1CLFNBQVEsZUFBdUI7SUFDdEQsTUFBTSxDQUFDLGFBQWEsQ0FBQyxlQUFnQztRQUMxRCxPQUFPO1lBQ0wsT0FBTyxFQUFFLGVBQWUsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ3RDLFVBQVUsRUFBRSxlQUFlLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTtZQUNoRCxHQUFHLEVBQUUsZUFBZSxDQUFDLEdBQUcsQ0FBQyxLQUFLO1NBQy9CLENBQUE7SUFDSCxDQUFDO0lBRU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxlQUFnQztRQUN6RCxNQUFNLFFBQVEsR0FBRztZQUNmLEVBQUUsRUFBRSxlQUFlLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUNqQyxHQUFHLEVBQUUsZUFBZSxDQUFDLEdBQUcsQ0FBQyxLQUFLO1NBQy9CLENBQUE7UUFFRCxPQUFPLFFBQVEsQ0FBQTtJQUNqQixDQUFDO0NBQ0Y7QUFqQkQsZ0RBaUJDIn0=