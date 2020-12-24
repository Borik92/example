import {on} from '@ngrx/store';
import {
  getOneCompanyAction,
  getOneCompanyFailureAction,
  getOneCompanySuccessAction
} from '@pages/company/store/actions/company-get-one.actions';
import {adapter} from '@pages/company/store/company-initial.state';
import {ICompanyStateModel} from '@pages/company/store/company-state.interface';

export const getOneCompany = on(
  getOneCompanyAction,
  (state: ICompanyStateModel): ICompanyStateModel => {
    return {
      ...state,
      isGettingOneCompany: true,
      validationErrors: null
    };
  }
);

export const getOneCompanySuccess = on(
  getOneCompanySuccessAction,
  (state: ICompanyStateModel, {response}): ICompanyStateModel => {
    return adapter.addOne(response, {
      ...state,
      isGettingOneCompany: false,
      validationErrors: null,
    });
  }
);

export const getOneCompanyFailure = on(
  getOneCompanyFailureAction,
  (state: ICompanyStateModel, {errorResponse}): ICompanyStateModel => {
    return {
      ...state,
      isGettingOneCompany: false,
      validationErrors: errorResponse
    };
  }
);
