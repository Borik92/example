import {on} from '@ngrx/store';
import {
  createDivisionAction,
  createDivisionFailureAction,
  createDivisionSuccessAction
} from '@pages/division/pages/division/store/actions/division-create.actions';
import {IDivisionStateModel} from '@pages/division/pages/division/store/division-state.interface';

export const createDivision = on(
  createDivisionAction,
  (state: IDivisionStateModel): IDivisionStateModel => {
    return {
      ...state,
      isCreatingDivision: true,
      validationErrors: null,
    };
  }
);

export const createDivisionSuccess = on(
  createDivisionSuccessAction,
  (state: IDivisionStateModel): IDivisionStateModel => {
    return {
      ...state,
      isCreatingDivision: false,
      validationErrors: null
    };
  }
);

export const createDivisionFailure = on(
  createDivisionFailureAction,
  (state: IDivisionStateModel, {errorResponse}): IDivisionStateModel => {
    return {
      ...state,
      isCreatingDivision: false,
      validationErrors: errorResponse
    };
  }
);
