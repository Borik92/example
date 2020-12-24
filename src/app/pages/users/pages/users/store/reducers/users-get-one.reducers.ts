import {on} from '@ngrx/store';
import {
  getOneUserAction,
  getOneUserFailureAction,
  getOneUserSuccessAction
} from '@pages/users/pages/users/store/actions/users-get-one.actions';
import {adapter} from '@pages/users/pages/users/store/users-initial.state';
import {IUsersStateModel} from '@pages/users/pages/users/store/users-state.interface';

export const getOneUser = on(
  getOneUserAction,
  (state: IUsersStateModel): IUsersStateModel => {
    return {
      ...state,
      isGettingOneUser: true,
      validationErrors: null
    };
  });

export const getOneUserSuccess = on(
  getOneUserSuccessAction,
  (state: IUsersStateModel, {response}): IUsersStateModel => {
    return adapter.addOne(response, {
      ...state,
      isGettingOneUser: false,
      validationErrors: null
    });
  });

export const getOneUserFailure = on(
  getOneUserFailureAction,
  (state: IUsersStateModel, {errorResponse}): IUsersStateModel => {
    return {
      ...state,
      isGettingOneUser: false,
      validationErrors: errorResponse
    };
  });
