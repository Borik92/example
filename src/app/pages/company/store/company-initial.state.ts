import {ICompanyModel} from '@api/company/res/company.interface';
import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {ICompanyStateModel} from '@pages/company/store/company-state.interface';

export const adapter: EntityAdapter<ICompanyModel> = createEntityAdapter<ICompanyModel>();

export const companyInitialState: ICompanyStateModel = adapter.getInitialState({
    isGettingCompanyList: false,
    isGettingOneCompany: false,
    isDeletingCompany: false,
    isEditingCompany: false,
    isCreatingCompany: false,
    validationErrors: null,
  }
);
