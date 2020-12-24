import {on} from '@ngrx/store';
import {
  createUserAction,
  createUserFailureAction,
  createUserSuccessAction
} from '@pages/users/pages/users/store/actions/users-create.actions';
import {adapter} from '@pages/users/pages/users/store/users-initial.state';
import {IUsersStateModel} from '@pages/users/pages/users/store/users-state.interface';

export const createUser = on(
  createUserAction,
  (state: IUsersStateModel): IUsersStateModel => {
    return {
      ...state,
      isCreatingUser: true,
      validationErrors: null
    };
  });

export const createUserSuccess = on(
  createUserSuccessAction,
  (state: IUsersStateModel, {response}): IUsersStateModel => {
    return adapter.addOne(response, {
      ...state,
      isCreatingUser: false,
      validationErrors: null
    });
  });

export const createUserFailure = on(
  createUserFailureAction,
  (state: IUsersStateModel, {errorResponse}): IUsersStateModel => {
    return {
      ...state,
      isCreatingUser: false,
      validationErrors: errorResponse
    };
  });
