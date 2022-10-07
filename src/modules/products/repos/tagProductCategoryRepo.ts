import { CreateProductCategoryDTO } from '../useCases/createProductCategory/createProductCategoryDto';

export interface ITagProductCategoryRepo {
  save(dto: CreateProductCategoryDTO): Promise<void>;
}

export class TagProductCategoryRepo implements ITagProductCategoryRepo {
  private models: any;

  constructor(models: any) {
    this.models = models;
  }

  public async save(dto: CreateProductCategoryDTO): Promise<void> {
    const TagProductCategoryModel = this.models.TagProductCategory;
    try {
      await TagProductCategoryModel.create(dto);
    } catch (err) {
      console.log(err);
      throw new Error(err.toString());
    }
  }
}
