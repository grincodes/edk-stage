import { UniqueEntityID } from '../../../core/domain/UniqueEntityID';
import { Mapper } from '../../../core/infra/Mapper';

import { ProductCategory } from '../domain/ProductCategory';
import { CreateProductCategoryResponseDTO } from '../useCases/createProductCategory/createProductCategoryDto';
import { GetPaginatedCategoriesResponseDTO } from '../useCases/getAllProductCategory/getAllProductCategoryDTO';

export class ProductCategoryMap extends Mapper<ProductCategory> {
  public static toPersistence(productCategory: ProductCategory): any {
    return {
      category_id: productCategory.id.toString(),
      product_type_id: productCategory.productTypeId.toString(),
      category_name: productCategory.name,
      category_slug: productCategory.slug,
      is_active: productCategory.isActive
    };
  }

  public static toDomain(raw: any): ProductCategory {
    const ProductCategoryOrError = ProductCategory.create(
      {
        name: raw.category_name,
        product_type_id: new UniqueEntityID(raw.product_type_id),
        slug: raw.category_slug,
        isActive: raw.is_active
      },
      new UniqueEntityID(raw.category_id)
    );

    ProductCategoryOrError.isFailure ? console.log(ProductCategoryOrError.error) : '';
    return ProductCategoryOrError.isSuccess ? ProductCategoryOrError.getValue() : null;
  }

  public static toAllResponeDto(prodCats: ProductCategory[]): GetPaginatedCategoriesResponseDTO {
    const categories = prodCats.map((cat) => {
      return {
        category_id: cat.productCategoryId.id.toString(),
        category_name: cat.name,
        category_slug: cat.slug
      };
    });

    return { categories };
  }

  public static toResponeDto(prodCat: ProductCategory): CreateProductCategoryResponseDTO {
    const response = {
      category_id: prodCat.productCategoryId.id.toString(),
      category_name: prodCat.name,
      category_slug: prodCat.slug
    };

    return response;
  }
}
