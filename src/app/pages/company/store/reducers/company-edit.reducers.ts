import {on} from '@ngrx/store';
import {
  editCompanyAction,
  editCompanyFailureAction,
  editCompanySuccessAction
} from '@pages/company/store/actions/company-edit.actions';
import {adapter} from '@pages/company/store/company-initial.state';
import {ICompanyStateModel} from '@pages/company/store/company-state.interface';

export const editCompany = on(
  editCompanyAction,
  (state: ICompanyStateModel): ICompanyStateModel => {
    return {
      ...state,
      isEditingCompany: true,
      validationErrors: null
    };
  }
);

export const editCompanySuccess = on(
  editCompanySuccessAction,
  (state: ICompanyStateModel, {response}): ICompanyStateModel => {
    return adapter.upsertOne(response, {
      ...state,
      isEditingCompany: false,
      validationErrors: null,
    });
  }
);

export const editCompanyFailure = on(
  editCompanyFailureAction,
  (state: ICompanyStateModel, {errorResponse}): ICompanyStateModel => {
    return {
      ...state,
      isEditingCompany: false,
      validationErrors: errorResponse
    };
  }
);
