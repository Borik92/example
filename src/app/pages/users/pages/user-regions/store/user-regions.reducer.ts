import {Action, createReducer} from '@ngrx/store';
import {userRegionsInitialState} from './user-regions-initial.state';
import {IUserRegionsStateModel} from './user-regions-state.interface';
import {
  getUserRegionsList,
  getUserRegionsListFailure,
  getUserRegionsListSuccess
} from './reducers/user-regions-list.reducers';
import {
  getOneUserRegion,
  getOneUserRegionFailure,
  getOneUserRegionSuccess
} from './reducers/user-regions-get-one.reducers';
import {editUserRegion, editUserRegionFailure, editUserRegionSuccess} from './reducers/user-regions-edit.reducers';
import {
  deleteUserRegion,
  deleteUserRegionFailure,
  deleteUserRegionSuccess
} from './reducers/user-regions-delete.reducers';
import {
  createUserRegion,
  createUserRegionFailure,
  createUserRegionSuccess
} from './reducers/user-regions-create.reducers';

const initReducer = createReducer(
  userRegionsInitialState,
  getUserRegionsList,
  getUserRegionsListSuccess,
  getUserRegionsListFailure,
  getOneUserRegion,
  getOneUserRegionSuccess,
  getOneUserRegionFailure,
  editUserRegion,
  editUserRegionSuccess,
  editUserRegionFailure,
  deleteUserRegion,
  deleteUserRegionSuccess,
  deleteUserRegionFailure,
  createUserRegion,
  createUserRegionSuccess,
  createUserRegionFailure
);

export function userRegionsReducer(state: IUserRegionsStateModel, action: Action) {
  return initReducer(state, action);
}
