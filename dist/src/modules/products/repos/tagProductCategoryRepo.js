"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagProductCategoryRepo = void 0;
class TagProductCategoryRepo {
    constructor(models) {
        this.models = models;
    }
    async save(dto) {
        const TagProductCategoryModel = this.models.TagProductCategory;
        try {
            await TagProductCategoryModel.create(dto);
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
}
exports.TagProductCategoryRepo = TagProductCategoryRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnUHJvZHVjdENhdGVnb3J5UmVwby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3JlcG9zL3RhZ1Byb2R1Y3RDYXRlZ29yeVJlcG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBTUEsTUFBYSxzQkFBc0I7SUFHakMsWUFBWSxNQUFXO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQTZCO1FBQzdDLE1BQU0sdUJBQXVCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUMvRCxJQUFJO1lBQ0YsTUFBTSx1QkFBdUIsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDM0M7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7Q0FDRjtBQWhCRCx3REFnQkMifQ==