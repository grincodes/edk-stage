"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateShopLocationUseCase = void 0;
const Result_1 = require("../../../../core/logic/Result");
const shopLocation_1 = require("../../domain/shopLocation");
const shopId_1 = require("../../domain/shopId");
class CreateShopLocationUseCase {
    constructor(shopLocationRepo) {
        this.shopLocationRepo = shopLocationRepo;
    }
    async execute(request) {
        const { shop } = request;
        const shopLocationProps = shop.shopLocation;
        shopLocationProps.props.shopId = shopId_1.ShopId.create(shop.id).getValue();
        const shopLocationOrError = shopLocation_1.ShopLocation.create(shopLocationProps);
        if (shopLocationOrError.isFailure) {
            return Result_1.Result.fail(shopLocationOrError.error);
        }
        const shopLocation = shopLocationOrError.getValue();
        try {
            await this.shopLocationRepo.save(shopLocation);
            console.log(`[Shop Location Created]: Shopid ${shop.id} `);
        }
        catch (err) {
            return Result_1.Result.fail(err);
        }
        return Result_1.Result.ok(shopLocation);
    }
}
exports.CreateShopLocationUseCase = CreateShopLocationUseCase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3JlYXRlU2hvcExvY2F0aW9uVXNlQ2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3Nob3AvdXNlQ2FzZXMvY3JlYXRlU2hvcExvY2F0aW9uL0NyZWF0ZVNob3BMb2NhdGlvblVzZUNhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsMERBQXNEO0FBRXRELDREQUF3RDtBQUV4RCxnREFBNEM7QUFNNUMsTUFBYSx5QkFBeUI7SUFJcEMsWUFBWSxnQkFBbUM7UUFDN0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFBO0lBQzFDLENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQWdCO1FBQzVCLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUE7UUFDeEIsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFBO1FBQzNDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7UUFFbEUsTUFBTSxtQkFBbUIsR0FBRywyQkFBWSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBRWxFLElBQUksbUJBQW1CLENBQUMsU0FBUyxFQUFFO1lBQ2pDLE9BQU8sZUFBTSxDQUFDLElBQUksQ0FBZSxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUM1RDtRQUVELE1BQU0sWUFBWSxHQUFpQixtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUVqRSxJQUFJO1lBQ0YsTUFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1lBRTlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1NBQzNEO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLGVBQU0sQ0FBQyxJQUFJLENBQWUsR0FBRyxDQUFDLENBQUE7U0FDdEM7UUFFRCxPQUFPLGVBQU0sQ0FBQyxFQUFFLENBQWUsWUFBWSxDQUFDLENBQUE7SUFDOUMsQ0FBQztDQUNGO0FBL0JELDhEQStCQyJ9