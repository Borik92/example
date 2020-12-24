import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IAppStateModel} from '@interfaces/app-state.interface';
import {AppStateTypesEnum} from '@enums/app-state-types.enum';
import {IUserRegionsStateModel} from '../user-regions-state.interface';
import {adapter} from '../user-regions-initial.state';

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const userRegionsFeatureSelector = createFeatureSelector<IAppStateModel,
  IUserRegionsStateModel>
(AppStateTypesEnum.UserRegions);

export const isGettingUserRegionsListSelector = createSelector(
  userRegionsFeatureSelector,
  (state: IUserRegionsStateModel) => state.isGettingUserRegionsList
);

export const isGetOneUserRegionSelector = createSelector(
  userRegionsFeatureSelector,
  (state: IUserRegionsStateModel) => state.isGettingOneUserRegion
);

export const isDeletingUserRegionSelector = createSelector(
  userRegionsFeatureSelector,
  (state: IUserRegionsStateModel) => state.isDeletingUserRegion
);

export const isEditingUserRegionSelector = createSelector(
  userRegionsFeatureSelector,
  (state: IUserRegionsStateModel) => state.isEditingUserRegion
);

export const isCreatingUserRegionSelector = createSelector(
  userRegionsFeatureSelector,
  (state: IUserRegionsStateModel) => state.isCreatingUserRegion
);

export const userRegionsListSelector = createSelector(
  userRegionsFeatureSelector,
  (state: IUserRegionsStateModel) => selectAll(state)
);

export const userRegionSelector = createSelector(
  userRegionsFeatureSelector,
  (state: IUserRegionsStateModel, id: string) => state.entities[id]
);
