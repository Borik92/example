import {Action, createReducer} from '@ngrx/store';
import {
  createUser,
  createUserFailure,
  createUserSuccess
} from '@pages/users/pages/users/store/reducers/users-create.reducers';
import {
  deleteUser,
  deleteUserFailure,
  deleteUserSuccess
} from '@pages/users/pages/users/store/reducers/users-delete.reducers';
import {editUser, editUserFailure, editUserSuccess} from '@pages/users/pages/users/store/reducers/users-edit.reducers';
import {
  getOneUser,
  getOneUserFailure,
  getOneUserSuccess
} from '@pages/users/pages/users/store/reducers/users-get-one.reducers';
import {
  getUsersList,
  getUsersListFailure,
  getUsersListSuccess
} from '@pages/users/pages/users/store/reducers/users-list.reducers';
import {usersInitialState} from '@pages/users/pages/users/store/users-initial.state';
import {IUsersStateModel} from '@pages/users/pages/users/store/users-state.interface';

const initReducer = createReducer(
  usersInitialState,
  getUsersList,
  getUsersListSuccess,
  getUsersListFailure,
  getOneUser,
  getOneUserSuccess,
  getOneUserFailure,
  editUser,
  editUserSuccess,
  editUserFailure,
  deleteUser,
  deleteUserSuccess,
  deleteUserFailure,
  createUser,
  createUserSuccess,
  createUserFailure
);


export function usersReducer(state: IUsersStateModel, action: Action) {
  return initReducer(state, action);
}
