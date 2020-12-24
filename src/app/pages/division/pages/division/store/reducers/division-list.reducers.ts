import {on} from '@ngrx/store';
import {
  getDivisionListAction,
  getDivisionListFailureAction,
  getDivisionListSuccessAction
} from '@pages/division/pages/division/store/actions/division-list.actions';
import {adapter} from '@pages/division/pages/division/store/division-initial.state';
import {IDivisionStateModel} from '@pages/division/pages/division/store/division-state.interface';

export const divisionList = on(
  getDivisionListAction,
  (state: IDivisionStateModel): IDivisionStateModel => {
    return {
      ...state,
      isGettingDivisionList: true,
      validationErrors: null
    };
  }
);

export const divisionListSuccess = on(
  getDivisionListSuccessAction,
  (state: IDivisionStateModel, {response}): IDivisionStateModel => {
    return adapter.addMany(response, {
      ...state,
      entities: {},
      ids: [],
      isGettingDivisionList: false,
      validationErrors: null,
    });
  }
);

export const divisionListFailure = on(
  getDivisionListFailureAction,
  (state: IDivisionStateModel, {errorResponse}): IDivisionStateModel => {
    return {
      ...state,
      isGettingDivisionList: false,
      validationErrors: errorResponse
    };
  }
);
