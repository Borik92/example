import {HttpErrorResponse} from '@angular/common/http';
import {ICompanyModel} from '@api/company/res/company.interface';
import {createAction, props} from '@ngrx/store';
import {CompanyActionTypesEnum} from '@pages/company/store/company-action-types.enum';

export const createCompanyAction = createAction(
  CompanyActionTypesEnum.CreateCompany,
  props<{ request: any }>()
);

export const createCompanySuccessAction = createAction(
  CompanyActionTypesEnum.CreateCompanySuccess,
  props<{ response: ICompanyModel }>()
);

export const createCompanyFailureAction = createAction(
  CompanyActionTypesEnum.CreateCompanyFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
