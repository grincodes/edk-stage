import { UniqueEntityID } from '../../../core/domain/UniqueEntityID';
import { Mapper } from '../../../core/infra/Mapper';
import { ProductAttribute } from '../domain/productAttribute';
import { CreateProductAttributeResponseDTO } from '../useCases/createProductAttribute/createProductAttributeDTO';
import { GetPaginatedAttributeResponseDTO } from '../useCases/getAllProductAttribute/getAllProductAttributeDTO';

export class ProductAttributeMap extends Mapper<ProductAttribute> {
  public static toPersistence(productAttribute: ProductAttribute): any {
    return {
      attribute_id: productAttribute.id.toString(),
      category_id: productAttribute.productCategoryId.toString(),
      attribute_name: productAttribute.name,
      attribute_description: productAttribute.description
    };
  }

  public static toDomain(raw: any): ProductAttribute {
    const ProductAttributeOrError = ProductAttribute.create(
      {
        name: raw.attribute_name,
        product_category_id: raw.product_category_id,
        description: raw.attribute_description
      },
      new UniqueEntityID(raw.product_type_id)
    );

    ProductAttributeOrError.isFailure ? console.log(ProductAttributeOrError.error) : '';
    return ProductAttributeOrError.isSuccess ? ProductAttributeOrError.getValue() : null;
  }

  public static toAllResponeDto(prodAttributes: any): GetPaginatedAttributeResponseDTO {
    const product_attributes = prodAttributes.map((attr) => {
      return {
        id: attr.id.toString(),
        name: attr.attribute_name,
        product_category_id: attr.category_id,
        description: attr.attribute_description
      };
    });

    return { product_attributes };
  }

  public static toResponeDto(productAttribute: ProductAttribute): CreateProductAttributeResponseDTO {
    const response = {
      id: productAttribute.id.toString(),
      attribute_name: productAttribute.name
    };

    return response;
  }
}
