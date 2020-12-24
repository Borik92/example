import {HttpErrorResponse} from '@angular/common/http';
import {IDivisionModel} from '@api/division/res/division.interface';
import {createAction, props} from '@ngrx/store';
import {DivisianActionTypesEnum} from '@pages/division/pages/division/store/divisian-action-types.enum';

export const createDivisionAction = createAction(
  DivisianActionTypesEnum.CreateDivision,
  props<{ request: any }>()
);

export const createDivisionSuccessAction = createAction(
  DivisianActionTypesEnum.CreateDivisionSuccess,
  props<{ response: IDivisionModel }>()
);

export const createDivisionFailureAction = createAction(
  DivisianActionTypesEnum.CreateDivisionFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
