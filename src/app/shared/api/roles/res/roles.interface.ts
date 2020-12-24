import {IPermissionsModel} from '@api/permissions/res/permissions.interface';

export interface IRolesModel {
  id: string;
  name: string;
  description: string;
  permissions: IPermissionsModel[];
}
