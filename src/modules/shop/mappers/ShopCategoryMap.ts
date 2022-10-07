import { UniqueEntityID } from '../../../core/domain/UniqueEntityID';
import { Mapper } from '../../../core/infra/Mapper';

import { ShopCategory } from '../domain/ShopCategory';
import { CreateShopCategoryResponseDTO } from '../useCases/createShopCategory/createShopCategoryDto';
import { GetPaginatedCategoriesResponseDTO } from '../useCases/getAllShopCategory/getAllShopCategoryDTO';

export class ShopCategoryMap extends Mapper<ShopCategory> {
  public static toPersistence(shopCategory: ShopCategory): any {
    return {
      shop_category_id: shopCategory.id.toString(),
      shop_category_name: shopCategory.name,
      shop_category_slug: shopCategory.slug,
      is_active: shopCategory.isActive
    };
  }

  public static toDomain(raw: any): ShopCategory {
    const shopCategoryOrError = ShopCategory.create(
      {
        name: raw.shop_category_name,
        slug: raw.shop_category_slug,
        isActive: raw.is_active
      },
      new UniqueEntityID(raw.category_id)
    );

    shopCategoryOrError.isFailure ? console.log(shopCategoryOrError.error) : '';
    return shopCategoryOrError.isSuccess ? shopCategoryOrError.getValue() : null;
  }

  public static toAllResponeDto(shopCats: ShopCategory[]): GetPaginatedCategoriesResponseDTO {
    const shop_categories = shopCats.map((shopCat) => {
      return {
        shop_category_id: shopCat.shopCategoryId.id.toString(),
        shop_category_name: shopCat.name,
        shop_category_slug: shopCat.slug
      };
    });

    return { shop_categories };
  }

  public static toResponeDto(shopCat: ShopCategory): CreateShopCategoryResponseDTO {
    const response = {
      shop_category_id: shopCat.shopCategoryId.id.toString(),
      shop_category_name: shopCat.name,
      shop_category_slug: shopCat.slug
    };

    return response;
  }
}
