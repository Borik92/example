import {AppStateTypesEnum} from '@enums/app-state-types.enum';
import {IAppStateModel} from '@interfaces/app-state.interface';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {adapter} from '@pages/permissions/store/permissions-initial.state';
import {IPermissionsStateModel} from '@pages/permissions/store/permissions-state.interface';

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const permissionsFeatureSelector = createFeatureSelector<IAppStateModel,
  IPermissionsStateModel>
(AppStateTypesEnum.Permissions);

export const isGettingPermissionsListSelector = createSelector(
  permissionsFeatureSelector,
  (state: IPermissionsStateModel) => state.isGettingPermissionsList
);

export const permissionsListSelector = createSelector(
  permissionsFeatureSelector,
  (state: IPermissionsStateModel) => selectAll(state)
);
