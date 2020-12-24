import {HttpErrorResponse} from '@angular/common/http';
import {ICompanyModel} from '@api/company/res/company.interface';
import {createAction, props} from '@ngrx/store';
import {CompanyActionTypesEnum} from '@pages/company/store/company-action-types.enum';

export const editCompanyAction = createAction(
  CompanyActionTypesEnum.EditCompany,
  props<{ id: string, request: any }>()
);

export const editCompanySuccessAction = createAction(
  CompanyActionTypesEnum.EditCompanySuccess,
  props<{ response: ICompanyModel }>()
);

export const editCompanyFailureAction = createAction(
  CompanyActionTypesEnum.EditCompanyFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
