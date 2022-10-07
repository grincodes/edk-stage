"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductTypeUseCase = void 0;
const AppError_1 = require("../../../../core/logic/AppError");
const Result_1 = require("../../../../core/logic/Result");
const productType_1 = require("../../domain/productType");
const createProductTypeErrors_1 = require("./createProductTypeErrors");
class CreateProductTypeUseCase {
    constructor(productTypeRepo) {
        this.productTypeRepo = productTypeRepo;
    }
    async execute(req) {
        const productTypeOrError = productType_1.ProductType.create({
            name: req.name
        });
        if (productTypeOrError.isFailure) {
            return (0, Result_1.left)(Result_1.Result.fail(productTypeOrError.error));
        }
        const prodType = productTypeOrError.getValue();
        const prodTypeAlreadyExists = await this.productTypeRepo.exists(prodType.name);
        if (prodTypeAlreadyExists) {
            return (0, Result_1.left)(new createProductTypeErrors_1.CreateProductTypeErrors.ProductTypeAlreadyExists(prodType.name));
        }
        try {
            await this.productTypeRepo.save(prodType);
            console.log(`Product Type Created`);
        }
        catch (err) {
            return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
        }
        return (0, Result_1.right)(Result_1.Result.ok(prodType));
    }
}
exports.CreateProductTypeUseCase = CreateProductTypeUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJvZHVjdFR5cGVVc2VDYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcHJvZHVjdHMvdXNlQ2FzZXMvY3JlYXRlUHJvZHVjdFR5cGUvY3JlYXRlUHJvZHVjdFR5cGVVc2VDYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDhEQUFpRTtBQUNqRSwwREFBMkU7QUFDM0UsMERBQXNEO0FBR3RELHVFQUFtRTtBQUluRSxNQUFhLHdCQUF3QjtJQUduQyxZQUFZLGVBQWlDO1FBQzNDLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFBO0lBQ3hDLENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQXlCO1FBQ3JDLE1BQU0sa0JBQWtCLEdBQUcseUJBQVcsQ0FBQyxNQUFNLENBQUM7WUFDNUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO1NBQ2YsQ0FBQyxDQUFBO1FBRUYsSUFBSSxrQkFBa0IsQ0FBQyxTQUFTLEVBQUU7WUFDaEMsT0FBTyxJQUFBLGFBQUksRUFBQyxlQUFNLENBQUMsSUFBSSxDQUFPLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFhLENBQUE7U0FDckU7UUFFRCxNQUFNLFFBQVEsR0FBZ0Isa0JBQWtCLENBQUMsUUFBUSxFQUFFLENBQUE7UUFFM0QsTUFBTSxxQkFBcUIsR0FBRyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUU5RSxJQUFJLHFCQUFxQixFQUFFO1lBQ3pCLE9BQU8sSUFBQSxhQUFJLEVBQUMsSUFBSSxpREFBdUIsQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQWEsQ0FBQTtTQUM3RjtRQUVELElBQUk7WUFDRixNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtTQUNwQztRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxJQUFBLGFBQUksRUFBQyxJQUFJLDBCQUFlLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFhLENBQUE7U0FDbEU7UUFFRCxPQUFPLElBQUEsY0FBSyxFQUFDLGVBQU0sQ0FBQyxFQUFFLENBQWMsUUFBUSxDQUFDLENBQWEsQ0FBQTtJQUM1RCxDQUFDO0NBQ0Y7QUFqQ0QsNERBaUNDIn0=