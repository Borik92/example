import {createAction, props} from '@ngrx/store';
import {UsersActionTypesEnum} from '../users-action-types.enum';
import {IUsersModel} from '@api/users/res/user.interface';
import {HttpErrorResponse} from '@angular/common/http';

export const changeUserPermissionsAction = createAction(
  UsersActionTypesEnum.ChangeUserPermissionsAction,
  props<{ id: string, request: { permissionIds: string[] } }>()
);

export const changeUserPermissionsSuccessAction = createAction(
  UsersActionTypesEnum.ChangeUserPermissionsSuccessAction,
  props<{ response: IUsersModel }>()
);

export const changeUserPermissionsFailureAction = createAction(
  UsersActionTypesEnum.ChangeUserPermissionsFailureAction,
  props<{ errorResponse: HttpErrorResponse }>()
);
