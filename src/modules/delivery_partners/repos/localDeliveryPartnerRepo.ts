import { LocalDeliveryPartner } from '../domain/localDeliveryPartners';
import { LocalDeliveryPartnerMap } from '../mappers/localDeliveryPartnerMap';

export interface ILocalDeliveryPartnerRepo {
  //   findLocalDeliveryPartnerById(id: UniqueEntityID | string): Promise<LocalDeliveryPartner>;
  //   findLocalDeliveryPartnerByName(name: string): Promise<LocalDeliveryPartner>;
  exists(name: string): Promise<boolean>;
  save(localDeliveryPartner: LocalDeliveryPartner): Promise<void>;
  getAllLocalDeliveryPartner(): Promise<LocalDeliveryPartner[]>;
}

export class LocalDeliveryPartnerRepo implements ILocalDeliveryPartnerRepo {
  private models: any;

  constructor(models: any) {
    this.models = models;
  }

  private createBaseQuery() {
    const { models } = this;
    return {
      where: {}
    };
  }

  public async getAllLocalDeliveryPartner(): Promise<LocalDeliveryPartner[]> {
    const localDeliveryPartners = (await this.models.LocalDeliveryPartner.findAll()).map((record) => record.toJSON());

    return localDeliveryPartners.map((p) => LocalDeliveryPartnerMap.toDomain(p));
  }

  public async exists(name: string): Promise<boolean> {
    const baseQuery = this.createBaseQuery();
    baseQuery.where['local_delivery_partner_name'] = name;
    const productBrand = await this.models.LocalDeliveryPartner.findOne(baseQuery);
    return !!productBrand === true;
  }

  public async save(localDeliveryPartner: LocalDeliveryPartner): Promise<void> {
    const LocalDeliveryPartnerModel = this.models.LocalDeliveryPartner;
    const exists = await this.exists(localDeliveryPartner.deliveryPartnerName.value);
    const rawLocalDelivery = await LocalDeliveryPartnerMap.toPersistence(localDeliveryPartner);

    try {
      if (!exists) {
        // Create new
        await LocalDeliveryPartnerModel.create(rawLocalDelivery);
      } else {
        // Save old
        const sequelizeLocalDeliveryInstance = await LocalDeliveryPartnerModel.findOne({
          where: { local_delivery_partner_name: localDeliveryPartner.deliveryPartnerName.value }
        });
        await sequelizeLocalDeliveryInstance.update(rawLocalDelivery);
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.toString());
    }
  }
}
