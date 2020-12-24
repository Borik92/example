import {Action, createReducer} from '@ngrx/store';
import {companyInitialState} from '@pages/company/store/company-initial.state';
import {ICompanyStateModel} from '@pages/company/store/company-state.interface';
import {createCompany, createCompanyFailure, createCompanySuccess} from '@pages/company/store/reducers/company-create.reducers';
import {deleteCompany, deleteCompanyFailure, deleteCompanySuccess} from '@pages/company/store/reducers/company-delete.reducers';
import {editCompany, editCompanyFailure, editCompanySuccess} from '@pages/company/store/reducers/company-edit.reducers';
import {getOneCompany, getOneCompanyFailure, getOneCompanySuccess} from '@pages/company/store/reducers/company-get-one.reducers';
import {companyList, companyListFailure, companyListSuccess} from '@pages/company/store/reducers/company-list.reducers';

const initReducer = createReducer(
  companyInitialState,
  companyList,
  companyListSuccess,
  companyListFailure,
  getOneCompany,
  getOneCompanySuccess,
  getOneCompanyFailure,
  editCompany,
  editCompanySuccess,
  editCompanyFailure,
  deleteCompany,
  deleteCompanySuccess,
  deleteCompanyFailure,
  createCompany,
  createCompanySuccess,
  createCompanyFailure
);

export function companyReducer(state: ICompanyStateModel, action: Action) {
  return initReducer(state, action);
}
