"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product360Video = void 0;
const Entity_1 = require("../../../core/domain/Entity");
const Result_1 = require("../../../core/logic/Result");
class Product360Video extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    get url() {
        return this.props.url;
    }
    get productId() {
        return this.props.productId;
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const prod360Video = new Product360Video(props, id);
        return Result_1.Result.ok(prod360Video);
    }
}
exports.Product360Video = Product360Video;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdDM2MFZpZGVvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvZG9tYWluL3Byb2R1Y3QzNjBWaWRlby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx3REFBb0Q7QUFHcEQsdURBQW1EO0FBUW5ELE1BQWEsZUFBZ0IsU0FBUSxlQUE0QjtJQUMvRCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUE7SUFDakIsQ0FBQztJQUVELElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUE7SUFDdkIsQ0FBQztJQUVELElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUE7SUFDN0IsQ0FBQztJQUNELFlBQW9CLEtBQTJCLEVBQUUsRUFBbUI7UUFDbEUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUNsQixDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUEyQixFQUFFLEVBQW1CO1FBQ25FLE1BQU0sWUFBWSxHQUFHLElBQUksZUFBZSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUVuRCxPQUFPLGVBQU0sQ0FBQyxFQUFFLENBQWtCLFlBQVksQ0FBQyxDQUFBO0lBQ2pELENBQUM7Q0FDRjtBQXJCRCwwQ0FxQkMifQ==