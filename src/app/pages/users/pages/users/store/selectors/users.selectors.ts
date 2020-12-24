import {AppStateTypesEnum} from '@enums/app-state-types.enum';
import {IAppStateModel} from '@interfaces/app-state.interface';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {adapter} from '@pages/users/pages/users/store/users-initial.state';
import {IUsersStateModel} from '@pages/users/pages/users/store/users-state.interface';

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const usersFeatureSelector = createFeatureSelector<IAppStateModel,
  IUsersStateModel>
(AppStateTypesEnum.Users);

export const isCreatingUserSelector = createSelector(
  usersFeatureSelector,
  (state: IUsersStateModel) => state.isCreatingUser
);

export const usersListSelector = createSelector(
  usersFeatureSelector,
  (state: IUsersStateModel) => selectAll(state)
);

export const userSelector = createSelector(
  usersFeatureSelector,
  (state: IUsersStateModel, id: string) => state.entities[id]
);
