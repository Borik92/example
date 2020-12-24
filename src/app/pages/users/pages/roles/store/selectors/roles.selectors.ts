import {AppStateTypesEnum} from '@enums/app-state-types.enum';
import {IAppStateModel} from '@interfaces/app-state.interface';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {adapter} from '@pages/users/pages/roles/store/roles-initial.state';
import {IRolesStateModel} from '@pages/users/pages/roles/store/roles-state.interface';

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const rolesFeatureSelector = createFeatureSelector<IAppStateModel,
  IRolesStateModel>
(AppStateTypesEnum.Roles);

export const isGettingProductCategoriesListSelector = createSelector(
  rolesFeatureSelector,
  (state: IRolesStateModel) => state.isGettingRolesList
);

export const isGettingOneRoleSelector = createSelector(
  rolesFeatureSelector,
  (state: IRolesStateModel) => state.isGettingOneRole
);

export const isEditingRoleSelector = createSelector(
  rolesFeatureSelector,
  (state: IRolesStateModel) => state.isEditingRole
);

export const isDeletingRoleSelector = createSelector(
  rolesFeatureSelector,
  (state: IRolesStateModel) => state.isDeletingRole
);

export const isCreatingRoleSelector = createSelector(
  rolesFeatureSelector,
  (state: IRolesStateModel) => state.isCreatingRole
);

export const rolesListSelector = createSelector(
  rolesFeatureSelector,
  (state: IRolesStateModel) => selectAll(state)
);

export const roleSelector = createSelector(
  rolesFeatureSelector,
  (state: IRolesStateModel, id: string) => state.entities[id]
);
