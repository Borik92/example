import {createAction, props} from '@ngrx/store';
import {HttpErrorResponse} from '@angular/common/http';
import {UserRegionsActionTypesEnum} from '../user-regions-action-types.enum';
import {IUserRegionsModel} from '@api/user-regions/res/user-regions.interface';

export const getOneUserRegionAction = createAction(
  UserRegionsActionTypesEnum.GetOneUserRegion,
  props<{ id: string }>()
);

export const getOneUserRegionSuccessAction = createAction(
  UserRegionsActionTypesEnum.GetOneUserRegionSuccess,
  props<{ response: IUserRegionsModel }>()
);

export const getOneUserRegionFailureAction = createAction(
  UserRegionsActionTypesEnum.GetOneUserRegionSuccess,
  props<{ errorResponse: HttpErrorResponse }>()
);
