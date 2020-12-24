import {on} from '@ngrx/store';
import {
  getOneDivisionAction,
  getOneDivisionFailureAction,
  getOneDivisionSuccessAction
} from '@pages/division/pages/division/store/actions/division-get-one.actions';
import {adapter} from '@pages/division/pages/division/store/division-initial.state';
import {IDivisionStateModel} from '@pages/division/pages/division/store/division-state.interface';

export const getOneDivision = on(
  getOneDivisionAction,
  (state: IDivisionStateModel): IDivisionStateModel => {
    return {
      ...state,
      isGettingOneDivision: true,
      validationErrors: null
    };
  }
);


export const getOneDivisionSuccess = on(
  getOneDivisionSuccessAction,
  (state: IDivisionStateModel, {response}): IDivisionStateModel => {
    return adapter.addOne(response, {
      ...state,
      isGettingOneDivision: false,
      validationErrors: null,
    });
  }
);

export const getOneDivisionFailure = on(
  getOneDivisionFailureAction,
  (state: IDivisionStateModel, {errorResponse}): IDivisionStateModel => {
    return {
      ...state,
      isGettingOneDivision: false,
      validationErrors: errorResponse
    };
  }
);
