import {Action, createReducer} from '@ngrx/store';
import {divisionTypesInitialState} from '@pages/division/pages/division-types/store/division-types-initial.state';
import {IDivisionTypesStateModel} from '@pages/division/pages/division-types/store/division-types-state.interface';
import {
  createDivisionType,
  createDivisionTypeFailure,
  createDivisionTypeSuccess
} from '@pages/division/pages/division-types/store/reducers/division-types-create.reducers';
import {
  deleteDivisionType,
  deleteDivisionTypeFailure,
  deleteDivisionTypeSuccess
} from '@pages/division/pages/division-types/store/reducers/division-types-delete.reducers';
import {
  editDivisionType,
  editDivisionTypeFailure,
  editDivisionTypeSuccess
} from '@pages/division/pages/division-types/store/reducers/division-types-edit.reducers';
import {
  getOneDivisionType,
  getOneDivisionTypeFailure,
  getOneDivisionTypeSuccess
} from '@pages/division/pages/division-types/store/reducers/division-types-get-one.reducers';
import {
  divisionTypesList,
  divisionTypesListFailure,
  divisionTypesListSuccess
} from '@pages/division/pages/division-types/store/reducers/division-types-list.reducers';

const initReducer = createReducer(
  divisionTypesInitialState,
  divisionTypesList,
  divisionTypesListSuccess,
  divisionTypesListFailure,
  getOneDivisionType,
  getOneDivisionTypeSuccess,
  getOneDivisionTypeFailure,
  editDivisionType,
  editDivisionTypeSuccess,
  editDivisionTypeFailure,
  deleteDivisionType,
  deleteDivisionTypeSuccess,
  deleteDivisionTypeFailure,
  createDivisionType,
  createDivisionTypeSuccess,
  createDivisionTypeFailure
);

export function divisionTypesReducer(state: IDivisionTypesStateModel, action: Action) {
  return initReducer(state, action);
}
