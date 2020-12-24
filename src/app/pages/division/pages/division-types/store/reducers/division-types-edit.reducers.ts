import {on} from '@ngrx/store';
import {
  editDivisionTypeAction,
  editDivisionTypeFailureAction,
  editDivisionTypeSuccessAction
} from '@pages/division/pages/division-types/store/actions/division-types-edit.actions';
import {adapter} from '@pages/division/pages/division-types/store/division-types-initial.state';
import {IDivisionTypesStateModel} from '@pages/division/pages/division-types/store/division-types-state.interface';

export const editDivisionType = on(
  editDivisionTypeAction,
  (state: IDivisionTypesStateModel): IDivisionTypesStateModel => {
    return {
      ...state,
      isEditingDivisionType: true,
      validationErrors: null
    };
  }
);

export const editDivisionTypeSuccess = on(
  editDivisionTypeSuccessAction,
  (state: IDivisionTypesStateModel, {response}): IDivisionTypesStateModel => {
    return adapter.upsertOne(response, {
      ...state,
      isEditingDivisionType: false,
      validationErrors: null,
    });
  }
);

export const editDivisionTypeFailure = on(
  editDivisionTypeFailureAction,
  (state: IDivisionTypesStateModel, {errorResponse}): IDivisionTypesStateModel => {
    return {
      ...state,
      isEditingDivisionType: false,
      validationErrors: errorResponse
    };
  }
);
