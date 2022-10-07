import { ProductBrand } from '../domain/productBrand';
import { ProductBrandMap } from '../mappers/productBrandMap';

export interface IProductBrandRepo {
  exists(name: string): Promise<boolean>;
  save(productBrand: ProductBrand);
  getAllProductBrand();
}

export class ProductBrandRepo implements IProductBrandRepo {
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

  public async getAllProductBrand(): Promise<ProductBrand[]> {
    const prodBrands = (await this.models.ProductBrand.findAll()).map((record) => record.toJSON());

    return prodBrands.map((p) => ProductBrandMap.toDomain(p));
  }

  public async exists(name: string): Promise<boolean> {
    const baseQuery = this.createBaseQuery();
    baseQuery.where['product_brand_name'] = name;
    const productBrand = await this.models.ProductBrand.findOne(baseQuery);
    return !!productBrand === true;
  }

  public async save(productBrand: ProductBrand): Promise<void> {
    const ProductBrandModel = this.models.ProductBrand;
    const exists = await this.exists(productBrand.name);
    const rawProdCat = await ProductBrandMap.toPersistence(productBrand);

    try {
      if (!exists) {
        // Create new
        await ProductBrandModel.create(rawProdCat);
      } else {
        // Save old
        const sequelizeBrandInstance = await ProductBrandModel.findOne({
          where: { product_brand_name: productBrand.name }
        });
        await sequelizeBrandInstance.update(rawProdCat);
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.toString());
    }
  }
}
