import {HttpErrorResponse} from '@angular/common/http';
import {IRolesModel} from '@api/roles/res/roles.interface';
import {createAction, props} from '@ngrx/store';
import {RolesActionTypesEnum} from '@pages/users/pages/roles/store/roles-action-types.enum';

export const getRolesListAction = createAction(
  RolesActionTypesEnum.GetRolesList
);

export const getRolesListSuccessAction = createAction(
  RolesActionTypesEnum.GetRolesListSuccess,
  props<{ response: IRolesModel[] }>()
);

export const getRolesListFailureAction = createAction(
  RolesActionTypesEnum.GetRolesListFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
