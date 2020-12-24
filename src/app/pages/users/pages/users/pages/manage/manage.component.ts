import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {ICompanyModel} from '@api/company/res/company.interface';
import {IPermissionsModel} from '@api/permissions/res/permissions.interface';
import {IRolesModel} from '@api/roles/res/roles.interface';
import {ManageUsersModel} from '@api/users/req/manage-users.model';
import {IUsersModel} from '@api/users/res/user.interface';
import {ManageTypesEnum} from '@enums/manage-types.enum';
import {Actions, ofType} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {getCompanyListAction} from '@pages/company/store/actions/company-list.actions';
import {companyListSelector} from '@pages/company/store/selectors/company.selectors';
import {getDivisionTypesListAction} from '@pages/division/pages/division-types/store/actions/division-types-list.actions';
import {getPermissionsListAction} from '@pages/permissions/store/actions/permissions-list.actions';
import {permissionsListSelector} from '@pages/permissions/store/selectors/permissions.selectors';
import {getRolesListAction} from '@pages/users/pages/roles/store/actions/roles-lists.actions';
import {rolesListSelector} from '@pages/users/pages/roles/store/selectors/roles.selectors';
import {createUserAction, createUserSuccessAction} from '@pages/users/pages/users/store/actions/users-create.actions';
import {editUserAction, editUserSuccessAction} from '@pages/users/pages/users/store/actions/users-edit.actions';
import {getOneUserAction} from '@pages/users/pages/users/store/actions/users-get-one.actions';
import {isCreatingUserSelector, userSelector} from '@pages/users/pages/users/store/selectors/users.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  permissionsList$: Observable<IPermissionsModel[]>;
  isCreatingUser$: Observable<boolean>;
  companyList$: Observable<ICompanyModel[]>;
  rolesList$: Observable<IRolesModel[]>;
  ManageTypesEnum = ManageTypesEnum;
  form = new ManageUsersModel();
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
        this.store.dispatch(getOneUserAction({id: this.id}));
        this.store.pipe(select(userSelector, this.id)).subscribe((user: IUsersModel) => {
          if (user) {
            this.form.formGroup.patchValue(user);
            this.form._id.setValue(user.id);
            this.form._companyId.setValue(user.company.id);
            this.form._roleId.setValue(user.role.id);
            this.form._companyId.disable();
            this.form._permissionIds.setValue(user.permissions.map(permission => permission.id));
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
    this.store.dispatch(getRolesListAction());
    this.store.dispatch(getCompanyListAction());
    this.store.dispatch(getPermissionsListAction());
    this.isCreatingUser$ = this.store.pipe(select(isCreatingUserSelector));
    this.permissionsList$ = this.store.pipe(select(permissionsListSelector));
    this.companyList$ = this.store.pipe(select(companyListSelector));
    this.rolesList$ = this.store.pipe(select(rolesListSelector));
    this.actionsSubject.pipe(ofType(editUserSuccessAction)).subscribe(data =>
      this.router.navigate(['', 'users', 'users', 'list']));
    this.actionsSubject.pipe(ofType(createUserSuccessAction)).subscribe(data =>
      this.router.navigate(['', 'users', 'users', 'list']));
  }

  submitForm(): void {
    switch (this.manageType) {
      case ManageTypesEnum.Add:
        this.store.dispatch(createUserAction({request: this.form.createModel()}));
        break;
      case ManageTypesEnum.Edit:
        this.store.dispatch(editUserAction({id: this.id, request: this.form.changeModel()}));
        break;
      case ManageTypesEnum.Preview:
        break;
    }
  }
}
