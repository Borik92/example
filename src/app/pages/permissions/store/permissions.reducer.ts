import {Action, createReducer} from '@ngrx/store';
import {permissionsInitialState} from '@pages/permissions/store/permissions-initial.state';
import {IPermissionsStateModel} from '@pages/permissions/store/permissions-state.interface';
import {
  getPermissionsList,
  getPermissionsListFailure,
  getPermissionsListSuccess
} from '@pages/permissions/store/reducers/permissions-list.reducers';

const initReducer = createReducer(
  permissionsInitialState,
  getPermissionsList,
  getPermissionsListSuccess,
  getPermissionsListFailure
);

export function permissionsReducer(state: IPermissionsStateModel, action: Action) {
  return initReducer(state, action);
}
