import { Transaction } from "sequelize/types"
import { ShopId } from "../../shop/domain/shopId"
import { Product } from "../domain/product"
import { ProductId } from "../domain/productId"
import { ProductMap } from "../mappers/productMap"
import { Op } from "sequelize"

export interface IProductRepo {
  existsInShop(name: string, shopId: string)
  saveTransaction(product: Product, transaction: Transaction)
  findProductById(id: ProductId | string)
  findProductByWebId(shopId: string, webId: string)
  findProductByNameInShop(name: string, shopId: ShopId | string)
  getAllProductByShopId(shopId: ShopId | string, page: number, size: number)
  createTransaction()
}

export class ProductRepo implements IProductRepo {
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
      include: [],
      order: [],
      limit: 0,
      offset: 0,
    }
  }

  public async existsInShop(name: string, shopId: string): Promise<boolean> {
    const product = await this.models.Product.findOne({
      where: {
        [Op.and]: [{ product_name: name }, { shop_id: shopId }],
      },
    })
    return !!product === true
  }

  public async saveTransaction(product: Product, transaction: Transaction): Promise<void> {
    const ProductModel = this.models.Product
    const exists = await this.existsInShop(product.productName, product.shopId.id.toString())
    const rawProduct = await ProductMap.toPersistence(product)

    try {
      if (!exists) {
        // Create new
        await ProductModel.create(rawProduct, { transaction })
      } else {
        throw new Error("product name already exist in shop")
      }
    } catch (err) {
      console.log(err)
      throw new Error(err.toString())
    }
  }

  public async getAllProductByShopId(shopId: ShopId | string, page: number = this.DEFAULT_PAGE, size: number = this.DEFAULT_SIZE): Promise<Product[]> {
    const { limit, offset } = this.getPagination(page, size)
    const _shopId = shopId instanceof ShopId ? (<ShopId>shopId).id.toValue() : shopId
    const baseQuery = this.createBaseQuery()
    baseQuery.limit = limit
    baseQuery.offset = offset
    baseQuery.order = [["DESC"]]
    baseQuery.where["shop_id"] = _shopId

    const products = await this.models.Product.findAndCountAll(baseQuery)

    return products.map((p) => ProductMap.toDomain(p))
  }

  public async findProductById(id: string | ProductId): Promise<Product> {
    const _id = id instanceof ProductId ? (<ProductId>id).id.toValue() : id
    const baseQuery = this.createBaseQuery()
    baseQuery.where["product_id"] = _id

    const product = await this.models.Product.findOne(baseQuery)
    if (!!product === true) return ProductMap.toDomain(product)

    return null
  }

  public async findProductByWebId(shopId: string, webId: string): Promise<Product> {
    const product = await this.models.Product.findOne({
      where: {
        [Op.and]: [{ product_web_id: webId }, { shop_id: shopId }],
      },
    })
    if (!!product === true) return ProductMap.toDomain(product)

    return null
  }

  public async findProductByNameInShop(name: string, shopId: ShopId | string): Promise<Product> {
    const _shopId = shopId instanceof ShopId ? (<ShopId>shopId).id.toValue() : shopId

    const product = await this.models.Product.findOne({
      where: {
        [Op.and]: [{ product_name: name }, { shop_id: _shopId }],
      },
    })
    if (!!product === true) return ProductMap.toDomain(product)

    return null
  }

  getPagination = (page: number = this.DEFAULT_PAGE, size: number = this.DEFAULT_SIZE) => {
    const limit = +size
    const offset = page * limit

    return { limit, offset }
  }

  public async createTransaction() {
    const t = await this.models.sequelize.transaction()
    return t
  }
}
