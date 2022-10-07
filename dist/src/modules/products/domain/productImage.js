"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductImage = void 0;
const Entity_1 = require("../../../core/domain/Entity");
const Guard_1 = require("../../../core/logic/Guard");
const Result_1 = require("../../../core/logic/Result");
class ProductImage extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    get imageUrl() {
        return this.props.imageUrl;
    }
    get thumbnailUrl() {
        return this.props.thumbnailUrl;
    }
    get altText() {
        return this.props.altText;
    }
    get variantName() {
        return this.props.variantName;
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(props, id) {
        const guardResult = Guard_1.Guard.againstNullOrUndefined(props.altText, 'image alt_text');
        if (!guardResult.succeeded) {
            return Result_1.Result.fail(guardResult.message);
        }
        const guardResultAtLeast = Guard_1.Guard.againstAtLeast(3, props.altText, 'image alt_text');
        if (!guardResultAtLeast.succeeded) {
            return Result_1.Result.fail(guardResultAtLeast.message);
        }
        const image = new ProductImage(props, id);
        return Result_1.Result.ok(image);
    }
}
exports.ProductImage = ProductImage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdEltYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvZG9tYWluL3Byb2R1Y3RJbWFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3REFBcUQ7QUFFckQscURBQWtEO0FBQ2xELHVEQUFvRDtBQVVwRCxNQUFhLFlBQWEsU0FBUSxlQUF5QjtJQUN6RCxJQUFJLEVBQUU7UUFDSixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7SUFDakMsQ0FBQztJQUNELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDNUIsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7SUFDaEMsQ0FBQztJQUVELFlBQW9CLEtBQXdCLEVBQUUsRUFBbUI7UUFDL0QsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBRU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUF3QixFQUFFLEVBQW1CO1FBQ2hFLE1BQU0sV0FBVyxHQUFHLGFBQUssQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7WUFDMUIsT0FBTyxlQUFNLENBQUMsSUFBSSxDQUFlLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2RDtRQUVELE1BQU0sa0JBQWtCLEdBQUcsYUFBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBRXBGLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLEVBQUU7WUFDakMsT0FBTyxlQUFNLENBQUMsSUFBSSxDQUFlLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlEO1FBQ0QsTUFBTSxLQUFLLEdBQUcsSUFBSSxZQUFZLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRTFDLE9BQU8sZUFBTSxDQUFDLEVBQUUsQ0FBZSxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0NBQ0Y7QUF2Q0Qsb0NBdUNDIn0=