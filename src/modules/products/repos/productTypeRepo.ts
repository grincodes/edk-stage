import { ProductType } from '../domain/productType';
import { ProductTypeMap } from '../mappers/productTypeMap';

export interface IProductTypeRepo {
  exists(name: string): Promise<boolean>;
  save(productType: ProductType);
  getAllProductType();
}

export class ProductTypeRepo implements IProductTypeRepo {
  private models: any;
  DEFAULT_PAGE = 0;
  DEFAULT_SIZE = 5;
  constructor(models: any) {
    this.models = models;
  }

  private createBaseQuery() {
    return {
      where: {},
      include: [],
      order: [],
      limit: 0,
      offset: 0
    };
  }

  public async getAllProductType(): Promise<ProductType[]> {
    const prodTypes = (await this.models.ProductType.findAll()).map((record) => record.toJSON());

    return prodTypes.map((p) => ProductTypeMap.toDomain(p));
  }

  public async exists(name: string): Promise<boolean> {
    const baseQuery = this.createBaseQuery();
    baseQuery.where['product_type_name'] = name;
    const productType = await this.models.ProductType.findOne(baseQuery);
    return !!productType === true;
  }

  public async save(productType: ProductType): Promise<void> {
    const ProductTypeModel = this.models.ProductType;
    const exists = await this.exists(productType.name);
    const rawProdType = await ProductTypeMap.toPersistence(productType);

    try {
      if (!exists) {
        // Create new
        await ProductTypeModel.create(rawProdType);
      } else {
        // Save old
        const sequelizeProductTypeInstance = await ProductTypeModel.findOne({
          where: { product_type_name: productType.name }
        });
        await sequelizeProductTypeInstance.update(rawProdType);
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.toString());
    }
  }
}
