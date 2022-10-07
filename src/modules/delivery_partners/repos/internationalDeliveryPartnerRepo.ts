import { InternationalDeliveryPartner } from '../domain/internationalDeliveryPartners';
import { InternationalDeliveryPartnerMap } from '../mappers/internationalDeliveryPartnerMap';

export interface IInternationalDeliveryPartnerRepo {
  //   findInternationalDeliveryPartnerById(id: UniqueEntityID | string): Promise<InternationalDeliveryPartner>;
  //   findInternationalDeliveryPartnerByName(name: string): Promise<InternationalDeliveryPartner>;
  exists(name: string): Promise<boolean>;
  save(internationalDeliveryPartner: InternationalDeliveryPartner): Promise<void>;
  getAllInternationalDeliveryPartner(): Promise<InternationalDeliveryPartner[]>;
}

export class InternationalDeliveryPartnerRepo implements IInternationalDeliveryPartnerRepo {
  private models: any;

  constructor(models: any) {
    this.models = models;
  }

  private createBaseQuery() {
    return {
      where: {}
    };
  }

  public async getAllInternationalDeliveryPartner(): Promise<InternationalDeliveryPartner[]> {
    const internationalDeliveryPartners = (await this.models.InternationalDeliveryPartner.findAll()).map((record) => record.toJSON());

    return internationalDeliveryPartners.map((p) => InternationalDeliveryPartnerMap.toDomain(p));
  }

  public async exists(name: string): Promise<boolean> {
    const baseQuery = this.createBaseQuery();
    baseQuery.where['international_delivery_partner_name'] = name;
    const internationalDeliveryPartner = await this.models.InternationalDeliveryPartner.findOne(baseQuery);
    return !!internationalDeliveryPartner === true;
  }

  public async save(internationalDeliveryPartner: InternationalDeliveryPartner): Promise<void> {
    const InternationalDeliveryPartnerModel = this.models.InternationalDeliveryPartner;
    const exists = await this.exists(internationalDeliveryPartner.deliveryPartnerName.value);
    const rawInternationalDelivery = await InternationalDeliveryPartnerMap.toPersistence(internationalDeliveryPartner);

    try {
      if (!exists) {
        // Create new
        await InternationalDeliveryPartnerModel.create(rawInternationalDelivery);
      } else {
        // Save old
        const sequelizeInternationalDeliveryInstance = await InternationalDeliveryPartnerModel.findOne({
          where: {
            international_delivery_partner_name: internationalDeliveryPartner.deliveryPartnerName.value
          }
        });
        await sequelizeInternationalDeliveryInstance.update(rawInternationalDelivery);
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.toString());
    }
  }
}
