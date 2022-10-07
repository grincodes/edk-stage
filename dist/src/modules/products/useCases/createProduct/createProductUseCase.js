"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductUseCase = void 0;
const UniqueEntityID_1 = require("../../../../core/domain/UniqueEntityID");
const AppError_1 = require("../../../../core/logic/AppError");
const Result_1 = require("../../../../core/logic/Result");
const Url_1 = require("../../../../shared/domain_types/Url");
const TextUtils_1 = require("../../../../utils/TextUtils");
const shopId_1 = require("../../../shop/domain/shopId");
const product_1 = require("../../domain/product");
const product360Video_1 = require("../../domain/product360Video");
const productCategoryId_1 = require("../../domain/productCategoryId");
const slug_1 = require("../../domain/slug");
const productService_1 = require("../../services/productService");
const createProductErrors_1 = require("./createProductErrors");
class CreateProductUseCase {
    constructor(productRepo, productInventoryRepo, productImageRepo, product360VideoRepo, tagProductAttributeValueRepo, productStock) {
        this.productRepo = productRepo;
        this.productInventoryRepo = productInventoryRepo;
        this.productImageRepo = productImageRepo;
        this.product360VideoRepo = product360VideoRepo;
        this.tagProductAttributeValueRepo = tagProductAttributeValueRepo;
        this.productStock = productStock;
    }
    async execute(req) {
        const productSlug = slug_1.Slug.create(req.product_name);
        const shopIdOrError = UniqueEntityID_1.UniqueEntityID.isValidId(req.shop_id) ? shopId_1.ShopId.create(new UniqueEntityID_1.UniqueEntityID(req.shop_id)) : Result_1.Result.fail("Invalid shop id");
        const productCategoryIdOrError = UniqueEntityID_1.UniqueEntityID.isValidId(req.product_category_id)
            ? productCategoryId_1.ProductCategoryId.create(new UniqueEntityID_1.UniqueEntityID(req.product_category_id))
            : Result_1.Result.fail("Invalid category id");
        const productWebId = TextUtils_1.TextUtils.createRandomNumericString(7);
        const combinedPropsResult = Result_1.Result.combine([shopIdOrError, productCategoryIdOrError]);
        if (combinedPropsResult.isFailure) {
            return (0, Result_1.left)(new createProductErrors_1.CreateProductErrors.GuardError(combinedPropsResult.error));
        }
        const productOrError = product_1.Product.create({
            productName: req.product_name,
            productDescription: req.product_description,
            productCategoryId: productCategoryIdOrError.getValue(),
            shopId: shopIdOrError.getValue(),
            productWebId: Number(productWebId),
            productSlug: productSlug.getValue(),
            isActive: true,
        });
        if (productOrError.isFailure) {
            return (0, Result_1.left)(Result_1.Result.fail(productOrError.error));
        }
        const product = productOrError.getValue();
        const v360UrlOrError = Url_1.Url.create(req.product_360_video_url);
        if (v360UrlOrError.isFailure) {
            return (0, Result_1.left)(new createProductErrors_1.CreateProductErrors.GuardError(v360UrlOrError.error.toString()));
        }
        const product360VideoOrError = product360Video_1.Product360Video.create({
            productId: product.id,
            url: v360UrlOrError.getValue(),
        });
        if (product360VideoOrError.isFailure) {
            return (0, Result_1.left)(new createProductErrors_1.CreateProductErrors.GuardError(product360VideoOrError.error.toString()));
        }
        const product360Video = product360VideoOrError.getValue();
        let variantsResponse;
        if (req.variants.length) {
            // validate all variants
            const result = productService_1.ProductService.validateAllVariants(req.variants, product.productId);
            if (result.isLeft()) {
                return (0, Result_1.left)(new createProductErrors_1.CreateProductErrors.GuardError(result.value.error));
            }
            variantsResponse = result.value;
            const allProdAttrResults = productService_1.ProductService.getAllProductAttrValuesResultFromVaraints(variantsResponse);
            const allProdImageResults = productService_1.ProductService.getAllProductImagesResultFromVaraints(variantsResponse);
            const combinedAttrPropsResult = Result_1.Result.combine([...allProdAttrResults]);
            const combinedProdImagesPropsResult = Result_1.Result.combine([...allProdImageResults]);
            if (combinedAttrPropsResult.isFailure) {
                return (0, Result_1.left)(Result_1.Result.fail(combinedAttrPropsResult.error));
            }
            if (combinedProdImagesPropsResult.isFailure) {
                return (0, Result_1.left)(Result_1.Result.fail(combinedProdImagesPropsResult.error));
            }
            const productAlreadyExists = await this.productRepo.existsInShop(product.productName, product.shopId.id.toString());
            if (productAlreadyExists) {
                return (0, Result_1.left)(new createProductErrors_1.CreateProductErrors.ProductAlreadyExists(product.productName));
            }
            const allProdInventory = productService_1.ProductService.getAllProductInventoryFromVariants(variantsResponse);
            const allTagProdAttrs = productService_1.ProductService.getAllTagProductAttrFromResults(allProdAttrResults);
            const allProdImages = productService_1.ProductService.getAllProductImagesFromResults(allProdImageResults);
            const allProductStockRes = productService_1.ProductService.createAllProductInventoryStock(allProdInventory);
            const allProductStock = productService_1.ProductService.getAllProductInventoryStock(allProductStockRes);
            const transaction = await this.productRepo.createTransaction();
            try {
                //save product data
                await this.productRepo.saveTransaction(product, transaction);
                console.log("product created");
                //save product 360 video
                await this.product360VideoRepo.saveTransaction(product360Video, transaction);
                console.log("product 360 video created");
                //save bulk variants
                await this.productInventoryRepo.saveBulkTransaction(allProdInventory, transaction);
                console.log("product inventory saved");
                //save bulk product stock
                this.productStock.saveBulkTranscation(allProductStock, transaction);
                console.log("product stocks saved");
                //save bulk tag attr product attributes
                await this.tagProductAttributeValueRepo.saveBulkTransaction(allTagProdAttrs, transaction);
                console.log("tag product attr");
                //save bulk product images
                await this.productImageRepo.saveBulkTranscation(allProdImages, transaction);
                console.log("product images");
                // commit transaction
                await transaction.commit();
            }
            catch (err) {
                console.log("rollback");
                await transaction.rollback();
                return (0, Result_1.left)(new AppError_1.GenericAppError.UnexpectedError(err));
            }
            return (0, Result_1.right)(Result_1.Result.ok(product));
        }
        else {
            return (0, Result_1.left)(new createProductErrors_1.CreateProductErrors.ProductMustHaveVariants());
        }
    }
}
exports.CreateProductUseCase = CreateProductUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlUHJvZHVjdFVzZUNhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9kdWN0cy91c2VDYXNlcy9jcmVhdGVQcm9kdWN0L2NyZWF0ZVByb2R1Y3RVc2VDYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJFQUF1RTtBQUV2RSw4REFBaUU7QUFDakUsMERBQTJFO0FBQzNFLDZEQUF5RDtBQUN6RCwyREFBdUQ7QUFDdkQsd0RBQW9EO0FBQ3BELGtEQUE4QztBQUM5QyxrRUFBOEQ7QUFDOUQsc0VBQWtFO0FBQ2xFLDRDQUF3QztBQU94QyxrRUFBZ0Y7QUFHaEYsK0RBQTJEO0FBWTNELE1BQWEsb0JBQW9CO0lBUS9CLFlBQ0UsV0FBeUIsRUFDekIsb0JBQTJDLEVBQzNDLGdCQUFtQyxFQUNuQyxtQkFBeUMsRUFDekMsNEJBQTJELEVBQzNELFlBQStCO1FBRS9CLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFBO1FBQzlCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQTtRQUNoRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUE7UUFDeEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLG1CQUFtQixDQUFBO1FBQzlDLElBQUksQ0FBQyw0QkFBNEIsR0FBRyw0QkFBNEIsQ0FBQTtRQUNoRSxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQTtJQUNsQyxDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFxQjtRQUNqQyxNQUFNLFdBQVcsR0FBRyxXQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUNqRCxNQUFNLGFBQWEsR0FBRywrQkFBYyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSwrQkFBYyxDQUFDLEdBQUcs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