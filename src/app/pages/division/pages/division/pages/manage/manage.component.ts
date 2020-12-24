import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {IDivisionTypeModel} from '@api/division-types/res/division-type.interface';
import {ManageDivisionModel} from '@api/division/req/manage-division.model';
import {IDivisionModel} from '@api/division/res/division.interface';
import {ManageTypesEnum} from '@enums/manage-types.enum';
import {Actions, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {getDivisionTypesListAction} from '@pages/division/pages/division-types/store/actions/division-types-list.actions';
import {divisionTypesListSelector} from '@pages/division/pages/division-types/store/selectors/division-types.selectors';
import {createDivisionAction, createDivisionSuccessAction} from '@pages/division/pages/division/store/actions/division-create.actions';
import {editDivisionAction, editDivisionSuccessAction} from '@pages/division/pages/division/store/actions/division-edit.actions';
import {getOneDivisionAction} from '@pages/division/pages/division/store/actions/division-get-one.actions';
import {divisionSelector, isCreatingDivisionSelector} from '@pages/division/pages/division/store/selectors/division.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  isCreatingDivision$: Observable<boolean>;
  divisionTypesList$: Observable<IDivisionTypeModel[]>;
  ManageTypesEnum = ManageTypesEnum;
  form = new ManageDivisionModel();
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
        this.store.dispatch(getOneDivisionAction({id: this.id}));
        this.store.pipe(select(divisionSelector, this.id)).subscribe((division: IDivisionModel) => {
          if (division) {
            this.form.formGroup.patchValue(division);
            this.form.id.setValue(division.id);
            this.form.divisionTypeId.setValue(division.divisionType.id);
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
    this.store.dispatch(getDivisionTypesListAction());
    this.isCreatingDivision$ = this.store.pipe(select(isCreatingDivisionSelector));
    this.actionsSubject.pipe(ofType(editDivisionSuccessAction)).subscribe(data =>
      this.router.navigate(['', 'division', 'division', 'list']));
    this.actionsSubject.pipe(ofType(createDivisionSuccessAction)).subscribe(data =>
      this.router.navigate(['', 'division', 'division', 'list']));
    this.divisionTypesList$ = this.store.pipe(select(divisionTypesListSelector));
  }

  submitForm(): void {
    switch (this.manageType) {
      case ManageTypesEnum.Add:
        this.store.dispatch(createDivisionAction({request: this.form.createModel()}));
        break;
      case ManageTypesEnum.Edit:
        this.store.dispatch(editDivisionAction({id: this.id, request: this.form.changeModel()}));
        break;
      case ManageTypesEnum.Preview:
        break;
    }
  }
}
