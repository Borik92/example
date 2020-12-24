import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ManageDivisionTypeModel} from '@api/division-types/req/manage-division-type.model';
import {IDivisionTypeModel} from '@api/division-types/res/division-type.interface';
import {ManageTypesEnum} from '@enums/manage-types.enum';
import {Actions, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {
  createDivisionTypeAction,
  createDivisionTypeSuccessAction
} from '@pages/division/pages/division-types/store/actions/division-types-create.actions';
import {
  editDivisionTypeAction,
  editDivisionTypeSuccessAction
} from '@pages/division/pages/division-types/store/actions/division-types-edit.actions';
import {getOneDivisionTypeAction} from '@pages/division/pages/division-types/store/actions/division-types-get-one.actions';
import {divisionTypeSelector} from '@pages/division/pages/division-types/store/selectors/division-types.selectors';
import {isCreatingDivisionSelector} from '@pages/division/pages/division/store/selectors/division.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {


  isCreatingDivisionType$: Observable<boolean>;
  ManageTypesEnum = ManageTypesEnum;
  form = new ManageDivisionTypeModel();
  manageType = this.ManageTypesEnum.Add;
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
        this.store.dispatch(getOneDivisionTypeAction({id: this.id}));
        this.store.pipe(select(divisionTypeSelector, this.id)).subscribe((divisionType: IDivisionTypeModel) => {
          if (divisionType) {
            this.form.formGroup.patchValue(divisionType);
            this.form._id.setValue(divisionType.id);
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
    this.isCreatingDivisionType$ = this.store.pipe(select(isCreatingDivisionSelector));
    this.actionsSubject.pipe(ofType(editDivisionTypeSuccessAction)).subscribe(data =>
      this.router.navigate(['', 'division', 'division-types', 'list']));
    this.actionsSubject.pipe(ofType(createDivisionTypeSuccessAction)).subscribe(data =>
      this.router.navigate(['', 'division', 'division-types', 'list']));
  }

  submitForm(): void {
    switch (this.manageType) {
      case ManageTypesEnum.Add:
        this.store.dispatch(createDivisionTypeAction({request: this.form.createModel()}));
        break;
      case ManageTypesEnum.Edit:
        this.store.dispatch(editDivisionTypeAction({id: this.id, request: this.form.changeModel()}));
        break;
      case ManageTypesEnum.Preview:
        break;
    }
  }

}
