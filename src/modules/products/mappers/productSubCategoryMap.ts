import { UniqueEntityID } from '../../../core/domain/UniqueEntityID';
import { Mapper } from '../../../core/infra/Mapper';
import { ProductSubCategory } from '../domain/ProductSubCategory';
import { CreateProductSubCategoryResponseDTO } from '../useCases/createProductSubCategory/createProductSubCategoryDTO';

export class ProductSubCategoryMap extends Mapper<ProductSubCategory> {
  public static toPersistence(ProductSubCategory: ProductSubCategory): any {
    return {
      sub_category_id: ProductSubCategory.id.toString(),
      category_id: ProductSubCategory.categoryId.toString(),
      subcategory_name: ProductSubCategory.name,
      subcategory_slug: ProductSubCategory.slug,
      is_active: ProductSubCategory.isActive
    };
  }

  public static toDomain(raw: any): ProductSubCategory {
    const ProductSubCategoryOrError = ProductSubCategory.create(
      {
        name: raw.dataValues.name,
        categoryId: raw.dataValues.category_id,
        slug: raw.dataValues.slug,
        isActive: raw.dataValues.isActive
      },
      new UniqueEntityID(raw.dataValues.subcategory_id)
    );

    ProductSubCategoryOrError.isFailure ? console.log(ProductSubCategoryOrError.error) : '';
    return ProductSubCategoryOrError.isSuccess ? ProductSubCategoryOrError.getValue() : null;
  }

  public static toResponeDto(prodSubCat: ProductSubCategory): CreateProductSubCategoryResponseDTO {
    const response = {
      id: prodSubCat.id.toString(),
      category_id: prodSubCat.categoryId.toString(),
      subcategory_name: prodSubCat.name,
      subcategory_slug: prodSubCat.slug
    };

    return response;
  }
}
