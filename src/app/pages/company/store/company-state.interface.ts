import {HttpErrorResponse} from '@angular/common/http';
import {ICompanyModel} from '@api/company/res/company.interface';
import {EntityState} from '@ngrx/entity';

export interface ICompanyStateModel extends EntityState<ICompanyModel> {
  isGettingCompanyList: boolean;
  isGettingOneCompany: boolean;
  isDeletingCompany: boolean;
  isEditingCompany: boolean;
  isCreatingCompany: boolean;
  validationErrors: HttpErrorResponse;
}
