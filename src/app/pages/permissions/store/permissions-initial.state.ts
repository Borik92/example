import {IPermissionsModel} from '@api/permissions/res/permissions.interface';
import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {IPermissionsStateModel} from '@pages/permissions/store/permissions-state.interface';

export const adapter: EntityAdapter<IPermissionsModel> = createEntityAdapter<IPermissionsModel>();

export const permissionsInitialState: IPermissionsStateModel = adapter.getInitialState(
  {
    isGettingPermissionsList: false,
    validationErrors: null,
  });
