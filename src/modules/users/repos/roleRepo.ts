import { UserId } from '../domain/userId';
import { Role } from '../domain/role';
import { RoleMap } from '../mappers/RoleMap';

export interface IRoleRepo {
  exists(userId: UserId): Promise<boolean>;
  save(role: Role): Promise<void>;
}

export class RoleRepo implements IRoleRepo {
  private models: any;

  constructor(models: any) {
    this.models = models;
  }

  private createBaseQuery() {
    return {
      where: {}
    };
  }

  public async exists(userId: UserId): Promise<boolean> {
    const baseQuery = this.createBaseQuery();
    baseQuery.where['role_user_id'] = userId.id.toString();
    const role = await this.models.BaseUser.findOne(baseQuery);
    return !!role === true;
  }

  public async save(role: any): Promise<void> {
    const UserRoleModel = this.models.Role;

    const rawRole = RoleMap.toPersistence(role);

    try {
      await UserRoleModel.create(rawRole);
    } catch (err) {
      console.log(err);
      throw new Error(err.toString());
    }
  }
}
