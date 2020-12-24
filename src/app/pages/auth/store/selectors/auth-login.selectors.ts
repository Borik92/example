import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IAuthStateModel} from '@pages/auth/store/auth-state.interface';
import {IAppStateModel} from '@interfaces/app-state.interface';
import {AppStateTypesEnum} from '@enums/app-state-types.enum';

export const authFeatureSelector = createFeatureSelector<IAppStateModel,
  IAuthStateModel>
(AppStateTypesEnum.Auth);

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthStateModel) => authState.isSubmitting
);

export const userInfoSelector = createSelector(
  authFeatureSelector,
  (authState: IAuthStateModel) => authState.user
);
