import {HttpErrorResponse} from '@angular/common/http';
import {ICompanyModel} from '@api/company/res/company.interface';
import {createAction, props} from '@ngrx/store';
import {CompanyActionTypesEnum} from '@pages/company/store/company-action-types.enum';

export const getOneCompanyAction = createAction(
  CompanyActionTypesEnum.GetOneCompany,
  props<{ id: string }>()
);

export const getOneCompanySuccessAction = createAction(
  CompanyActionTypesEnum.GetOneCompanySuccess,
  props<{ response: ICompanyModel }>()
);

export const getOneCompanyFailureAction = createAction(
  CompanyActionTypesEnum.GetOneCompanyFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
