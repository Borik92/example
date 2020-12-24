import {IPermissionsModel} from '@api/permissions/res/permissions.interface';
import {EntityState} from '@ngrx/entity';

export interface IPermissionsStateModel extends EntityState<IPermissionsModel> {
  isGettingPermissionsList: boolean;
  validationErrors: any;
}
