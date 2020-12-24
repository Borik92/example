import {HttpErrorResponse} from '@angular/common/http';
import {createAction, props} from '@ngrx/store';
import {CompanyActionTypesEnum} from '@pages/company/store/company-action-types.enum';

export const deleteCompanyAction = createAction(
  CompanyActionTypesEnum.DeleteCompany,
  props<{ id: string }>()
);

export const deleteCompanySuccessAction = createAction(
  CompanyActionTypesEnum.DeleteCompanySuccess,
  props<{ id: string }>()
);

export const deleteCompanyFailureAction = createAction(
  CompanyActionTypesEnum.DeleteCompanyFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
