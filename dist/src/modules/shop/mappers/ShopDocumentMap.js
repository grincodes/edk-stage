"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopDocumentMap = void 0;
const UniqueEntityID_1 = require("../../../core/domain/UniqueEntityID");
const Mapper_1 = require("../../../core/infra/Mapper");
const Result_1 = require("../../../core/logic/Result");
const shopDocument_1 = require("../domain/shopDocument");
const shopDocumentUrl_1 = require("../domain/shopDocumentUrl");
class ShopDocumentMap extends Mapper_1.Mapper {
    static toPersistence(shopDoc) {
        return {
            shop_document_id: shopDoc.id.toString(),
            shop_id: shopDoc.shopId.id.toString(),
            document_url: shopDoc.documentUrl.value,
            document_type: shopDoc.documentType
        };
    }
    static toDomain(raw) {
        const documentUrlOrError = shopDocumentUrl_1.ShopDocumentUrl.create(raw.dataValues.document_url);
        const documentTypeOrError = raw.dataValues.document_type in shopDocument_1.ShopDocumentType ? raw.dataValues.document_type : Result_1.Result.fail("Invalid shop document type");
        const combinedPropsResult = Result_1.Result.combine([documentUrlOrError, documentTypeOrError]);
        if (!combinedPropsResult.isFailure) {
            const shopDocumentOrError = shopDocument_1.ShopDocument.create({
                shopId: raw.dataValues.shop_id,
                documentUrl: documentUrlOrError.getValue(),
                documentType: documentTypeOrError.getValue()
            }, new UniqueEntityID_1.UniqueEntityID(raw.dataValues.shop_document_id));
            shopDocumentOrError.isFailure ? console.log(shopDocumentOrError.error) : "";
            return shopDocumentOrError.isSuccess ? shopDocumentOrError.getValue() : null;
        }
        return combinedPropsResult.errorValue();
    }
}
exports.ShopDocumentMap = ShopDocumentMap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hvcERvY3VtZW50TWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvc2hvcC9tYXBwZXJzL1Nob3BEb2N1bWVudE1hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3RUFBb0U7QUFDcEUsdURBQW1EO0FBQ25ELHVEQUFtRDtBQUNuRCx5REFBdUU7QUFDdkUsK0RBQTJEO0FBRTNELE1BQWEsZUFBZ0IsU0FBUSxlQUFvQjtJQUNoRCxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQXFCO1FBQy9DLE9BQU87WUFDTCxnQkFBZ0IsRUFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUN2QyxPQUFPLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFO1lBQ3JDLFlBQVksRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUs7WUFDdkMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxZQUFZO1NBQ3BDLENBQUE7SUFDSCxDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFRO1FBQzdCLE1BQU0sa0JBQWtCLEdBQUcsaUNBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUM5RSxNQUFNLG1CQUFtQixHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsYUFBYSxJQUFJLCtCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsZUFBTSxDQUFDLElBQUksQ0FBbUIsNEJBQTRCLENBQUMsQ0FBQTtRQUV6SyxNQUFNLG1CQUFtQixHQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLENBQUE7UUFFckYsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRTtZQUNsQyxNQUFNLG1CQUFtQixHQUFHLDJCQUFZLENBQUMsTUFBTSxDQUM3QztnQkFDRSxNQUFNLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxPQUFPO2dCQUM5QixXQUFXLEVBQUUsa0JBQWtCLENBQUMsUUFBUSxFQUFFO2dCQUMxQyxZQUFZLEVBQUUsbUJBQW1CLENBQUMsUUFBUSxFQUFFO2FBQzdDLEVBQ0QsSUFBSSwrQkFBYyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FDcEQsQ0FBQTtZQUVELG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO1lBQzNFLE9BQU8sbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO1NBQzdFO1FBRUQsT0FBTyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUN6QyxDQUFDO0NBQ0Y7QUFoQ0QsMENBZ0NDIn0=