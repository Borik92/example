import {on} from '@ngrx/store';
import {
  deleteUserAction,
  deleteUserFailureAction,
  deleteUserSuccessAction
} from '@pages/users/pages/users/store/actions/users-delete.actions';
import {adapter} from '@pages/users/pages/users/store/users-initial.state';
import {IUsersStateModel} from '@pages/users/pages/users/store/users-state.interface';

export const deleteUser = on(
  deleteUserAction,
  (state: IUsersStateModel): IUsersStateModel => {
    return {
      ...state,
      isDeletingUser: true,
      validationErrors: null
    };
  });

export const deleteUserSuccess = on(
  deleteUserSuccessAction,
  (state: IUsersStateModel, {id}): IUsersStateModel => {
    return adapter.removeOne(id, {
      ...state,
      isDeletingUser: false,
      validationErrors: null
    });
  });

export const deleteUserFailure = on(
  deleteUserFailureAction,
  (state: IUsersStateModel, {errorResponse}): IUsersStateModel => {
    return {
      ...state,
      isDeletingUser: false,
      validationErrors: errorResponse,
    };
  });
