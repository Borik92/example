import {on} from '@ngrx/store';
import {
  editUserAction,
  editUserFailureAction,
  editUserSuccessAction
} from '@pages/users/pages/users/store/actions/users-edit.actions';
import {adapter} from '@pages/users/pages/users/store/users-initial.state';
import {IUsersStateModel} from '@pages/users/pages/users/store/users-state.interface';

export const editUser = on(
  editUserAction,
  (state: IUsersStateModel): IUsersStateModel => {
    return {
      ...state,
      isEditingUser: true,
      validationErrors: null
    };
  });

export const editUserSuccess = on(
  editUserSuccessAction,
  (state: IUsersStateModel, {response}): IUsersStateModel => {
    return adapter.upsertOne(response, {
      ...state,
      isEditingUser: false,
      validationErrors: null
    });
  });

export const editUserFailure = on(
  editUserFailureAction,
  (state: IUsersStateModel, {errorResponse}): IUsersStateModel => {
    return {
      ...state,
      isEditingUser: false,
      validationErrors: errorResponse,
    };
  });
