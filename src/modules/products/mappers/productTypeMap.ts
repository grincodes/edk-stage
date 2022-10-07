import { UniqueEntityID } from '../../../core/domain/UniqueEntityID';
import { Mapper } from '../../../core/infra/Mapper';
import { ProductType } from '../domain/productType';
import { CreateProductTypeResponseDTO } from '../useCases/createProductType/createProductTypeDTO';
import { GetPaginatedProductTypesResponseDTO } from '../useCases/getAllProductType/getAllProductTypeDTO';

export class ProductTypeMap extends Mapper<ProductTypeMap> {
  public static toPersistence(productType: ProductType): any {
    return {
      product_type_id: productType.id.toString(),
      product_type_name: productType.name
    };
  }

  public static toDomain(raw: any): ProductType {
    const ProductTypeOrError = ProductType.create(
      {
        name: raw.product_type_name
      },
      new UniqueEntityID(raw.product_type_id)
    );

    ProductTypeOrError.isFailure ? console.log(ProductTypeOrError.error) : '';
    return ProductTypeOrError.isSuccess ? ProductTypeOrError.getValue() : null;
  }

  public static toAllResponeDto(prodTypes: any): GetPaginatedProductTypesResponseDTO {
    const product_types = prodTypes.map((type) => {
      return {
        id: type.id.toString(),
        name: type.name
      };
    });

    return { product_types };
  }

  public static toResponeDto(productType: ProductType): CreateProductTypeResponseDTO {
    const response = {
      id: productType.id.toString(),
      product_type_name: productType.name
    };

    return response;
  }
}
