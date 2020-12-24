import {HttpErrorResponse} from '@angular/common/http';
import {IDivisionModel} from '@api/division/res/division.interface';
import {createAction, props} from '@ngrx/store';
import {DivisianActionTypesEnum} from '@pages/division/pages/division/store/divisian-action-types.enum';

export const editDivisionAction = createAction(
  DivisianActionTypesEnum.EditDivision,
  props<{id: string, request: any}>()
);

export const editDivisionSuccessAction = createAction(
  DivisianActionTypesEnum.EditDivisionSuccess,
  props<{response: IDivisionModel}>()
);

export const editDivisionFailureAction = createAction(
  DivisianActionTypesEnum.EditDivisionFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
