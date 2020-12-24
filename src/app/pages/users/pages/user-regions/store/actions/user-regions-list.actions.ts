import {createAction, props} from '@ngrx/store';
import {HttpErrorResponse} from '@angular/common/http';
import {UserRegionsActionTypesEnum} from '../user-regions-action-types.enum';
import {IUserRegionsModel} from '@api/user-regions/res/user-regions.interface';

export const getUserRegionsListAction = createAction(
  UserRegionsActionTypesEnum.GetUserRegionsList,
  props<{ idValue: string, nameValue: string }>()
);

export const getUserRegionsListSuccessAction = createAction(
  UserRegionsActionTypesEnum.GetUserRegionsListSuccess,
  props<{ response: IUserRegionsModel[] }>()
);

export const getUserRegionsListFailureAction = createAction(
  UserRegionsActionTypesEnum.GetUserRegionsListFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);

