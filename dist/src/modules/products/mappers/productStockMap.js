"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductStockMap = void 0;
const Mapper_1 = require("../../../core/infra/Mapper");
class ProductStockMap extends Mapper_1.Mapper {
    static toPersistence(productStock) {
        return {
            product_inventory_id: productStock.productInventory.id.toString(),
            units: productStock.units,
        };
    }
}
exports.ProductStockMap = ProductStockMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdFN0b2NrTWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvbWFwcGVycy9wcm9kdWN0U3RvY2tNYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdURBQW1EO0FBR25ELE1BQWEsZUFBZ0IsU0FBUSxlQUFvQjtJQUNoRCxNQUFNLENBQUMsYUFBYSxDQUFDLFlBQTBCO1FBQ3BELE9BQU87WUFDTCxvQkFBb0IsRUFBRSxZQUFZLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUNqRSxLQUFLLEVBQUUsWUFBWSxDQUFDLEtBQUs7U0FDMUIsQ0FBQTtJQUNILENBQUM7Q0FDRjtBQVBELDBDQU9DIn0=