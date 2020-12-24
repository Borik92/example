import {on} from '@ngrx/store';
import {
  getDivisionTypesListAction,
  getDivisionTypesListFailureAction,
  getDivisionTypesListSuccessAction
} from '@pages/division/pages/division-types/store/actions/division-types-list.actions';
import {adapter} from '@pages/division/pages/division-types/store/division-types-initial.state';
import {IDivisionTypesStateModel} from '@pages/division/pages/division-types/store/division-types-state.interface';

export const divisionTypesList = on(
  getDivisionTypesListAction,
  (state: IDivisionTypesStateModel): IDivisionTypesStateModel => {
    return {
      ...state,
      isGettingDivisionTypesList: true,
      validationErrors: null
    };
  }
);

export const divisionTypesListSuccess = on(
  getDivisionTypesListSuccessAction,
  (state: IDivisionTypesStateModel, {response}): IDivisionTypesStateModel => {
    return adapter.addMany(response, {
      ...state,
      entities: {},
      ids: [],
      isGettingDivisionTypesList: false,
      validationErrors: null,
    });
  }
);

export const divisionTypesListFailure = on(
  getDivisionTypesListFailureAction,
  (state: IDivisionTypesStateModel, {errorResponse}): IDivisionTypesStateModel => {
    return {
      ...state,
      isGettingDivisionTypesList: false,
      validationErrors: errorResponse
    };
  }
);
