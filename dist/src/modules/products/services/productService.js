"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const UniqueEntityID_1 = require("../../../core/domain/UniqueEntityID");
const Result_1 = require("../../../core/logic/Result");
const Url_1 = require("../../../shared/domain_types/Url");
const Price_1 = require("../domain/Price");
const productId_1 = require("../domain/productId");
const productImage_1 = require("../domain/productImage");
const productInventory_1 = require("../domain/productInventory");
const productStock_1 = require("../domain/productStock");
const sku_1 = require("../domain/sku");
const tagProductAttributeValue_1 = require("../domain/tagProductAttributeValue");
const variantName_1 = require("../domain/variantName");
const Weight_1 = require("../domain/Weight");
const createProductImageErrors_1 = require("../useCases/createProductImage/createProductImageErrors");
class ProductService {
    static validateAllVariants(variants, productId) {
        let _productAttributes = [];
        let _productImages = [];
        const variantsResponse = [];
        const _hasVariants = true;
        for (let i = 0; i < variants.length; i++) {
            variants[i].product_id = productId.id.toString();
            const _allProdInventory = [];
            if (variants[i].sizes.length) {
                const _allResProdInventory = ProductService.createAllProductInventory(variants[i]);
                const combinedPropsResult = Result_1.Result.combine([..._allResProdInventory]);
                if (combinedPropsResult.isFailure) {
                    return (0, Result_1.left)(combinedPropsResult);
                }
                //loop through each allProdInventory
                _allResProdInventory.forEach((_prodInventory) => {
                    if (_prodInventory.isFailure) {
                        console.log("invalid attr id");
                        return (0, Result_1.left)(_prodInventory);
                    }
                    const _productInventory = _prodInventory.getValue();
                    _allProdInventory.push(_productInventory);
                });
                _productAttributes = ProductService.createTagProductAttributeValues(_allProdInventory);
                if (variants[i].images.length) {
                    const [prodInventory] = _allProdInventory;
                    // validate images and map to domain for persistence
                    _productImages = ProductService.createInventoryImages(variants[i].images, prodInventory.variantName.value);
                }
                variantsResponse.push({
                    productInventories: _allProdInventory,
                    productAttributes: _productAttributes,
                    productImages: _productImages,
                    hasVaraints: _hasVariants,
                });
            }
            else {
                // todo Implementation is left to the business if all product must have a varaint
            }
        }
        return (0, Result_1.right)(variantsResponse);
    }
    static createAllProductInventory(variant) {
        const variantNameOrError = variantName_1.VariantName.create(variant.variant_name);
        const productInventories = variant.sizes.map((vsize) => {
            const skuOrError = sku_1.Sku.create(variant.variant_name);
            const productIdOrError = UniqueEntityID_1.UniqueEntityID.isValidId(variant.product_id) ? productId_1.ProductId.create(new UniqueEntityID_1.UniqueEntityID(variant.product_id)) : Result_1.Result.fail("Invalid product id");
            const prodAttributeValueIdOrError = UniqueEntityID_1.UniqueEntityID.isValidId(vsize.attr_val_id)
                ? Result_1.Result.ok(new UniqueEntityID_1.UniqueEntityID(vsize.attr_val_id))
                : Result_1.Result.fail("Invalid attribute id");
            const retailPriceOrError = Price_1.Price.create(Number(vsize.price));
            const weightOrError = Weight_1.Weight.create({ value: 3, unit: Weight_1.Unit.Kilogram });
            const quantityOrError = vsize.quantity > 0 ? Result_1.Result.ok(vsize.quantity) : Result_1.Result.fail("quantity must be more than 0");
            //todo product_type_id and product_brand_id
            const combinedPropsResult = Result_1.Result.combine([variantNameOrError, skuOrError, productIdOrError, prodAttributeValueIdOrError, retailPriceOrError, weightOrError, quantityOrError]);
            if (combinedPropsResult.isSuccess) {
                const ProductInventoryOrError = productInventory_1.ProductInventory.create({
                    sku: skuOrError.getValue(),
                    variantName: variantNameOrError.getValue(),
                    productId: productIdOrError.getValue().id,
                    productAttributeValueId: prodAttributeValueIdOrError.getValue(),
                    retailPrice: retailPriceOrError.getValue(),
                    weight: weightOrError.getValue(),
                    currency: productInventory_1.Currency.NGN,
                    quantity: quantityOrError.getValue(),
                    isActive: true,
                });
                ProductInventoryOrError.isFailure ? console.log(ProductInventoryOrError.error) : "";
                return ProductInventoryOrError.isSuccess ? ProductInventoryOrError : Result_1.Result.fail(ProductInventoryOrError.errorValue());
            }
            else {
                return Result_1.Result.fail(combinedPropsResult.errorValue());
            }
        });
        return productInventories;
    }
    static createProductInventory(variant) {
        const variantNameOrError = variantName_1.VariantName.create(variant.variant_name);
        const skuOrError = sku_1.Sku.create(variant.variant_name);
        const productIdOrError = UniqueEntityID_1.UniqueEntityID.isValidId(variant.product_id) ? productId_1.ProductId.create(new UniqueEntityID_1.UniqueEntityID(variant.product_id)) : Result_1.Result.fail("Invalid product id");
        const retailPriceOrError = Price_1.Price.create(Number(variant.retail_price));
        const weightOrError = Weight_1.Weight.create({ value: 3, unit: Weight_1.Unit.Kilogram });
        const quantityOrError = variant.quantity > 0 ? Result_1.Result.ok(variant.quantity) : Result_1.Result.fail("quantity must be more than 0");
        //todo product_type_id and product_brand_id
        const combinedPropsResult = Result_1.Result.combine([variantNameOrError, skuOrError, productIdOrError, retailPriceOrError, weightOrError, quantityOrError]);
        if (!combinedPropsResult.isFailure) {
            const ProductInventoryOrError = productInventory_1.ProductInventory.create({
                sku: skuOrError.getValue(),
                variantName: variantNameOrError.getValue(),
                productId: productIdOrError.getValue().id,
                retailPrice: retailPriceOrError.getValue(),
                weight: weightOrError.getValue(),
                currency: productInventory_1.Currency.NGN,
                quantity: quantityOrError.getValue(),
                isActive: true,
            });
            ProductInventoryOrError.isFailure ? console.log(ProductInventoryOrError.error) : "";
            return ProductInventoryOrError.isSuccess ? ProductInventoryOrError : Result_1.Result.fail(ProductInventoryOrError.errorValue());
        }
        return Result_1.Result.fail(combinedPropsResult.errorValue());
    }
    static createTagProductAttributeValues(all_product_inventory) {
        const tagProductAttrValues = all_product_inventory.map((prodInventory) => {
            const tagProdAttrValueOrError = tagProductAttributeValue_1.TagProductAttributValue.create({
                productAttributeValueId: prodInventory.productAttributeValueId,
                productInventoryId: prodInventory.ProductInventoryId,
            });
            if (tagProdAttrValueOrError.isSuccess) {
                return Result_1.Result.ok(tagProdAttrValueOrError.getValue());
            }
        });
        return tagProductAttrValues;
    }
    static createAllProductInventoryStock(all_product_inventory) {
        const allProduStock = all_product_inventory.map((prodInventory) => {
            const productStockOrError = productStock_1.ProductStock.create({
                productInventoryId: prodInventory.ProductInventoryId,
                units: prodInventory.quantity,
                unitSold: 0,
            });
            if (productStockOrError.isSuccess) {
                return Result_1.Result.ok(productStockOrError.getValue());
            }
        });
        return allProduStock;
    }
    static createInventoryImages(img_urls, variant_name) {
        const productImagesOrError = img_urls.map((img_url) => {
            const imgUrlOrError = Url_1.Url.create(img_url);
            if (imgUrlOrError.isFailure) {
                return Result_1.Result.fail(new createProductImageErrors_1.CreateProductImageErrors.InvalidImageUrl(img_url).error);
            }
            const productImageorError = productImage_1.ProductImage.create({
                imageUrl: imgUrlOrError.getValue(),
                altText: "edekee img",
                variantName: variant_name,
            });
            if (productImageorError.isFailure) {
                return Result_1.Result.fail(productImageorError.error);
            }
            return Result_1.Result.ok(productImageorError.getValue());
        });
        return productImagesOrError;
    }
    static getAllProductInventoryFromVariants(variants) {
        const allProdInventory = [];
        variants.forEach((v) => {
            allProdInventory.push(...v.productInventories);
        });
        return allProdInventory;
    }
    static getAllProductInventoryStock(productStockResults) {
        const allProdStock = productStockResults.map((stock) => {
            return stock.getValue();
        });
        return allProdStock;
    }
    static getAllProductAttrValuesResultFromVaraints(variants) {
        const allProdAttrResultVals = [];
        variants.forEach((v) => {
            allProdAttrResultVals.push(...v.productAttributes);
        });
        return allProdAttrResultVals;
    }
    static getAllProductImagesResultFromVaraints(variants) {
        let allProdResultImages = [];
        variants.forEach((v) => {
            allProdResultImages = [...v.productImages];
        });
        return allProdResultImages;
    }
    static getAllTagProductAttrFromResults(prod_attr_results) {
        const allProdAttrs = prod_attr_results.map((attr) => {
            return attr.getValue();
        });
        return allProdAttrs;
    }
    static getAllProductImagesFromResults(prod_img_results) {
        const allProdImages = prod_img_results.map((prodImg) => {
            return prodImg.getValue();
        });
        return allProdImages;
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdFNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wcm9kdWN0cy9zZXJ2aWNlcy9wcm9kdWN0U2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx3RUFBb0U7QUFDcEUsdURBQXdFO0FBQ3hFLDBEQUFzRDtBQUN0RCwyQ0FBdUM7QUFDdkMsbURBQStDO0FBQy9DLHlEQUFxRDtBQUNyRCxpRUFBdUU7QUFFdkUseURBQXFEO0FBQ3JELHVDQUFtQztBQUNuQyxpRkFBNEU7QUFDNUUsdURBQW1EO0FBQ25ELDZDQUErQztBQUUvQyxzR0FBa0c7QUFZbEcsTUFBYSxjQUFjO0lBQ2xCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFtQixFQUFFLFNBQW9CO1FBQ3pFLElBQUksa0JBQWtCLEdBQXNDLEVBQUUsQ0FBQTtRQUM5RCxJQUFJLGNBQWMsR0FBMkIsRUFBRSxDQUFBO1FBQy9DLE1BQU0sZ0JBQWdCLEdBQXVCLEVBQUUsQ0FBQTtRQUMvQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUE7UUFFekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFBO1lBQ2hELE1BQU0saUJBQWlCLEdBQXVCLEVBQUUsQ0FBQTtZQUNoRCxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUM1QixNQUFNLG9CQUFvQixHQUFHLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFFbEYsTUFBTSxtQkFBbUIsR0FBRyxlQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxvQkFB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