import {HttpErrorResponse} from '@angular/common/http';
import {IDivisionTypeModel} from '@api/division-types/res/division-type.interface';
import {createAction, props} from '@ngrx/store';
import {DivisianTypesActionTypesEnum} from '@pages/division/pages/division-types/store/divisian-types-action-types.enum';

export const getDivisionTypesListAction = createAction(
  DivisianTypesActionTypesEnum.GetDivisionTypesList
);

export const getDivisionTypesListSuccessAction = createAction(
  DivisianTypesActionTypesEnum.GetDivisionTypesListSuccess,
  props<{ response: IDivisionTypeModel[] }>()
);

export const getDivisionTypesListFailureAction = createAction(
  DivisianTypesActionTypesEnum.GetDivisionTypesListFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
