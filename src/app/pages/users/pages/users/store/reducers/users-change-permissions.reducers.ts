import {on} from '@ngrx/store';
import {
  changeUserPermissionsAction,
  changeUserPermissionsFailureAction,
  changeUserPermissionsSuccessAction
} from '../actions/users-change-permissions.actions';
import {adapter} from '../users-initial.state';
import {IUsersStateModel} from '../users-state.interface';

export const changeUserPermissions = on(
  changeUserPermissionsAction,
  (state: IUsersStateModel): IUsersStateModel => {
    return {
      ...state,
      isChangingUserPermissions: true,
      validationErrors: null
    };
  });

export const changeUserPermissionsSuccess = on(
  changeUserPermissionsSuccessAction,
  (state: IUsersStateModel, {response}): IUsersStateModel => {
    return adapter.addOne(response, {
      ...state,
      isChangingUserPermissions: false,
      validationErrors: null
    });
  });

export const changeUserPermissionsFailure = on(
  changeUserPermissionsFailureAction,
  (state: IUsersStateModel, {errorResponse}): IUsersStateModel => {
    return {
      ...state,
      isChangingUserPermissions: false,
      validationErrors: errorResponse,
    };
  });
