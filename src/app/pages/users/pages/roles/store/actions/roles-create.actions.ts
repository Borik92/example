import {HttpErrorResponse} from '@angular/common/http';
import {IRolesModel} from '@api/roles/res/roles.interface';
import {createAction, props} from '@ngrx/store';
import {RolesActionTypesEnum} from '@pages/users/pages/roles/store/roles-action-types.enum';

export const createRoleAction = createAction(
  RolesActionTypesEnum.CreateRole,
  props<{ request: any }>()
);

export const createRoleSuccessAction = createAction(
  RolesActionTypesEnum.CreateRoleSuccess,
  props<{ response: IRolesModel }>()
);

export const createRoleFailureAction = createAction(
  RolesActionTypesEnum.CreateRoleFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
