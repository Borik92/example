import {HttpErrorResponse} from '@angular/common/http';
import {IRolesModel} from '@api/roles/res/roles.interface';
import {createAction, props} from '@ngrx/store';
import {RolesActionTypesEnum} from '@pages/users/pages/roles/store/roles-action-types.enum';

export const editRoleAction = createAction(
  RolesActionTypesEnum.EditRole,
  props<{ id: string, request: any }>()
);

export const editRoleSuccessAction = createAction(
  RolesActionTypesEnum.EditRoleSuccess,
  props<{ response: IRolesModel }>()
);

export const editRoleFailureAction = createAction(
  RolesActionTypesEnum.EditRoleFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
