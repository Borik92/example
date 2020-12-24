import {on} from '@ngrx/store';
import {
  createRoleAction,
  createRoleFailureAction,
  createRoleSuccessAction
} from '@pages/users/pages/roles/store/actions/roles-create.actions';
import {adapter} from '@pages/users/pages/roles/store/roles-initial.state';
import {IRolesStateModel} from '@pages/users/pages/roles/store/roles-state.interface';

export const roleCreate = on(
  createRoleAction,
  (state: IRolesStateModel): IRolesStateModel => {
    return {
      ...state,
      isCreatingRole: true,
      validationErrors: null
    };
  }
);

export const roleCreateSuccess = on(
  createRoleSuccessAction,
  (state: IRolesStateModel, {response}): IRolesStateModel => {
    return adapter.addOne(response, {
      ...state,
      isCreatingRole: false,
      validationErrors: null
    });
  }
);

export const roleCreateFailure = on(
  createRoleFailureAction,
  (state: IRolesStateModel, {errorResponse}): IRolesStateModel => {
    return {
      ...state,
      isCreatingRole: false,
      validationErrors: errorResponse
    };
  }
);
