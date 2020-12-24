import {on} from '@ngrx/store';
import {
  deleteDivisionAction,
  deleteDivisionFailureAction,
  deleteDivisionSuccessAction
} from '@pages/division/pages/division/store/actions/division-delete.actions';
import {adapter} from '@pages/division/pages/division/store/division-initial.state';
import {IDivisionStateModel} from '@pages/division/pages/division/store/division-state.interface';

export const deleteDivision = on(
  deleteDivisionAction,
  (state: IDivisionStateModel): IDivisionStateModel => {
    return {
      ...state,
      isDeletingDivision: true,
      validationErrors: null
    };
  }
);

export const deleteDivisionSuccess = on(
  deleteDivisionSuccessAction,
  (state: IDivisionStateModel, {id}): IDivisionStateModel => {
    return adapter.removeOne(id, {
      ...state,
      isDeletingDivision: false,
      validationErrors: null,
    });
  }
);

export const deleteDivisionFailure = on(
  deleteDivisionFailureAction,
  (state: IDivisionStateModel, {errorResponse}): IDivisionStateModel => {
    return {
      ...state,
      isDeletingDivision: false,
      validationErrors: errorResponse
    };
  }
);
