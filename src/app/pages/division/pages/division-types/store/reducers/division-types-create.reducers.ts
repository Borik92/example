import {on} from '@ngrx/store';
import {
  createDivisionTypeAction,
  createDivisionTypeFailureAction,
  createDivisionTypeSuccessAction
} from '@pages/division/pages/division-types/store/actions/division-types-create.actions';
import {IDivisionTypesStateModel} from '@pages/division/pages/division-types/store/division-types-state.interface';

export const createDivisionType = on(
  createDivisionTypeAction,
  (state: IDivisionTypesStateModel): IDivisionTypesStateModel => {
    return {
      ...state,
      isCreatingDivisionType: true,
      validationErrors: null,
    };
  }
);

export const createDivisionTypeSuccess = on(
  createDivisionTypeSuccessAction,
  (state: IDivisionTypesStateModel): IDivisionTypesStateModel => {
    return {
      ...state,
      isCreatingDivisionType: false,
      validationErrors: null
    };
  }
);

export const createDivisionTypeFailure = on(
  createDivisionTypeFailureAction,
  (state: IDivisionTypesStateModel, {errorResponse}): IDivisionTypesStateModel => {
    return {
      ...state,
      isCreatingDivisionType: false,
      validationErrors: errorResponse
    };
  }
);
