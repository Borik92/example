import {on} from '@ngrx/store';
import {
  getRolesListAction,
  getRolesListFailureAction,
  getRolesListSuccessAction
} from '@pages/users/pages/roles/store/actions/roles-lists.actions';
import {adapter} from '@pages/users/pages/roles/store/roles-initial.state';
import {IRolesStateModel} from '@pages/users/pages/roles/store/roles-state.interface';

export const getRolesList = on(
  getRolesListAction,
  (state: IRolesStateModel): IRolesStateModel => {
    return ({
      ...state,
      isGettingRolesList: true,
      validationErrors: null
    });
  }
);

export const getRolesListSuccess = on(
  getRolesListSuccessAction,
  (state: IRolesStateModel, {response}): IRolesStateModel => {
    return adapter.addMany(response, {
      ...state,
      entities: {},
      ids: [],
      isGettingRolesList: false,
      validationErrors: null
    });
  });

export const getRolesListFailure = on(
  getRolesListFailureAction,
  (state: IRolesStateModel, {errorResponse}): IRolesStateModel => ({
    ...state,
    isGettingRolesList: false,
    validationErrors: errorResponse
  })
);
