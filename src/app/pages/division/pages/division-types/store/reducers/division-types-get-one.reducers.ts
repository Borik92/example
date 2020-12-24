import {on} from '@ngrx/store';
import {
  getOneDivisionTypeAction,
  getOneDivisionTypeFailureAction,
  getOneDivisionTypeSuccessAction
} from '@pages/division/pages/division-types/store/actions/division-types-get-one.actions';
import {adapter} from '@pages/division/pages/division-types/store/division-types-initial.state';
import {IDivisionTypesStateModel} from '@pages/division/pages/division-types/store/division-types-state.interface';

export const getOneDivisionType = on(
  getOneDivisionTypeAction,
  (state: IDivisionTypesStateModel): IDivisionTypesStateModel => {
    return {
      ...state,
      isGettingOneDivisionType: true,
      validationErrors: null
    };
  }
);


export const getOneDivisionTypeSuccess = on(
  getOneDivisionTypeSuccessAction,
  (state: IDivisionTypesStateModel, {response}): IDivisionTypesStateModel => {
    return adapter.addOne(response, {
      ...state,
      isGettingOneDivisionType: false,
      validationErrors: null,
    });
  }
);

export const getOneDivisionTypeFailure = on(
  getOneDivisionTypeFailureAction,
  (state: IDivisionTypesStateModel, {errorResponse}): IDivisionTypesStateModel => {
    return {
      ...state,
      isGettingOneDivisionType: false,
      validationErrors: errorResponse
    };
  }
);
