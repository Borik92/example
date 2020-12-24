import {HttpErrorResponse} from '@angular/common/http';
import {IRolesModel} from '@api/roles/res/roles.interface';
import {createAction, props} from '@ngrx/store';
import {RolesActionTypesEnum} from '@pages/users/pages/roles/store/roles-action-types.enum';

export const getOneRoleAction = createAction(
  RolesActionTypesEnum.GetOneRole,
  props<{ id: string }>()
);

export const getOneRoleSuccessAction = createAction(
  RolesActionTypesEnum.GetOneRoleSuccess,
  props<{ response: IRolesModel }>()
);

export const getOneRoleFailureAction = createAction(
  RolesActionTypesEnum.GetOneRoleFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
