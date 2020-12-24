import {ICompanyModel} from '@api/company/res/company.interface';
import {IPermissionsModel} from '@api/permissions/res/permissions.interface';
import {IRoleModel} from '@api/users/res/role.interface';

export interface IUsersModel {
  id: string;
  emailAddress: string;
  fullName: string;
  phoneNumber: string;
  company: ICompanyModel;
  role: IRoleModel;
  permissions: IPermissionsModel[];
}
