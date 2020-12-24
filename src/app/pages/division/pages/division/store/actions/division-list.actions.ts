import {HttpErrorResponse} from '@angular/common/http';
import {IDivisionModel} from '@api/division/res/division.interface';
import {createAction, props} from '@ngrx/store';
import {DivisianActionTypesEnum} from '@pages/division/pages/division/store/divisian-action-types.enum';

export const getDivisionListAction = createAction(
  DivisianActionTypesEnum.GetDivisionList
);

export const getDivisionListSuccessAction = createAction(
  DivisianActionTypesEnum.GetDivisionListSuccess,
  props<{ response: IDivisionModel[] }>()
);

export const getDivisionListFailureAction = createAction(
  DivisianActionTypesEnum.GetDivisionListFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
