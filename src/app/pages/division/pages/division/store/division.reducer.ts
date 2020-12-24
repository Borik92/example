import {Action, createReducer} from '@ngrx/store';
import {divisionInitialState} from '@pages/division/pages/division/store/division-initial.state';
import {IDivisionStateModel} from '@pages/division/pages/division/store/division-state.interface';
import {
  createDivision,
  createDivisionFailure,
  createDivisionSuccess
} from '@pages/division/pages/division/store/reducers/division-create.reducers';
import {
  deleteDivision,
  deleteDivisionFailure,
  deleteDivisionSuccess
} from '@pages/division/pages/division/store/reducers/division-delete.reducers';
import {
  editDivision,
  editDivisionFailure,
  editDivisionSuccess
} from '@pages/division/pages/division/store/reducers/division-edit.reducers';
import {
  getOneDivision,
  getOneDivisionFailure,
  getOneDivisionSuccess
} from '@pages/division/pages/division/store/reducers/division-get-one.reducers';
import {
  divisionList,
  divisionListFailure,
  divisionListSuccess
} from '@pages/division/pages/division/store/reducers/division-list.reducers';

const initReducer = createReducer(
  divisionInitialState,
  divisionList,
  divisionListSuccess,
  divisionListFailure,
  getOneDivision,
  getOneDivisionSuccess,
  getOneDivisionFailure,
  editDivision,
  editDivisionSuccess,
  editDivisionFailure,
  deleteDivision,
  deleteDivisionSuccess,
  deleteDivisionFailure,
  createDivision,
  createDivisionSuccess,
  createDivisionFailure
);

export function divisionReducer(state: IDivisionStateModel, action: Action) {
  return initReducer(state, action);
}
