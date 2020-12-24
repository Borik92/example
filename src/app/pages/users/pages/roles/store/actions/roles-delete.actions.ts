import {HttpErrorResponse} from '@angular/common/http';
import {createAction, props} from '@ngrx/store';
import {RolesActionTypesEnum} from '@pages/users/pages/roles/store/roles-action-types.enum';

export const deleteRolesAction = createAction(
  RolesActionTypesEnum.DeleteRole,
  props<{ id: string }>()
);

export const deleteRolesSuccessAction = createAction(
  RolesActionTypesEnum.DeleteRoleSuccess,
  props<{ id: string }>()
);

export const deleteRolesFailureAction = createAction(
  RolesActionTypesEnum.DeleteRoleFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
