import { ShopCategory } from "../domain/shopCategory"
import { ShopCategoryId } from "../domain/shopCategoryId"
import { ShopCategoryMap } from "../mappers/ShopCategoryMap"

export interface IShopCategoryRepo {
  findShopCategoryBySlug(slug): Promise<ShopCategory>
  findShopCategoryById(id: ShopCategoryId | string): Promise<ShopCategory>
  exists(name: string): Promise<boolean>
  save(ShopCategory: ShopCategory)
  getAllShopCategory()
}

export class ShopCategoryRepo implements IShopCategoryRepo {
  private models: any
  DEFAULT_PAGE = 0
  DEFAULT_SIZE = 5
  constructor(models: any) {
    this.models = models
  }

  private createBaseQuery() {
    return {
      where: {},
    }
  }

  public async getAllShopCategory(): Promise<ShopCategory[]> {
    const shopCategories = (await this.models.ShopCategory.findAll()).map((record) => record.toJSON())

    return shopCategories.map((p) => ShopCategoryMap.toDomain(p))
  }

  public async findShopCategoryById(id: string | ShopCategoryId): Promise<ShopCategory> {
    const _id = id instanceof ShopCategoryId ? (<ShopCategoryId>id).id.toValue() : id
    const baseQuery = this.createBaseQuery()
    baseQuery.where["category_id"] = _id

    const ShopCategory = await this.models.ShopCategory.findOne(baseQuery)
    if (!!ShopCategory === true) return ShopCategoryMap.toDomain(ShopCategory)

    return null
  }

  public async findShopCategoryBySlug(slug: string): Promise<ShopCategory> {
    const baseQuery = this.createBaseQuery()
    baseQuery.where["shop_category_slug"] = slug

    const ShopCategory = await this.models.ShopCategory.findOne(baseQuery)
    if (!!ShopCategory === true) return ShopCategoryMap.toDomain(ShopCategory)

    return null
  }

  public async exists(name: string): Promise<boolean> {
    const baseQuery = this.createBaseQuery()
    baseQuery.where["shop_category_name"] = name
    const ShopCategory = await this.models.ShopCategory.findOne(baseQuery)
    return !!ShopCategory === true
  }

  public async save(shopCategory: ShopCategory): Promise<void> {
    const ShopCategoryModel = this.models.ShopCategory
    const exists = await this.exists(shopCategory.name)
    const rawShopCat = await ShopCategoryMap.toPersistence(shopCategory)

    try {
      if (!exists) {
        // Create new
        await ShopCategoryModel.create(rawShopCat)
      } else {
        // Save old
        const sequelizeCategoryInstance = await ShopCategoryModel.findOne({
          where: { name: shopCategory.name },
        })
        await sequelizeCategoryInstance.update(rawShopCat)
      }
    } catch (err) {
      console.log(err)
      throw new Error(err.toString())
    }
  }
}
