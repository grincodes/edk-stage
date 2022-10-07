"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllLocalDeliveryPartnerController = void 0;
const BaseController_1 = require("../../../../core/infra/BaseController");
const localDeliveryPartnerMap_1 = require("../../mappers/localDeliveryPartnerMap");
class GetAllLocalDeliveryPartnerController extends BaseController_1.BaseController {
    constructor(useCase) {
        super();
        this.useCase = useCase;
    }
    async executeImpl() {
        try {
            const result = await this.useCase.execute();
            if (result.isLeft()) {
                const error = result.value;
                switch (error.constructor) {
                    default:
                        return this.fail(error.errorValue().message);
                }
            }
            else {
                result.value.getValue();
                return this.ok(this.res, localDeliveryPartnerMap_1.LocalDeliveryPartnerMap.toAllResponeDto(result.value.getValue()));
            }
        }
        catch (err) {
            this.fail(err);
        }
    }
}
exports.GetAllLocalDeliveryPartnerController = GetAllLocalDeliveryPartnerController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0QWxsTG9jYWxEZWxpdmVyeVBhcnRuZXJDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvZGVsaXZlcnlfcGFydG5lcnMvdXNlQ2FzZXMvZ2V0QWxsTG9jYWxEZWxpdmVyeVBhcnRuZXIvZ2V0QWxsTG9jYWxEZWxpdmVyeVBhcnRuZXJDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBFQUF1RTtBQUN2RSxtRkFBZ0Y7QUFHaEYsTUFBYSxvQ0FBcUMsU0FBUSwrQkFBYztJQUd0RSxZQUFZLE9BQTBDO1FBQ3BELEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDekIsQ0FBQztJQUVELEtBQUssQ0FBQyxXQUFXO1FBQ2YsSUFBSTtZQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUU1QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDbkIsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFFM0IsUUFBUSxLQUFLLENBQUMsV0FBVyxFQUFFO29CQUN6Qjt3QkFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNoRDthQUNGO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3hCLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLGlEQUF1QixDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM1RjtTQUNGO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2hCO0lBQ0gsQ0FBQztDQUNGO0FBM0JELG9GQTJCQyJ9