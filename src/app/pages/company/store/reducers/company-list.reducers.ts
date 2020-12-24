import {on} from '@ngrx/store';
import {
  getCompanyListAction,
  getCompanyListFailureAction,
  getCompanyListSuccessAction
} from '@pages/company/store/actions/company-list.actions';
import {adapter} from '@pages/company/store/company-initial.state';
import {ICompanyStateModel} from '@pages/company/store/company-state.interface';

export const companyList = on(
  getCompanyListAction,
  (state: ICompanyStateModel): ICompanyStateModel => {
    return {
      ...state,
      isGettingCompanyList: true,
      validationErrors: null
    };
  }
);

export const companyListSuccess = on(
  getCompanyListSuccessAction,
  (state: ICompanyStateModel, {response}): ICompanyStateModel => {
    return adapter.addMany(response, {
      ...state,
      entities: {},
      ids: [],
      isGettingCompanyList: false,
      validationErrors: null,
    });
  }
);

export const companyListFailure = on(
  getCompanyListFailureAction,
  (state: ICompanyStateModel, {errorResponse}): ICompanyStateModel => {
    return {
      ...state,
      isGettingCompanyList: false,
      validationErrors: errorResponse
    };
  }
);
