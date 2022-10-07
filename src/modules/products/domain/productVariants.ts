import { WatchedList } from "../../../core/domain/WatchedList"
import { ProductInventory } from "./productInventory"

export class ProductVariants extends WatchedList<ProductInventory> {
  private constructor(initialVariants: ProductInventory[]) {
    super(initialVariants)
  }

  public compareItems(a: ProductInventory, b: ProductInventory): boolean {
    return a.equals(b)
  }

  public static create(variants?: ProductInventory[]): ProductVariants {
    return new ProductVariants(variants ? variants : [])
  }
}
