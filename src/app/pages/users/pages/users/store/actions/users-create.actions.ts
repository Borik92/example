import {createAction, props} from '@ngrx/store';
import {UsersActionTypesEnum} from '../users-action-types.enum';
import {IUsersModel} from '@api/users/res/user.interface';
import {HttpErrorResponse} from '@angular/common/http';

export const createUserAction = createAction(
  UsersActionTypesEnum.CreateUserAction,
  props<{ request: any }>()
);

export const createUserSuccessAction = createAction(
  UsersActionTypesEnum.CreateUserSuccessAction,
  props<{ response: IUsersModel }>()
);

export const createUserFailureAction = createAction(
  UsersActionTypesEnum.CreateUserFailureAction,
  props<{ errorResponse: HttpErrorResponse }>()
);
