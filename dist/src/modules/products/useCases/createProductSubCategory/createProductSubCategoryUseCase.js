"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductSubCategoryUseCase = void 0;
const UniqueEntityID_1 = require("../../../../core/domain/UniqueEntityID");
const AppError_1 = require("../../../../core/logic/AppError");
const Result_1 = require("../../../../core/logic/Result");
const productSubCategory_1 = require("../../domain/productSubCategory");
const createProductSubCategoryError_1 = require("./createProductSubCategoryError");
class CreateProductSubCategoryUseCase {
    constructor(productSubCategoryRepo) {
        this.productSubCategoryRepo = productSubCategoryRepo;
    }
    async execute(req) {
        const productSubCategoryOrError = productSubCategory_1.ProductSubCategory.create({
            categoryId: new UniqueEntityID_1.UniqueEntityID(req.category_id),
            name: req.name,
            slug: req.slug,
            isActive: true
        });
        if (productSubCategoryOrError.isFailure) {
            return (0, Result_1.left)(Result_1.Result.fail(productSubCategoryOrError.error));
        }
        const prodSubCat = productSubCategoryOrError.getValue();
        const prodSubCatAlreadyExists = await this.productSubCategoryRepo.exists(prodSubCat.name);
        if (prodSubCatAlreadyExists) {
            return (0, Result_1.left)(new createProductSubCategoryError_1.CreateProductSubCategoryErrors.SubCategoryAlreadyExists(prodSubCat.name));
        }
        try {
            await this.productSubCategoryRepo.save(prodSubCat);
            console.log(`Product Sub Category Created`);
        }
        catch (err) {
            return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
        }
        return (0, Result_1.right)(Result_1.Result.ok(prodSubCat));
    }
}
exports.CreateProductSubCategoryUseCase = CreateProductSubCategoryUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJvZHVjdFN1YkNhdGVnb3J5VXNlQ2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3VzZUNhc2VzL2NyZWF0ZVByb2R1Y3RTdWJDYXRlZ29yeS9jcmVhdGVQcm9kdWN0U3ViQ2F0ZWdvcnlVc2VDYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJFQUF1RTtBQUV2RSw4REFBaUU7QUFDakUsMERBQTJFO0FBRTNFLHdFQUFvRTtBQUlwRSxtRkFBZ0Y7QUFJaEYsTUFBYSwrQkFBK0I7SUFHMUMsWUFBWSxzQkFBK0M7UUFDekQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLHNCQUFzQixDQUFBO0lBQ3RELENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQWdDO1FBQzVDLE1BQU0seUJBQXlCLEdBQUcsdUNBQWtCLENBQUMsTUFBTSxDQUFDO1lBQzFELFVBQVUsRUFBRSxJQUFJLCtCQUFjLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztZQUMvQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7WUFDZCxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7WUFDZCxRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQTtRQUVGLElBQUkseUJBQXlCLENBQUMsU0FBUyxFQUFFO1lBQ3ZDLE9BQU8sSUFBQSxhQUFJLEVBQUMsZUFBTSxDQUFDLElBQUksQ0FBTyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBYSxDQUFBO1NBQzVFO1FBRUQsTUFBTSxVQUFVLEdBQXVCLHlCQUF5QixDQUFDLFFBQVEsRUFBRSxDQUFBO1FBRTNFLE1BQU0sdUJBQXVCLEdBQUcsTUFBTSxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUV6RixJQUFJLHVCQUF1QixFQUFFO1lBQzNCLE9BQU8sSUFBQSxhQUFJLEVBQUMsSUFBSSw4REFBOEIsQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQWEsQ0FBQTtTQUN0RztRQUVELElBQUk7WUFDRixNQUFNLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFBO1NBQzVDO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLElBQUEsYUFBSSxFQUFDLElBQUksMEJBQWUsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQWEsQ0FBQTtTQUNsRTtRQUVELE9BQU8sSUFBQSxjQUFLLEVBQUMsZUFBTSxDQUFDLEVBQUUsQ0FBcUIsVUFBVSxDQUFDLENBQWEsQ0FBQTtJQUNyRSxDQUFDO0NBQ0Y7QUFwQ0QsMEVBb0NDIn0=