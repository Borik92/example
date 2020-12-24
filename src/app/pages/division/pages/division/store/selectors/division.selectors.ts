import {AppStateTypesEnum} from '@enums/app-state-types.enum';
import {IAppStateModel} from '@interfaces/app-state.interface';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {adapter} from '@pages/division/pages/division/store/division-initial.state';
import {IDivisionStateModel} from '@pages/division/pages/division/store/division-state.interface';

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const divisionFeatureSelector = createFeatureSelector<IAppStateModel,
  IDivisionStateModel>
(AppStateTypesEnum.Division);

export const isCreatingDivisionSelector = createSelector(
  divisionFeatureSelector,
  (state: IDivisionStateModel) => state.isCreatingDivision
);

export const isGettingDivisionListSelector = createSelector(
  divisionFeatureSelector,
  (state: IDivisionStateModel) => state.isGettingDivisionList
);

export const isGettingOneDivisionSelector = createSelector(
  divisionFeatureSelector,
  (state: IDivisionStateModel) => state.isGettingOneDivision
);

export const isEditingDivisionSelector = createSelector(
  divisionFeatureSelector,
  (state: IDivisionStateModel) => state.isEditingDivision
);

export const isDeletingDivisionSelector = createSelector(
  divisionFeatureSelector,
  (state: IDivisionStateModel) => state.isDeletingDivision
);

export const divisionListSelector = createSelector(
  divisionFeatureSelector,
  (state: IDivisionStateModel) => selectAll(state)
);

export const divisionSelector = createSelector(
  divisionFeatureSelector,
  (state: IDivisionStateModel, id: string) => state.entities[id]
);
