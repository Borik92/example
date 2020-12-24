import {HttpErrorResponse} from '@angular/common/http';
import {IDivisionTypeModel} from '@api/division-types/res/division-type.interface';
import {createAction, props} from '@ngrx/store';
import {DivisianTypesActionTypesEnum} from '@pages/division/pages/division-types/store/divisian-types-action-types.enum';

export const getOneDivisionTypeAction = createAction(
  DivisianTypesActionTypesEnum.GetOneDivisionType,
  props<{ id: string }>()
);

export const getOneDivisionTypeSuccessAction = createAction(
  DivisianTypesActionTypesEnum.GetOneDivisionTypeSuccess,
  props<{ response: IDivisionTypeModel }>()
);

export const getOneDivisionTypeFailureAction = createAction(
  DivisianTypesActionTypesEnum.GetOneDivisionTypeFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
