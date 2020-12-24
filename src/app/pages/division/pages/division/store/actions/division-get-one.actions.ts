import {HttpErrorResponse} from '@angular/common/http';
import {IDivisionModel} from '@api/division/res/division.interface';
import {createAction, props} from '@ngrx/store';
import {DivisianActionTypesEnum} from '@pages/division/pages/division/store/divisian-action-types.enum';

export const getOneDivisionAction = createAction(
  DivisianActionTypesEnum.GetOneDivision,
  props<{ id: string }>()
);

export const getOneDivisionSuccessAction = createAction(
  DivisianActionTypesEnum.GetOneDivisionSuccess,
  props<{ response: IDivisionModel }>()
);

export const getOneDivisionFailureAction = createAction(
  DivisianActionTypesEnum.GetOneDivisionFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
