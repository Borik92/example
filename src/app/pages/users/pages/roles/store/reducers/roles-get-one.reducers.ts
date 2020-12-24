import {on} from '@ngrx/store';
import {
  getOneRoleAction,
  getOneRoleFailureAction,
  getOneRoleSuccessAction
} from '@pages/users/pages/roles/store/actions/roles-get-one.actions';
import {adapter} from '@pages/users/pages/roles/store/roles-initial.state';
import {IRolesStateModel} from '@pages/users/pages/roles/store/roles-state.interface';

export const rolesGetOne = on(getOneRoleAction,
  (state: IRolesStateModel): IRolesStateModel => {
    return ({
      ...state,
      isGettingOneRole: true,
      validationErrors: null
    });
  }
);

export const rolesGetOneSuccess = on(
  getOneRoleSuccessAction,
  (state: IRolesStateModel, {response}): IRolesStateModel => {
    return adapter.addOne(response, {
      ...state,
      isGettingOneRole: false,
      validationErrors: null
    });
  }
);

export const rolesGetOneeFailure = on(
  getOneRoleFailureAction,
  (state: IRolesStateModel, {errorResponse}): IRolesStateModel => {
    return ({
      ...state,
      isGettingOneRole: false,
      validationErrors: errorResponse
    });
  }
);
