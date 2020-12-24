import {on} from '@ngrx/store';
import {
  editRoleAction,
  editRoleFailureAction,
  editRoleSuccessAction
} from '@pages/users/pages/roles/store/actions/roles-edit.actions';
import {adapter} from '@pages/users/pages/roles/store/roles-initial.state';
import {IRolesStateModel} from '@pages/users/pages/roles/store/roles-state.interface';

export const editRole =
  on(editRoleAction,
    (state: IRolesStateModel): IRolesStateModel => {
      return ({
        ...state,
        isEditingRole: true,
        validationErrors: null
      });
    }
  );

export const editRoleSuccess = on(
  editRoleSuccessAction,
  (state: IRolesStateModel, {response}): IRolesStateModel => {
    return adapter.addOne(response, {
      ...state,
      isEditingRole: false,
      validationErrors: null
    });
  }
);

export const editRoleFailure = on(
  editRoleFailureAction,
  (state: IRolesStateModel, {errorResponse}): IRolesStateModel => {
    return ({
      ...state,
      isEditingRole: false,
      validationErrors: errorResponse
    });
  }
);
