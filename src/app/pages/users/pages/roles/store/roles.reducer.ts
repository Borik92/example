import {Action, createReducer} from '@ngrx/store';
import {
  roleCreate,
  roleCreateFailure,
  roleCreateSuccess
} from '@pages/users/pages/roles/store/reducers/roles-create.reducers';
import {
  roleDelete,
  roleDeleteFailure,
  roleDeleteSuccess
} from '@pages/users/pages/roles/store/reducers/roles-delete.reducers';
import {editRole, editRoleFailure, editRoleSuccess} from '@pages/users/pages/roles/store/reducers/roles-edit.reducers';
import {
  rolesGetOne,
  rolesGetOneeFailure,
  rolesGetOneSuccess
} from '@pages/users/pages/roles/store/reducers/roles-get-one.reducers';
import {
  getRolesList,
  getRolesListFailure,
  getRolesListSuccess
} from '@pages/users/pages/roles/store/reducers/roles-lists.reducers';
import {rolesInitialState} from '@pages/users/pages/roles/store/roles-initial.state';
import {IRolesStateModel} from '@pages/users/pages/roles/store/roles-state.interface';

const initReducer = createReducer(
  rolesInitialState,
  roleCreate,
  roleCreateSuccess,
  roleCreateFailure,
  roleDelete,
  roleDeleteSuccess,
  roleDeleteFailure,
  editRole,
  editRoleSuccess,
  editRoleFailure,
  rolesGetOne,
  rolesGetOneSuccess,
  rolesGetOneeFailure,
  getRolesList,
  getRolesListSuccess,
  getRolesListFailure
);

export function rolesReducer(state: IRolesStateModel, action: Action) {
  return initReducer(state, action);
}
