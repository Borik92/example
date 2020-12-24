import {createAction, props} from '@ngrx/store';
import {UsersActionTypesEnum} from '../users-action-types.enum';
import {HttpErrorResponse} from '@angular/common/http';
import {IUsersModel} from '@api/users/res/user.interface';

export const resetUserPasswordAction = createAction(
  UsersActionTypesEnum.ResetUserPasswordAction,
  props<{ id: string, request: any }>()
);

export const resetUserPasswordSuccessAction = createAction(
  UsersActionTypesEnum.ResetUserPasswordSuccessAction,
  props<{ response: IUsersModel }>()
);

export const resetUserPasswordFailureAction = createAction(
  UsersActionTypesEnum.ResetUserPasswordFailureAction,
  props<{ errorResponse: HttpErrorResponse }>()
);
