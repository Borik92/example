import {createAction, props} from '@ngrx/store';
import {UsersActionTypesEnum} from '../users-action-types.enum';
import {IUsersModel} from '@api/users/res/user.interface';
import {HttpErrorResponse} from '@angular/common/http';

export const getUsersListAction = createAction(
  UsersActionTypesEnum.GetUsersListAction
);

export const getUsersListSuccessAction = createAction(
  UsersActionTypesEnum.GetUsersListSuccessAction,
  props<{ response: IUsersModel[] }>()
);

export const getUsersListFailureAction = createAction(
  UsersActionTypesEnum.GetUsersListFailureAction,
  props<{ errorResponse: HttpErrorResponse }>()
);
