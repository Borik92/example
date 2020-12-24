import {ICompanyStateModel} from '@pages/company/store/company-state.interface';
import {IDivisionTypesStateModel} from '@pages/division/pages/division-types/store/division-types-state.interface';
import {IDivisionStateModel} from '@pages/division/pages/division/store/division-state.interface';
import {IPermissionsStateModel} from '@pages/permissions/store/permissions-state.interface';
import {IRolesStateModel} from '@pages/users/pages/roles/store/roles-state.interface';
import {IUsersStateModel} from '@pages/users/pages/users/store/users-state.interface';
import {IAuthStateModel} from '@pages/auth/store/auth-state.interface';
import {INotificationsStateModel} from '@pages/notifications/store/notifications-state.interface';
import {IUserRegionsStateModel} from '@pages/users/pages/user-regions/store/user-regions-state.interface';

export interface IAppStateModel {
  auth: IAuthStateModel;
  notifications: INotificationsStateModel;
  userRegions: IUserRegionsStateModel;
  users: IUsersStateModel;
  permissions: IPermissionsStateModel;
  roles: IRolesStateModel;
  division: IDivisionStateModel;
  divisionTypes: IDivisionTypesStateModel;
  company: ICompanyStateModel;
}
