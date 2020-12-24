import {HttpErrorResponse} from '@angular/common/http';
import {ICompanyModel} from '@api/company/res/company.interface';
import {createAction, props} from '@ngrx/store';
import {CompanyActionTypesEnum} from '@pages/company/store/company-action-types.enum';

export const getCompanyListAction = createAction(
  CompanyActionTypesEnum.GetCompanyList
);

export const getCompanyListSuccessAction = createAction(
  CompanyActionTypesEnum.GetCompanyListSuccess,
  props<{ response: ICompanyModel[] }>()
);

export const getCompanyListFailureAction = createAction(
  CompanyActionTypesEnum.GetCompanyListFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
