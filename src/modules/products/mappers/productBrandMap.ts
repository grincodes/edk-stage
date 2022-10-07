import { UniqueEntityID } from '../../../core/domain/UniqueEntityID';
import { Mapper } from '../../../core/infra/Mapper';
import { ProductBrand } from '../domain/productBrand';
import { CreateProductBrandResponseDTO } from '../useCases/createProductBrand/createProductBrandDTO';
import { GetPaginatedBrandsResponseDTO } from '../useCases/getAllProductBrand/getAllProductBrandDto';

export class ProductBrandMap extends Mapper<ProductBrand> {
  public static toPersistence(productBrand: ProductBrand): any {
    return {
      product_brand_id: productBrand.id.toString(),
      product_brand_name: productBrand.name
    };
  }

  public static toDomain(raw: any): ProductBrand {
    const ProductBrandOrError = ProductBrand.create(
      {
        name: raw.product_brand_name
      },
      new UniqueEntityID(raw.product_brand_id)
    );

    ProductBrandOrError.isFailure ? console.log(ProductBrandOrError.error) : '';
    return ProductBrandOrError.isSuccess ? ProductBrandOrError.getValue() : null;
  }

  public static toAllResponeDto(prodBrands: ProductBrand[]): GetPaginatedBrandsResponseDTO {
    const product_brands = prodBrands.map((brand) => {
      return {
        id: brand.id.toString(),
        name: brand.name
      };
    });

    return { product_brands };
  }

  public static toResponeDto(productBrand: ProductBrand): CreateProductBrandResponseDTO {
    const response = {
      id: productBrand.id.toString(),
      product_brand_name: productBrand.name
    };

    return response;
  }
}
