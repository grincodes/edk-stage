import { Mapper } from "../../../core/infra/Mapper"
import { ProductStock } from "../domain/productStock"

export class ProductStockMap extends Mapper<ProductStock> {
  public static toPersistence(productStock: ProductStock): any {
    return {
      product_inventory_id: productStock.productInventory.id.toString(),
      units: productStock.units,
    }
  }
}
