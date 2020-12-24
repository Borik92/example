import {on} from '@ngrx/store';
import {
  getUsersListAction,
  getUsersListFailureAction,
  getUsersListSuccessAction
} from '@pages/users/pages/users/store/actions/users-list.actions';
import {adapter} from '@pages/users/pages/users/store/users-initial.state';
import {IUsersStateModel} from '@pages/users/pages/users/store/users-state.interface';

export const getUsersList = on(
  getUsersListAction,
  (state: IUsersStateModel): IUsersStateModel => {
    return {
      ...state,
      isGettingUsersList: true,
      validationErrors: null
    };
  });

export const getUsersListSuccess = on(
  getUsersListSuccessAction,
  (state: IUsersStateModel, {response}): IUsersStateModel => {
    return adapter.addMany(response, {
      ...state,
      entities: {},
      ids: [],
      isGettingUsersList: false,
      validationErrors: null
    });
  }
);

export const getUsersListFailure = on(
  getUsersListFailureAction,
  (state: IUsersStateModel, {errorResponse}): IUsersStateModel => {
    return {
      ...state,
      isGettingUsersList: false,
      validationErrors: errorResponse
    };
  });
