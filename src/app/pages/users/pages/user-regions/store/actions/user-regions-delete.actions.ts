import {createAction, props} from '@ngrx/store';
import {HttpErrorResponse} from '@angular/common/http';
import {UserRegionsActionTypesEnum} from '../user-regions-action-types.enum';

export const deleteUserRegionAction = createAction(
  UserRegionsActionTypesEnum.DeleteUserRegion,
  props<{ id: string }>()
);

export const deleteUserRegionSuccessAction = createAction(
  UserRegionsActionTypesEnum.DeleteUserRegionSuccess,
  props<{ id: string }>()
);

export const deleteUserRegionFailureAction = createAction(
  UserRegionsActionTypesEnum.DeleteUserRegionFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
