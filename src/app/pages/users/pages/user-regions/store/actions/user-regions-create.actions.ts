import {createAction, props} from '@ngrx/store';
import {HttpErrorResponse} from '@angular/common/http';
import {UserRegionsActionTypesEnum} from '../user-regions-action-types.enum';
import {IUserRegionsModel} from '@api/user-regions/res/user-regions.interface';

export const createUserRegionAction = createAction(
  UserRegionsActionTypesEnum.CreateUserRegion,
  props<{ request: any }>()
);

export const createUserRegionSuccessAction = createAction(
  UserRegionsActionTypesEnum.CreateUserRegionSuccess,
  props<{ response: IUserRegionsModel }>()
);

export const createUserRegionFailureAction = createAction(
  UserRegionsActionTypesEnum.CreateUserRegionFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);


