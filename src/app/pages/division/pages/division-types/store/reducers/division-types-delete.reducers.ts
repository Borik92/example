import {on} from '@ngrx/store';
import {
  deleteDivisionTypeAction,
  deleteDivisionTypeFailureAction,
  deleteDivisionTypeSuccessAction
} from '@pages/division/pages/division-types/store/actions/division-types-delete.actions';
import {adapter} from '@pages/division/pages/division-types/store/division-types-initial.state';
import {IDivisionTypesStateModel} from '@pages/division/pages/division-types/store/division-types-state.interface';

export const deleteDivisionType = on(
  deleteDivisionTypeAction,
  (state: IDivisionTypesStateModel): IDivisionTypesStateModel => {
    return {
      ...state,
      isDeletingDivisionType: true,
      validationErrors: null
    };
  }
);

export const deleteDivisionTypeSuccess = on(
  deleteDivisionTypeSuccessAction,
  (state: IDivisionTypesStateModel, {id}): IDivisionTypesStateModel => {
    return adapter.removeOne(id, {
      ...state,
      isDeletingDivisionType: false,
      validationErrors: null,
    });
  }
);

export const deleteDivisionTypeFailure = on(
  deleteDivisionTypeFailureAction,
  (state: IDivisionTypesStateModel, {errorResponse}): IDivisionTypesStateModel => {
    return {
      ...state,
      isDeletingDivisionType: false,
      validationErrors: errorResponse
    };
  }
);
