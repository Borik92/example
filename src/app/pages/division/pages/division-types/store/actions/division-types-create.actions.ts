import {HttpErrorResponse} from '@angular/common/http';
import {IDivisionTypeModel} from '@api/division-types/res/division-type.interface';
import {createAction, props} from '@ngrx/store';
import {DivisianTypesActionTypesEnum} from '@pages/division/pages/division-types/store/divisian-types-action-types.enum';

export const createDivisionTypeAction = createAction(
  DivisianTypesActionTypesEnum.CreateDivisionType,
  props<{ request: any }>()
);

export const createDivisionTypeSuccessAction = createAction(
  DivisianTypesActionTypesEnum.CreateDivisionTypeSuccess,
  props<{ response: IDivisionTypeModel }>()
);

export const createDivisionTypeFailureAction = createAction(
  DivisianTypesActionTypesEnum.CreateDivisionTypeFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
