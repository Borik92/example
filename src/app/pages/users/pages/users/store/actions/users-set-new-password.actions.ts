import {createAction, props} from '@ngrx/store';
import {UsersActionTypesEnum} from '../users-action-types.enum';
import {ISetNewPasswordModel} from '../../models/set-new-password.interface';
import {HttpErrorResponse} from '@angular/common/http';

export const setNewPasswordUserAction = createAction(
  UsersActionTypesEnum.SetNewPasswordUserAction,
  props<{ id: string, request: ISetNewPasswordModel }>()
);

export const setNewPasswordUserSuccessAction = createAction(
  UsersActionTypesEnum.SetNewPasswordUserSuccessAction,
  props<{ response: any }>()
);

export const setNewPasswordUserFailureAction = createAction(
  UsersActionTypesEnum.SetNewPasswordUserFailureAction,
  props<{ errorResponse: HttpErrorResponse }>()
);
