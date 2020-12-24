import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManageTypesEnum} from '@enums/manage-types.enum';
import {ListComponent} from '@pages/division/pages/division/pages/list/list.component';
import {ManageComponent} from '@pages/division/pages/division/pages/manage/manage.component';
import {DivisionComponent} from '@pages/division/pages/division/division.component';

const routes: Routes = [{
  path: '', component: DivisionComponent, children: [
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
  ],
},
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DivisionRoutingModule { }
