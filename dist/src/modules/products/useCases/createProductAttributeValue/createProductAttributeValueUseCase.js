"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductAttributeValueUseCase = void 0;
const UniqueEntityID_1 = require("../../../../core/domain/UniqueEntityID");
const AppError_1 = require("../../../../core/logic/AppError");
const Result_1 = require("../../../../core/logic/Result");
const ProductAttributeId_1 = require("../../domain/ProductAttributeId");
const productAttributeValue_1 = require("../../domain/productAttributeValue");
const createProductAttributeValueErrors_1 = require("./createProductAttributeValueErrors");
class CreateProductAttributeValueUseCase {
    constructor(productAttributeValueRepo) {
        this.productAttributeValueRepo = productAttributeValueRepo;
    }
    async execute(req) {
        const productAttributeIdOrError = ProductAttributeId_1.ProductAttributeId.create(new UniqueEntityID_1.UniqueEntityID(req.attribute_id));
        if (productAttributeIdOrError.isFailure) {
            return (0, Result_1.left)(Result_1.Result.fail(productAttributeIdOrError.error));
        }
        const productAttributValueOrError = productAttributeValue_1.ProductAttributeValue.create({
            productAttributeId: productAttributeIdOrError.getValue(),
            attributeValue: req.attribute_value,
            attributeSequence: 1,
        });
        if (productAttributValueOrError.isFailure) {
            return (0, Result_1.left)(Result_1.Result.fail(productAttributValueOrError.error));
        }
        const prodAttributeValue = productAttributValueOrError.getValue();
        const prodAttributeAlreadyExists = await this.productAttributeValueRepo.exists(prodAttributeValue.attributeValue);
        if (prodAttributeAlreadyExists) {
            return (0, Result_1.left)(new createProductAttributeValueErrors_1.CreateProductAttributeValueErrors.ProductAttributeValueAlreadyExists(prodAttributeValue.attributeValue));
        }
        try {
            await this.productAttributeValueRepo.save(prodAttributeValue);
            console.log(`Product Attribute Value Created`);
        }
        catch (err) {
            return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
        }
        return (0, Result_1.right)(Result_1.Result.ok(prodAttributeValue));
    }
}
exports.CreateProductAttributeValueUseCase = CreateProductAttributeValueUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJvZHVjdEF0dHJpYnV0ZVZhbHVlVXNlQ2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3VzZUNhc2VzL2NyZWF0ZVByb2R1Y3RBdHRyaWJ1dGVWYWx1ZS9jcmVhdGVQcm9kdWN0QXR0cmlidXRlVmFsdWVVc2VDYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJFQUF1RTtBQUV2RSw4REFBaUU7QUFDakUsMERBQTJFO0FBQzNFLHdFQUFvRTtBQUNwRSw4RUFBMEU7QUFHMUUsMkZBQXVGO0FBSXZGLE1BQWEsa0NBQWtDO0lBRzdDLFlBQVkseUJBQXFEO1FBQy9ELElBQUksQ0FBQyx5QkFBeUIsR0FBRyx5QkFBeUIsQ0FBQTtJQUM1RCxDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFtQztRQUMvQyxNQUFNLHlCQUF5QixHQUFHLHVDQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLCtCQUFjLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7UUFFakcsSUFBSSx5QkFBeUIsQ0FBQyxTQUFTLEVBQUU7WUFDdkMsT0FBTyxJQUFBLGFBQUksRUFBQyxlQUFNLENBQUMsSUFBSSxDQUFPLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFhLENBQUE7U0FDNUU7UUFFRCxNQUFNLDJCQUEyQixHQUFHLDZDQUFxQixDQUFDLE1BQU0sQ0FBQztZQUMvRCxrQkFBa0IsRUFBRSx5QkFBeUIsQ0FBQyxRQUFRLEVBQUU7WUFDeEQsY0FBYyxFQUFFLEdBQUcsQ0FBQyxlQUFlO1lBQ25DLGlCQUFpQixFQUFFLENBQUM7U0FDckIsQ0FBQyxDQUFBO1FBRUYsSUFBSSwyQkFBMkIsQ0FBQyxTQUFTLEVBQUU7WUFDekMsT0FBTyxJQUFBLGFBQUksRUFBQyxlQUFNLENBQUMsSUFBSSxDQUFPLDJCQUEyQixDQUFDLEtBQUssQ0FBQyxDQUFhLENBQUE7U0FDOUU7UUFFRCxNQUFNLGtCQUFrQixHQUEwQiwyQkFBMkIsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUV4RixNQUFNLDBCQUEwQixHQUFHLE1BQU0sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUVqSCxJQUFJLDBCQUEwQixFQUFFO1lBQzlCLE9BQU8sSUFBQSxhQUFJLEVBQUMsSUFBSSxxRUFBaUMsQ0FBQyxrQ0FBa0MsQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBYSxDQUFBO1NBQ3JJO1FBRUQsSUFBSTtZQUNGLE1BQU0sSUFBSSxDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1lBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQTtTQUMvQztRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxJQUFBLGFBQUksRUFBQyxJQUFJLDBCQUFlLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFhLENBQUE7U0FDbEU7UUFFRCxPQUFPLElBQUEsY0FBSyxFQUFDLGVBQU0sQ0FBQyxFQUFFLENBQXdCLGtCQUFrQixDQUFDLENBQWEsQ0FBQTtJQUNoRixDQUFDO0NBQ0Y7QUF6Q0QsZ0ZBeUNDIn0=