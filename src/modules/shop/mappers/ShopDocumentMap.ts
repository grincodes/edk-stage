import { UniqueEntityID } from "../../../core/domain/UniqueEntityID"
import { Mapper } from "../../../core/infra/Mapper"
import { Result } from "../../../core/logic/Result"
import { ShopDocument, ShopDocumentType } from "../domain/shopDocument"
import { ShopDocumentUrl } from "../domain/shopDocumentUrl"

export class ShopDocumentMap extends Mapper<ShopDocument> {
  public static toPersistence(shopDoc: ShopDocument): any {
    return {
      shop_document_id: shopDoc.id.toString(),
      shop_id: shopDoc.shopId.id.toString(),
      document_url: shopDoc.documentUrl.value,
      document_type: shopDoc.documentType
    }
  }

  public static toDomain(raw: any): ShopDocument {
    const documentUrlOrError = ShopDocumentUrl.create(raw.dataValues.document_url)
    const documentTypeOrError = raw.dataValues.document_type in ShopDocumentType ? raw.dataValues.document_type : Result.fail<ShopDocumentType>("Invalid shop document type")

    const combinedPropsResult = Result.combine([documentUrlOrError, documentTypeOrError])

    if (!combinedPropsResult.isFailure) {
      const shopDocumentOrError = ShopDocument.create(
        {
          shopId: raw.dataValues.shop_id,
          documentUrl: documentUrlOrError.getValue(),
          documentType: documentTypeOrError.getValue()
        },
        new UniqueEntityID(raw.dataValues.shop_document_id)
      )

      shopDocumentOrError.isFailure ? console.log(shopDocumentOrError.error) : ""
      return shopDocumentOrError.isSuccess ? shopDocumentOrError.getValue() : null
    }

    return combinedPropsResult.errorValue()
  }
}
