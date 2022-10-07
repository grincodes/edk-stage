"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductCategoryUseCase = void 0;
const UniqueEntityID_1 = require("../../../../core/domain/UniqueEntityID");
const AppError_1 = require("../../../../core/logic/AppError");
const Result_1 = require("../../../../core/logic/Result");
const productCategory_1 = require("../../domain/productCategory");
const slug_1 = require("../../domain/slug");
const createProductCategoryErrors_1 = require("./createProductCategoryErrors");
class CreateProductCategoryUseCase {
    constructor(productCategoryRepo) {
        this.productCategoryRepo = productCategoryRepo;
    }
    async execute(req) {
        const productCategoryOrError = productCategory_1.ProductCategory.create({
            product_type_id: new UniqueEntityID_1.UniqueEntityID(req.product_type_id),
            name: req.name,
            slug: slug_1.Slug.create(req.slug).getValue().value,
            isActive: true
        });
        if (productCategoryOrError.isFailure) {
            return (0, Result_1.left)(Result_1.Result.fail(productCategoryOrError.error));
        }
        const prodCat = productCategoryOrError.getValue();
        const prodCatAlreadyExists = await this.productCategoryRepo.exists(prodCat.name);
        if (prodCatAlreadyExists) {
            return (0, Result_1.left)(new createProductCategoryErrors_1.CreateProductCategoryErrors.CategoryAlreadyExists(prodCat.name));
        }
        try {
            await this.productCategoryRepo.save(prodCat);
            console.log(`Product Category Created`);
        }
        catch (err) {
            return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
        }
        return (0, Result_1.right)(Result_1.Result.ok(prodCat));
    }
}
exports.CreateProductCategoryUseCase = CreateProductCategoryUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJvZHVjdENhdGVnb3J5VXNlQ2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3VzZUNhc2VzL2NyZWF0ZVByb2R1Y3RDYXRlZ29yeS9jcmVhdGVQcm9kdWN0Q2F0ZWdvcnlVc2VDYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJFQUF3RTtBQUV4RSw4REFBa0U7QUFDbEUsMERBQTRFO0FBQzVFLGtFQUErRDtBQUMvRCw0Q0FBeUM7QUFHekMsK0VBQTRFO0FBSTVFLE1BQWEsNEJBQTRCO0lBR3ZDLFlBQVksbUJBQXlDO1FBQ25ELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztJQUNqRCxDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUE2QjtRQUN6QyxNQUFNLHNCQUFzQixHQUFHLGlDQUFlLENBQUMsTUFBTSxDQUFDO1lBQ3BELGVBQWUsRUFBRSxJQUFJLCtCQUFjLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQztZQUN4RCxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUk7WUFDZCxJQUFJLEVBQUUsV0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSztZQUM1QyxRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztRQUVILElBQUksc0JBQXNCLENBQUMsU0FBUyxFQUFFO1lBQ3BDLE9BQU8sSUFBQSxhQUFJLEVBQUMsZUFBTSxDQUFDLElBQUksQ0FBTyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBYSxDQUFDO1NBQzFFO1FBRUQsTUFBTSxPQUFPLEdBQW9CLHNCQUFzQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRW5FLE1BQU0sb0JBQW9CLEdBQUcsTUFBTSxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVqRixJQUFJLG9CQUFvQixFQUFFO1lBQ3hCLE9BQU8sSUFBQSxhQUFJLEVBQUMsSUFBSSx5REFBMkIsQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQWEsQ0FBQztTQUM5RjtRQUVELElBQUk7WUFDRixNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1NBQ3pDO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLElBQUEsYUFBSSxFQUFDLElBQUksMEJBQWUsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQWEsQ0FBQztTQUNuRTtRQUVELE9BQU8sSUFBQSxjQUFLLEVBQUMsZUFBTSxDQUFDLEVBQUUsQ0FBa0IsT0FBTyxDQUFDLENBQWEsQ0FBQztJQUNoRSxDQUFDO0NBQ0Y7QUFwQ0Qsb0VBb0NDIn0=