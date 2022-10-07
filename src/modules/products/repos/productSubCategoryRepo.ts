import { ProductSubCategory } from '../domain/productSubCategory';
import { ProductSubCategoryMap } from '../mappers/productSubCategoryMap';

export interface IProductSubCategoryRepo {
  exists(name: string): Promise<boolean>;
  save(productSubCategory: ProductSubCategory);
}

export class ProductSubCategoryRepo implements IProductSubCategoryRepo {
  private models: any;
  DEFAULT_PAGE = 0;
  DEFAULT_SIZE = 5;

  constructor(models: any) {
    this.models = models;
  }

  private createBaseQuery() {
    return {
      where: {},
      order: [],
      limit: 0,
      offset: 0
    };
  }

  public async exists(name: string): Promise<boolean> {
    const baseQuery = this.createBaseQuery();
    baseQuery.where['category_name'] = name;
    const productSubCategory = await this.models.ProductSubCategory.findOne(baseQuery);
    return !!productSubCategory === true;
  }

  public async save(productSubCategory: ProductSubCategory): Promise<void> {
    const ProducSubCategoryModel = this.models.ProductCategory;
    const exists = await this.exists(productSubCategory.name);
    const rawProdSubCat = await ProductSubCategoryMap.toPersistence(productSubCategory);

    try {
      if (!exists) {
        // Create new
        await ProducSubCategoryModel.create(rawProdSubCat);
      } else {
        // Save old
        const sequelizeSubCategoryInstance = await ProducSubCategoryModel.findOne({
          where: { name: productSubCategory.name }
        });
        await sequelizeSubCategoryInstance.update(rawProdSubCat);
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.toString());
    }
  }
}
