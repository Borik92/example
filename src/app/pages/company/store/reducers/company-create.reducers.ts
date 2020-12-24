import {on} from '@ngrx/store';
import {
  createCompanyAction,
  createCompanyFailureAction,
  createCompanySuccessAction
} from '@pages/company/store/actions/company-create.actions';
import {ICompanyStateModel} from '@pages/company/store/company-state.interface';

export const createCompany = on(
  createCompanyAction,
  (state: ICompanyStateModel): ICompanyStateModel => {
    return {
      ...state,
      isCreatingCompany: true,
      validationErrors: null,
    };
  }
);

export const createCompanySuccess = on(
  createCompanySuccessAction,
  (state: ICompanyStateModel): ICompanyStateModel => {
    return {
      ...state,
      isCreatingCompany: false,
      validationErrors: null
    };
  }
);

export const createCompanyFailure = on(
  createCompanyFailureAction,
  (state: ICompanyStateModel, {errorResponse}): ICompanyStateModel => {
    return {
      ...state,
      isCreatingCompany: false,
      validationErrors: errorResponse
    };
  }
);
