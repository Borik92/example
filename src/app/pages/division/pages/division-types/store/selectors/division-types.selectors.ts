import {AppStateTypesEnum} from '@enums/app-state-types.enum';
import {IAppStateModel} from '@interfaces/app-state.interface';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {adapter} from '@pages/division/pages/division-types/store/division-types-initial.state';
import {IDivisionTypesStateModel} from '@pages/division/pages/division-types/store/division-types-state.interface';

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const divisionTypesFeatureSelector = createFeatureSelector<IAppStateModel,
  IDivisionTypesStateModel>
(AppStateTypesEnum.DivisionTypes);

export const isCreatingDivisionTypeSelector = createSelector(
  divisionTypesFeatureSelector,
  (state: IDivisionTypesStateModel) => state.isCreatingDivisionType
);

export const isGettingDivisionTypesListSelector = createSelector(
  divisionTypesFeatureSelector,
  (state: IDivisionTypesStateModel) => state.isGettingDivisionTypesList
);

export const isGettingOneDivisionTypeSelector = createSelector(
  divisionTypesFeatureSelector,
  (state: IDivisionTypesStateModel) => state.isGettingOneDivisionType
);

export const isEditingDivisionTypeSelector = createSelector(
  divisionTypesFeatureSelector,
  (state: IDivisionTypesStateModel) => state.isEditingDivisionType
);

export const isDeletingDivisionTypeSelector = createSelector(
  divisionTypesFeatureSelector,
  (state: IDivisionTypesStateModel) => state.isDeletingDivisionType
);

export const divisionTypesListSelector = createSelector(
  divisionTypesFeatureSelector,
  (state: IDivisionTypesStateModel) => selectAll(state)
);

export const divisionTypeSelector = createSelector(
  divisionTypesFeatureSelector,
  (state: IDivisionTypesStateModel, id: string) => state.entities[id]
);
