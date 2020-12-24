import {on} from '@ngrx/store';
import {
  deleteRolesAction,
  deleteRolesFailureAction,
  deleteRolesSuccessAction
} from '@pages/users/pages/roles/store/actions/roles-delete.actions';
import {adapter} from '@pages/users/pages/roles/store/roles-initial.state';
import {IRolesStateModel} from '@pages/users/pages/roles/store/roles-state.interface';

export const roleDelete = on(
  deleteRolesAction,
  (state: IRolesStateModel): IRolesStateModel => {
    return ({
      ...state,
      isDeletingRole: true,
      validationErrors: null
    });
  }
);

export const roleDeleteSuccess = on(
  deleteRolesSuccessAction,
  (state: IRolesStateModel, {id}): IRolesStateModel => {
    return adapter.removeOne(id, {
      ...state,
      isDeletingRole: false,
      validationErrors: null
    });
  }
);

export const roleDeleteFailure = on(
  deleteRolesFailureAction,
  (state: IRolesStateModel, {errorResponse}) => {
    return ({
      ...state,
      isDeletingRole: false,
      validationErrors: errorResponse
    });
  }
);
