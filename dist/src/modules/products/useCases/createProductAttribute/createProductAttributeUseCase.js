"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductAttributeUseCase = void 0;
const UniqueEntityID_1 = require("../../../../core/domain/UniqueEntityID");
const AppError_1 = require("../../../../core/logic/AppError");
const Result_1 = require("../../../../core/logic/Result");
const productAttribute_1 = require("../../domain/productAttribute");
const createProductAttributeErrors_1 = require("./createProductAttributeErrors");
class CreateProductAttributeUseCase {
    constructor(productAttributeRepo) {
        this.productAttributeRepo = productAttributeRepo;
    }
    async execute(req) {
        if (!UniqueEntityID_1.UniqueEntityID.isValidId(req.product_category_id)) {
            return (0, Result_1.left)(Result_1.Result.fail('invalid category id'));
        }
        const productAttributeOrError = productAttribute_1.ProductAttribute.create({
            name: req.name,
            product_category_id: new UniqueEntityID_1.UniqueEntityID(req.product_category_id),
            description: req.description
        });
        if (productAttributeOrError.isFailure) {
            return (0, Result_1.left)(Result_1.Result.fail(productAttributeOrError.error));
        }
        const prodAttribute = productAttributeOrError.getValue();
        const prodAttributeAlreadyExists = await this.productAttributeRepo.exists(prodAttribute.name);
        if (prodAttributeAlreadyExists) {
            return (0, Result_1.left)(new createProductAttributeErrors_1.CreateProductAttributeErrors.ProductAttributeAlreadyExists(prodAttribute.name));
        }
        try {
            await this.productAttributeRepo.save(prodAttribute);
            console.log(`Product Attribute Created`);
        }
        catch (err) {
            return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
        }
        return (0, Result_1.right)(Result_1.Result.ok(prodAttribute));
    }
}
exports.CreateProductAttributeUseCase = CreateProductAttributeUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJvZHVjdEF0dHJpYnV0ZVVzZUNhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9kdWN0cy91c2VDYXNlcy9jcmVhdGVQcm9kdWN0QXR0cmlidXRlL2NyZWF0ZVByb2R1Y3RBdHRyaWJ1dGVVc2VDYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJFQUF3RTtBQUV4RSw4REFBa0U7QUFDbEUsMERBQTRFO0FBQzVFLG9FQUFpRTtBQUdqRSxpRkFBOEU7QUFJOUUsTUFBYSw2QkFBNkI7SUFHeEMsWUFBWSxvQkFBMkM7UUFDckQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO0lBQ25ELENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQThCO1FBQzFDLElBQUksQ0FBQywrQkFBYyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsRUFBRTtZQUN0RCxPQUFPLElBQUEsYUFBSSxFQUFDLGVBQU0sQ0FBQyxJQUFJLENBQU8scUJBQXFCLENBQUMsQ0FBYSxDQUFDO1NBQ25FO1FBRUQsTUFBTSx1QkFBdUIsR0FBRyxtQ0FBZ0IsQ0FBQyxNQUFNLENBQUM7WUFDdEQsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO1lBQ2QsbUJBQW1CLEVBQUUsSUFBSSwrQkFBYyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztZQUNoRSxXQUFXLEVBQUUsR0FBRyxDQUFDLFdBQVc7U0FDN0IsQ0FBQyxDQUFDO1FBRUgsSUFBSSx1QkFBdUIsQ0FBQyxTQUFTLEVBQUU7WUFDckMsT0FBTyxJQUFBLGFBQUksRUFBQyxlQUFNLENBQUMsSUFBSSxDQUFPLHVCQUF1QixDQUFDLEtBQUssQ0FBQyxDQUFhLENBQUM7U0FDM0U7UUFFRCxNQUFNLGFBQWEsR0FBcUIsdUJBQXVCLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFM0UsTUFBTSwwQkFBMEIsR0FBRyxNQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTlGLElBQUksMEJBQTBCLEVBQUU7WUFDOUIsT0FBTyxJQUFBLGFBQUksRUFBQyxJQUFJLDJEQUE0QixDQUFDLDZCQUE2QixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBYSxDQUFDO1NBQzdHO1FBRUQsSUFBSTtZQUNGLE1BQU0sSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDMUM7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sSUFBQSxhQUFJLEVBQUMsSUFBSSwwQkFBZSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBYSxDQUFDO1NBQ25FO1FBRUQsT0FBTyxJQUFBLGNBQUssRUFBQyxlQUFNLENBQUMsRUFBRSxDQUFtQixhQUFhLENBQUMsQ0FBYSxDQUFDO0lBQ3ZFLENBQUM7Q0FDRjtBQXZDRCxzRUF1Q0MifQ==