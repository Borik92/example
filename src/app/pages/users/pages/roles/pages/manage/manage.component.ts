import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {IPermissionsModel} from '@api/permissions/res/permissions.interface';
import {ManageRoleModel} from '@api/roles/req/manage-role.model';
import {IRolesModel} from '@api/roles/res/roles.interface';
import {ManageTypesEnum} from '@enums/manage-types.enum';
import {Actions, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {getPermissionsListAction} from '@pages/permissions/store/actions/permissions-list.actions';
import {permissionsListSelector} from '@pages/permissions/store/selectors/permissions.selectors';
import {createRoleAction, createRoleSuccessAction} from '@pages/users/pages/roles/store/actions/roles-create.actions';
import {editRoleAction, editRoleSuccessAction} from '@pages/users/pages/roles/store/actions/roles-edit.actions';
import {getOneRoleAction} from '@pages/users/pages/roles/store/actions/roles-get-one.actions';
import {roleSelector} from '@pages/users/pages/roles/store/selectors/roles.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  permissionsList$: Observable<IPermissionsModel[]>;
  ManageTypesEnum = ManageTypesEnum;
  form = new ManageRoleModel();
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
        this.store.dispatch(getOneRoleAction({id: this.id}));
        this.store.pipe(select(roleSelector, this.id)).subscribe((role: IRolesModel) => {
          if (role) {
            this.form.formGroup.patchValue(role);
            this.form._id.setValue(role.id);
            this.form._permissionIds.setValue(role.permissions.map(permission => permission.id));
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
    this.store.dispatch(getPermissionsListAction());
    this.permissionsList$ = this.store.pipe(select(permissionsListSelector));
    this.actionsSubject.pipe(ofType(editRoleSuccessAction)).subscribe(data =>
      this.router.navigate(['', 'users', 'roles', 'list']));
    this.actionsSubject.pipe(ofType(createRoleSuccessAction)).subscribe(data =>
      this.router.navigate(['', 'users', 'roles', 'list']));
  }

  submitForm(): void {
    switch (this.manageType) {
      case ManageTypesEnum.Add:
        this.store.dispatch(createRoleAction({request: this.form.createModel()}));
        break;
      case ManageTypesEnum.Edit:
        this.store.dispatch(editRoleAction({id: this.form._id.value, request: this.form.changeModel()}));
        break;
      case ManageTypesEnum.Preview:
        break;
    }
  }

}
