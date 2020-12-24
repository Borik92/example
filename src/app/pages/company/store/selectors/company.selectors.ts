import {AppStateTypesEnum} from '@enums/app-state-types.enum';
import {IAppStateModel} from '@interfaces/app-state.interface';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {adapter} from '@pages/company/store/company-initial.state';
import {ICompanyStateModel} from '@pages/company/store/company-state.interface';

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const companyFeatureSelector = createFeatureSelector<IAppStateModel,
  ICompanyStateModel>
(AppStateTypesEnum.Company);

export const isCreatingCompanySelector = createSelector(
  companyFeatureSelector,
  (state: ICompanyStateModel) => state.isCreatingCompany
);

export const isGettingCompanyListSelector = createSelector(
  companyFeatureSelector,
  (state: ICompanyStateModel) => state.isGettingCompanyList
);

export const isGettingOneCompanySelector = createSelector(
  companyFeatureSelector,
  (state: ICompanyStateModel) => state.isGettingOneCompany
);

export const isEditingCompanySelector = createSelector(
  companyFeatureSelector,
  (state: ICompanyStateModel) => state.isEditingCompany
);

export const isDeletingCompanySelector = createSelector(
  companyFeatureSelector,
  (state: ICompanyStateModel) => state.isDeletingCompany
);

export const companyListSelector = createSelector(
  companyFeatureSelector,
  (state: ICompanyStateModel) => selectAll(state)
);

export const companySelector = createSelector(
  companyFeatureSelector,
  (state: ICompanyStateModel, id: string) => state.entities[id]
);
