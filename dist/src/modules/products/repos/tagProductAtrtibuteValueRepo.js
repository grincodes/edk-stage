"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagProductAttributeValueRepo = void 0;
const tagProductAttributesValueMap_1 = require("../mappers/tagProductAttributesValueMap");
class TagProductAttributeValueRepo {
    constructor(models) {
        this.models = models;
    }
    async save(tagProdAttrVal) {
        const TagProductAttributeValueModel = this.models.TagProductAttributesValue;
        const rawTagProdAttrVal = tagProductAttributesValueMap_1.TagProductAttributValueMap.toPersistence(tagProdAttrVal);
        try {
            await TagProductAttributeValueModel.create(rawTagProdAttrVal);
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
    async saveBulkTransaction(allTagProdAttrValues, transaction) {
        const TagProductAttributeValueModel = this.models.TagProductAttributeValue;
        const rawAllTagProdAttrValues = allTagProdAttrValues.map((tagProdAttrVal) => {
            return tagProductAttributesValueMap_1.TagProductAttributValueMap.toPersistence(tagProdAttrVal);
        });
        try {
            await TagProductAttributeValueModel.bulkCreate(rawAllTagProdAttrValues, { transaction });
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
}
exports.TagProductAttributeValueRepo = TagProductAttributeValueRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnUHJvZHVjdEF0cnRpYnV0ZVZhbHVlUmVwby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3JlcG9zL3RhZ1Byb2R1Y3RBdHJ0aWJ1dGVWYWx1ZVJlcG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsMEZBQW9GO0FBT3BGLE1BQWEsNEJBQTRCO0lBR3ZDLFlBQVksTUFBVztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtJQUN0QixDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FBQyxjQUF1QztRQUN2RCxNQUFNLDZCQUE2QixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMseUJBQXlCLENBQUE7UUFFM0UsTUFBTSxpQkFBaUIsR0FBRyx5REFBMEIsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUE7UUFFbEYsSUFBSTtZQUNGLE1BQU0sNkJBQTZCLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUE7U0FDOUQ7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFFaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtTQUNoQztJQUNILENBQUM7SUFFTSxLQUFLLENBQUMsbUJBQW1CLENBQUMsb0JBQStDLEVBQUUsV0FBd0I7UUFDeEcsTUFBTSw2QkFBNkIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLHdCQUF3QixDQUFBO1FBRTFFLE1BQU0sdUJBQXVCLEdBQUcsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxFQUFFLEVBQUU7WUFDMUUsT0FBTyx5REFBMEIsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDakUsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJO1lBQ0YsTUFBTSw2QkFBNkIsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFBO1NBQ3pGO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBRWhCLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7U0FDaEM7SUFDSCxDQUFDO0NBQ0Y7QUFwQ0Qsb0VBb0NDIn0=