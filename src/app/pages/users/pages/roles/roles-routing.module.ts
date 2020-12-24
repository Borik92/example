import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManageTypesEnum} from '@enums/manage-types.enum';
import {PermissionsEnum} from '@enums/permissions.enum';
import {ListComponent} from '@pages/users/pages/roles/pages/list/list.component';
import {ManageComponent} from '@pages/users/pages/roles/pages/manage/manage.component';
import {PermissionGuard} from '@shared/guards/permission.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: ManageTypesEnum.Add,
    component: ManageComponent,
    canActivate: [PermissionGuard],
    data: {permissions: [PermissionsEnum.ViewRolesList]}
  },
  {
    path: `${ManageTypesEnum.Edit}/:id`,
    component: ManageComponent,
    canActivate: [PermissionGuard],
    data: {permissions: [PermissionsEnum.CreateUpdateRole]}
  },
  {
    path: `${ManageTypesEnum.Preview}/:id`,
    component: ManageComponent,
    canActivate: [PermissionGuard],
    data: {permissions: [PermissionsEnum.CreateUpdateRole]}
  },
  {
    path: '**',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
