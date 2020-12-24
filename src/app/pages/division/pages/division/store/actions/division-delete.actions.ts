import {HttpErrorResponse} from '@angular/common/http';
import {createAction, props} from '@ngrx/store';
import {DivisianActionTypesEnum} from '@pages/division/pages/division/store/divisian-action-types.enum';

export const deleteDivisionAction = createAction(
  DivisianActionTypesEnum.DeleteDivision,
  props<{id: string}>()
);

export const deleteDivisionSuccessAction = createAction(
  DivisianActionTypesEnum.DeleteDivisionSuccess,
  props<{id: string}>()
);

export const deleteDivisionFailureAction = createAction(
  DivisianActionTypesEnum.DeleteDivisionFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
