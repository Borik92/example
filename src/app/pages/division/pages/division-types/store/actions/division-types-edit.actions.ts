import {HttpErrorResponse} from '@angular/common/http';
import {IDivisionTypeModel} from '@api/division-types/res/division-type.interface';
import {createAction, props} from '@ngrx/store';
import {DivisianTypesActionTypesEnum} from '@pages/division/pages/division-types/store/divisian-types-action-types.enum';

export const editDivisionTypeAction = createAction(
  DivisianTypesActionTypesEnum.EditDivisionType,
  props<{ id: string, request: any }>()
);

export const editDivisionTypeSuccessAction = createAction(
  DivisianTypesActionTypesEnum.EditDivisionTypeSuccess,
  props<{ response: IDivisionTypeModel }>()
);

export const editDivisionTypeFailureAction = createAction(
  DivisianTypesActionTypesEnum.EditDivisionTypeFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
