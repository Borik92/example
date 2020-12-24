import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './pages/list/list.component';
import {ManageComponent} from './pages/manage/manage.component';
import {ManageTypesEnum} from '@enums/manage-types.enum';

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
    component: ManageComponent
  },
  {
    path: `${ManageTypesEnum.Edit}/:id`,
    component: ManageComponent
  },
  {
    path: `${ManageTypesEnum.Preview}/:id`,
    component: ManageComponent
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
export class UserRegionsRoutingModule { }
