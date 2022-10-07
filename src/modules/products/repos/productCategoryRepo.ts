import { ProductCategory } from "../domain/productCategory"
import { ProductCategoryId } from "../domain/productCategoryId"
import { ProductCategoryMap } from "../mappers/productCategoryMap"

export interface IProductCategoryRepo {
  findProductCategoryBySlug(slug): Promise<ProductCategory>
  findProductCategoryById(id: ProductCategoryId | string): Promise<ProductCategory>
  exists(name: string): Promise<boolean>
  save(productCategory: ProductCategory)
  getAllProductCategory()
}

export class ProductCategoryRepo implements IProductCategoryRepo {
  private models: any
  DEFAULT_PAGE = 0
  DEFAULT_SIZE = 5
  constructor(models: any) {
    this.models = models
  }

  private createBaseQuery() {
    const { models } = this
    return {
      where: {},
      include: [
        {
          model: models.ProductSubCategory,
          as: "ProductSubCategory",
          required: false,
        },
      ],
      order: [],
      limit: 0,
      offset: 0,
    }
  }

  private createBaseQueryWithRelations() {
    const { models } = this
    return {
      where: {},
      include: [
        {
          model: models.ProductAttribute,
          as: "ProductAttribute",
          required: false,
        },
      ],
      order: [],
      limit: 0,
      offset: 0,
    }
  }

  public async getAllProductCategory(): Promise<ProductCategory[]> {
    const prodCategories = (await this.models.ProductCategory.findAll(this.createBaseQueryWithRelations)).map((record) => record.toJSON())

    return prodCategories.map((p) => ProductCategoryMap.toDomain(p))
  }

  public async findProductCategoryById(id: string | ProductCategoryId): Promise<ProductCategory> {
    const _id = id instanceof ProductCategoryId ? (<ProductCategoryId>id).id.toValue() : id
    const baseQuery = this.createBaseQuery()
    baseQuery.where["category_id"] = _id

    const productCategory = await this.models.ProductCategory.findOne(baseQuery)
    if (!!productCategory === true) return ProductCategoryMap.toDomain(productCategory)

    return null
  }

  public async findProductCategoryBySlug(slug: string): Promise<ProductCategory> {
    const baseQuery = this.createBaseQuery()
    baseQuery.where["category_slug"] = slug

    const productCategory = await this.models.ProductCategory.findOne(baseQuery)
    if (!!productCategory === true) return ProductCategoryMap.toDomain(productCategory)

    return null
  }

  public async exists(name: string): Promise<boolean> {
    const baseQuery = this.createBaseQuery()
    baseQuery.where["category_name"] = name
    const productCategory = await this.models.ProductCategory.findOne(baseQuery)
    return !!productCategory === true
  }

  public async save(productCategory: ProductCategory): Promise<void> {
    const ProductCategoryModel = this.models.ProductCategory
    const exists = await this.exists(productCategory.name)
    const rawProdCat = await ProductCategoryMap.toPersistence(productCategory)

    try {
      if (!exists) {
        // Create new
        await ProductCategoryModel.create(rawProdCat)
      } else {
        // Save old
        const sequelizeCategoryInstance = await ProductCategoryModel.findOne({
          where: { name: productCategory.name },
        })
        await sequelizeCategoryInstance.update(rawProdCat)
      }
    } catch (err) {
      console.log(err)
      throw new Error(err.toString())
    }
  }
}
