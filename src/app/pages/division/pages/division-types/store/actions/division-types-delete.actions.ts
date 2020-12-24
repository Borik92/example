import {HttpErrorResponse} from '@angular/common/http';
import {createAction, props} from '@ngrx/store';
import {DivisianTypesActionTypesEnum} from '@pages/division/pages/division-types/store/divisian-types-action-types.enum';

export const deleteDivisionTypeAction = createAction(
  DivisianTypesActionTypesEnum.DeleteDivisionType,
  props<{ id: string }>()
);

export const deleteDivisionTypeSuccessAction = createAction(
  DivisianTypesActionTypesEnum.DeleteDivisionTypeSuccess,
  props<{ id: string }>()
);

export const deleteDivisionTypeFailureAction = createAction(
  DivisianTypesActionTypesEnum.DeleteDivisionTypeFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
