import {on} from '@ngrx/store';
import {
  deleteCompanyAction,
  deleteCompanyFailureAction,
  deleteCompanySuccessAction
} from '@pages/company/store/actions/company-delete.actions';
import {adapter} from '@pages/company/store/company-initial.state';
import {ICompanyStateModel} from '@pages/company/store/company-state.interface';

export const deleteCompany = on(
  deleteCompanyAction,
  (state: ICompanyStateModel): ICompanyStateModel => {
    return {
      ...state,
      isDeletingCompany: true,
      validationErrors: null
    };
  }
);

export const deleteCompanySuccess = on(
  deleteCompanySuccessAction,
  (state: ICompanyStateModel, {id}): ICompanyStateModel => {
    return adapter.removeOne(id, {
      ...state,
      isDeletingCompany: false,
      validationErrors: null,
    });
  }
);

export const deleteCompanyFailure = on(
  deleteCompanyFailureAction,
  (state: ICompanyStateModel, {errorResponse}): ICompanyStateModel => {
    return {
      ...state,
      isDeletingCompany: false,
      validationErrors: errorResponse
    };
  }
);
