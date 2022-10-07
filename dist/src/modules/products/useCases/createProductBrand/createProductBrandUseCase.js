"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductBrandUseCase = void 0;
const AppError_1 = require("../../../../core/logic/AppError");
const Result_1 = require("../../../../core/logic/Result");
const productBrand_1 = require("../../domain/productBrand");
const createProductBrandErrors_1 = require("./createProductBrandErrors");
class CreateProductBrandUseCase {
    constructor(productBrandRepo) {
        this.productBrandRepo = productBrandRepo;
    }
    async execute(req) {
        const productBrandOrError = productBrand_1.ProductBrand.create({
            name: req.name
        });
        if (productBrandOrError.isFailure) {
            return (0, Result_1.left)(Result_1.Result.fail(productBrandOrError.error));
        }
        const prodBrand = productBrandOrError.getValue();
        const prodBrandAlreadyExists = await this.productBrandRepo.exists(prodBrand.name);
        if (prodBrandAlreadyExists) {
            return (0, Result_1.left)(new createProductBrandErrors_1.CreateProductBrandErrors.BrandAlreadyExists(prodBrand.name));
        }
        try {
            await this.productBrandRepo.save(prodBrand);
            console.log(`Product Brand Created`);
        }
        catch (err) {
            return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
        }
        return (0, Result_1.right)(Result_1.Result.ok(prodBrand));
    }
}
exports.CreateProductBrandUseCase = CreateProductBrandUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJvZHVjdEJyYW5kVXNlQ2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3VzZUNhc2VzL2NyZWF0ZVByb2R1Y3RCcmFuZC9jcmVhdGVQcm9kdWN0QnJhbmRVc2VDYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDhEQUFpRTtBQUNqRSwwREFBMkU7QUFDM0UsNERBQXdEO0FBR3hELHlFQUFxRTtBQUlyRSxNQUFhLHlCQUF5QjtJQUdwQyxZQUFZLGdCQUFtQztRQUM3QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUE7SUFDMUMsQ0FBQztJQUVELEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBMEI7UUFDdEMsTUFBTSxtQkFBbUIsR0FBRywyQkFBWSxDQUFDLE1BQU0sQ0FBQztZQUM5QyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7U0FDZixDQUFDLENBQUE7UUFFRixJQUFJLG1CQUFtQixDQUFDLFNBQVMsRUFBRTtZQUNqQyxPQUFPLElBQUEsYUFBSSxFQUFDLGVBQU0sQ0FBQyxJQUFJLENBQU8sbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQWEsQ0FBQTtTQUN0RTtRQUVELE1BQU0sU0FBUyxHQUFpQixtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUU5RCxNQUFNLHNCQUFzQixHQUFHLE1BQU0sSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFakYsSUFBSSxzQkFBc0IsRUFBRTtZQUMxQixPQUFPLElBQUEsYUFBSSxFQUFDLElBQUksbURBQXdCLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFhLENBQUE7U0FDekY7UUFFRCxJQUFJO1lBQ0YsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtTQUNyQztRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxJQUFBLGFBQUksRUFBQyxJQUFJLDBCQUFlLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFhLENBQUE7U0FDbEU7UUFFRCxPQUFPLElBQUEsY0FBSyxFQUFDLGVBQU0sQ0FBQyxFQUFFLENBQWUsU0FBUyxDQUFDLENBQWEsQ0FBQTtJQUM5RCxDQUFDO0NBQ0Y7QUFqQ0QsOERBaUNDIn0=