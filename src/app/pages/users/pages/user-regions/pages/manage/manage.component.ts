import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ManageUserRegionModel} from '@api/user-regions/req/manage-user-region.model';
import {select, Store} from '@ngrx/store';
import {ManageTypesEnum} from '@enums/manage-types.enum';
import {UserRegionsHelperService} from '../../services/user-regions-helper.service';
import {getOneUserRegionAction} from '../../store/actions/user-regions-get-one.action';
import {userRegionSelector} from '../../store/selectors/user-regions.selectors';
import {IUserRegionsModel} from '@api/user-regions/res/user-regions.interface';
import {editUserRegionAction, editUserRegionSuccessAction} from '../../store/actions/user-regions-edit.actions';
import {createUserRegionAction, createUserRegionSuccessAction} from '../../store/actions/user-regions-create.actions';
import {Actions, ofType} from '@ngrx/effects';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  form = new ManageUserRegionModel();
  id: string;
  uploadImageType: ManageTypesEnum = ManageTypesEnum.Add;
  ManageTypesEnum = ManageTypesEnum;

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private helperService: UserRegionsHelperService,
    private store: Store,
    private actionsSubject: Actions,
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params.id) {
        this.id = params.id;
        this.uploadImageType = this.helperService.checkManageType();
        this.store.dispatch(getOneUserRegionAction({id: this.id}));
        this.store.pipe(select(userRegionSelector, this.id)).subscribe((userRegion: IUserRegionsModel) => {
          if (userRegion) {
            this.form.formGroup.patchValue(userRegion);
            if (this.uploadImageType === ManageTypesEnum.Preview) {
              this.form.disableAllField();
            }
          }
        });
      }
    });
    this.initializeValues();
  }

  initializeValues() {
    this.actionsSubject.pipe(ofType(createUserRegionSuccessAction)).subscribe(data => this.router.navigate(['', 'users', 'user-regions', 'list']));
    this.actionsSubject.pipe(ofType(editUserRegionSuccessAction)).subscribe(data => this.router.navigate(['', 'users', 'user-regions', 'list']));
  }

  submitForm(): void {
    switch (this.uploadImageType) {
      case ManageTypesEnum.Add:
        this.store.dispatch(createUserRegionAction({request: this.form.createModel()}));
        break;
      case ManageTypesEnum.Edit:
        this.store.dispatch(editUserRegionAction({id: this.id, request: this.form.changeModel()}));
        break;
      case ManageTypesEnum.Preview:
        break;
    }
  }

}
