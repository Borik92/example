import {createAction, props} from '@ngrx/store';
import {HttpErrorResponse} from '@angular/common/http';
import {UserRegionsActionTypesEnum} from '../user-regions-action-types.enum';
import {IUserRegionsModel} from '@api/user-regions/res/user-regions.interface';

export const editUserRegionAction = createAction(
  UserRegionsActionTypesEnum.EditUserRegion,
  props<{ id: string, request: any }>()
);

export const editUserRegionSuccessAction = createAction(
  UserRegionsActionTypesEnum.EditUserRegionSuccess,
  props<{ response: IUserRegionsModel }>()
);

export const editUserRegionFailureAction = createAction(
  UserRegionsActionTypesEnum.EditUserRegionFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
