import {Component, OnInit} from '@angular/core';
import {ICompanyModel} from '@api/company/res/company.interface';
import {ManageTypesEnum} from '@enums/manage-types.enum';
import {select, Store} from '@ngrx/store';
import {CompaniesHelperService} from '@pages/company/services/companies-helper.service';
import {deleteCompanyAction} from '@pages/company/store/actions/company-delete.actions';
import {getCompanyListAction} from '@pages/company/store/actions/company-list.actions';
import {companyListSelector} from '@pages/company/store/selectors/company.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list$: Observable<ICompanyModel[]>;
  ManageTypesEnum = ManageTypesEnum;

  constructor(
    public helperService: CompaniesHelperService,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues() {
    this.store.dispatch(getCompanyListAction());
    this.list$ = this.store.pipe(select(companyListSelector));
  }

  deleteCompany(id: string) {
    this.store.dispatch(deleteCompanyAction({id}));
  }
}
