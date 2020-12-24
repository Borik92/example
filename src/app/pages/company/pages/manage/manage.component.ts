import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ManageCompanyModel} from '@api/company/req/manage-company.model';
import {ICompanyModel} from '@api/company/res/company.interface';
import {IDivisionModel} from '@api/division/res/division.interface';
import {ManageTypesEnum} from '@enums/manage-types.enum';
import {Actions, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {createCompanyAction, createCompanySuccessAction} from '@pages/company/store/actions/company-create.actions';
import {editCompanyAction, editCompanySuccessAction} from '@pages/company/store/actions/company-edit.actions';
import {getOneCompanyAction} from '@pages/company/store/actions/company-get-one.actions';
import {companySelector, isCreatingCompanySelector} from '@pages/company/store/selectors/company.selectors';
import {getDivisionListAction} from '@pages/division/pages/division/store/actions/division-list.actions';
import {divisionListSelector} from '@pages/division/pages/division/store/selectors/division.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  isCreatingCompany$: Observable<boolean>;
  divisionsList$: Observable<IDivisionModel[]>;
  ManageTypesEnum = ManageTypesEnum;
  form = new ManageCompanyModel();
  manageType: ManageTypesEnum;
  id: string;

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private actionsSubject: Actions,
    private store: Store) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.manageType = this.activatedRoute.snapshot.url[0].path as ManageTypesEnum;
      if (params.id) {
        this.id = params.id;
        this.store.dispatch(getOneCompanyAction({id: this.id}));
        this.store.pipe(select(companySelector, this.id)).subscribe((company: ICompanyModel) => {
          if (company) {
            this.form.formGroup.patchValue(company);
            this.form.id.setValue(company.id);
            this.form.divisionId.setValue(company.division.id);
            this.form.division.setValue(company.division);
            if (this.manageType === ManageTypesEnum.Preview) {
              this.form.disableAllField();
            }
          }
        });
      }
    });
    this.initializeValues();
  }

  initializeValues() {
    this.store.dispatch(getDivisionListAction());
    this.isCreatingCompany$ = this.store.pipe(select(isCreatingCompanySelector));
    this.actionsSubject.pipe(ofType(editCompanySuccessAction)).subscribe(() =>
      this.router.navigate(['', 'company', 'list']));
    this.actionsSubject.pipe(ofType(createCompanySuccessAction)).subscribe(() =>
      this.router.navigate(['', 'company', 'list']));
    this.divisionsList$ = this.store.pipe(select(divisionListSelector));
  }

  submitForm(): void {
    switch (this.manageType) {
      case ManageTypesEnum.Add:
        this.store.dispatch(createCompanyAction({request: this.form.createModel()}));
        break;
      case ManageTypesEnum.Edit:
        this.store.dispatch(editCompanyAction({id: this.id, request: this.form.changeModel()}));
        break;
      case ManageTypesEnum.Preview:
        break;
    }
  }


}
