import {on} from '@ngrx/store';
import {
  editDivisionAction,
  editDivisionFailureAction,
  editDivisionSuccessAction
} from '@pages/division/pages/division/store/actions/division-edit.actions';
import {adapter} from '@pages/division/pages/division/store/division-initial.state';
import {IDivisionStateModel} from '@pages/division/pages/division/store/division-state.interface';

export const editDivision = on(
  editDivisionAction,
  (state: IDivisionStateModel): IDivisionStateModel => {
    return {
      ...state,
      isEditingDivision: true,
      validationErrors: null
    };
  }
);

export const editDivisionSuccess = on(
  editDivisionSuccessAction,
  (state: IDivisionStateModel, {response}): IDivisionStateModel => {
    return adapter.upsertOne(response, {
      ...state,
      isEditingDivision: false,
      validationErrors: null,
    });
  }
);

export const editDivisionFailure = on(
  editDivisionFailureAction,
  (state: IDivisionStateModel, {errorResponse}): IDivisionStateModel => {
    return {
      ...state,
      isEditingDivision: false,
      validationErrors: errorResponse
    };
  }
);
