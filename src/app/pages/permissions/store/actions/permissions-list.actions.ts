import {HttpErrorResponse} from '@angular/common/http';
import {IPermissionsModel} from '@api/permissions/res/permissions.interface';
import {createAction, props} from '@ngrx/store';
import {PermissionsActionTypesEnum} from '@pages/permissions/store/permissions-action-types.enum';

export const getPermissionsListAction = createAction(
  PermissionsActionTypesEnum.GetPermissionsList
);

export const getPermissionsListSuccessAction = createAction(
  PermissionsActionTypesEnum.GetPermissionsListSuccess,
  props<{ response: IPermissionsModel[] }>()
);

export const getPermissionsListFailureAction = createAction(
  PermissionsActionTypesEnum.GetPermissionsListFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
