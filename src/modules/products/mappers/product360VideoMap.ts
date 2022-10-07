import { Mapper } from "../../../core/infra/Mapper"
import { Product360Video } from "../domain/product360Video"
import { CreateProduct360VideoResponseDTO } from "../useCases/createProduct360Video/createProduct360VideoDTO"

export class Product360VideoMap extends Mapper<Product360Video> {
  public static toPersistence(product360Video: Product360Video): any {
    return {
      v360_id: product360Video.id.toString(),
      product_id: product360Video.productId.toString(),
      url: product360Video.url.value,
    }
  }

  public static toResponeDto(product360Video: Product360Video): CreateProduct360VideoResponseDTO {
    const response = {
      id: product360Video.id.toString(),
      url: product360Video.url.value,
    }

    return response
  }
}
