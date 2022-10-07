import { UniqueEntityID } from "../../../core/domain/UniqueEntityID"
import { Mapper } from "../../../core/infra/Mapper"
import { Result } from "../../../core/logic/Result"
import { Price } from "../domain/Price"
import { ProductId } from "../domain/productId"
import { Currency, ProductInventory } from "../domain/productInventory"
import { Sku } from "../domain/sku"
import { Unit, Weight } from "../domain/Weight"
import { CreateProductInventoryResponseDTO } from "../useCases/createProductInventory/createProductInventoryDTO"

export class ProductInventoryMap extends Mapper<ProductInventory> {
  public static toPersistence(productInventory: ProductInventory): any {
    return {
      product_inventory_id: productInventory.id.toString(),
      sku: productInventory.sku.value,
      variant_name: productInventory.variantName.value,
      product_id: productInventory.productId.toString(),
      // product_type_id: productInventory.productTypeId.toString(),
      // product_brand_id: productInventory.productBrandId.toString(),
      product_weight: productInventory.weight.value,
      retail_price: productInventory.retailPrice.value,
      store_price: 0,
      currency: "NGN",
      is_active: productInventory.isActive,
    }
  }

  public static toDomain(raw: any): ProductInventory {
    const skuOrError = Sku.create(raw.variant_name)

    const productIdOrError = UniqueEntityID.isValidId(raw.product_id) ? ProductId.create(new UniqueEntityID(raw.product_id)) : Result.fail<ProductId>("Invalid product id")

    const retailPriceOrError = Price.create(Number(raw.retail_price))
    const weightOrError = Weight.create({ value: 3, unit: Unit.Kilogram })
    //todo product_type_id and product_brand_id

    const combinedPropsResult = Result.combine([skuOrError, productIdOrError, retailPriceOrError, weightOrError])

    if (!combinedPropsResult.isFailure) {
      const ProductInventoryOrError = ProductInventory.create(
        {
          sku: skuOrError.getValue(),
          variantName: raw.variant_name,
          productId: productIdOrError.getValue().id,
          retailPrice: retailPriceOrError.getValue(),
          weight: weightOrError.getValue(),
          currency: Currency.NGN,
          isActive: true,
        },
        new UniqueEntityID(raw.product_id),
      )

      ProductInventoryOrError.isFailure ? console.log(ProductInventoryOrError.error) : ""
      return ProductInventoryOrError.isSuccess ? ProductInventoryOrError.getValue() : null
    }

    return combinedPropsResult.errorValue()
  }

  public static toResponeDto(productInventory: ProductInventory): CreateProductInventoryResponseDTO {
    const response = {
      id: productInventory.id.toString(),
      name: productInventory.variantName.value,
      sku: productInventory.sku.value,
    }

    return response
  }
}
