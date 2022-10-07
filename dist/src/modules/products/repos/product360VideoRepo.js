"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product360VideoRepo = void 0;
const product360VideoMap_1 = require("../mappers/product360VideoMap");
class Product360VideoRepo {
    constructor(models) {
        this.models = models;
    }
    async save(product360Video) {
        const Product360VideoModel = this.models.Product360Video;
        const rawProduct360Video = await product360VideoMap_1.Product360VideoMap.toPersistence(product360Video);
        try {
            await Product360VideoModel.create(rawProduct360Video);
        }
        catch (err) {
            throw new Error(err.toString());
        }
    }
    async saveTransaction(product360Video, transaction) {
        const Product360VideoModel = this.models.Product360Video;
        const rawProduct360Video = await product360VideoMap_1.Product360VideoMap.toPersistence(product360Video);
        console.log("rawProduct360", rawProduct360Video);
        try {
            await Product360VideoModel.create(rawProduct360Video, { transaction });
        }
        catch (err) {
            console.log(err);
            throw new Error(err.toString());
        }
    }
}
exports.Product360VideoRepo = Product360VideoRepo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdDM2MFZpZGVvUmVwby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Byb2R1Y3RzL3JlcG9zL3Byb2R1Y3QzNjBWaWRlb1JlcG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsc0VBQWtFO0FBT2xFLE1BQWEsbUJBQW1CO0lBRzlCLFlBQVksTUFBVztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtJQUN0QixDQUFDO0lBRU0sS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFnQztRQUNoRCxNQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFBO1FBQ3hELE1BQU0sa0JBQWtCLEdBQUcsTUFBTSx1Q0FBa0IsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDbEYsSUFBSTtZQUNGLE1BQU0sb0JBQW9CLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUE7U0FDdEQ7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7U0FDaEM7SUFDSCxDQUFDO0lBRU0sS0FBSyxDQUFDLGVBQWUsQ0FBQyxlQUFnQyxFQUFFLFdBQXdCO1FBQ3JGLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUE7UUFDeEQsTUFBTSxrQkFBa0IsR0FBRyxNQUFNLHVDQUFrQixDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQTtRQUNsRixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFBO1FBRWhELElBQUk7WUFDRixNQUFNLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUE7U0FDdkU7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFFaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtTQUNoQztJQUNILENBQUM7Q0FDRjtBQTlCRCxrREE4QkMifQ==