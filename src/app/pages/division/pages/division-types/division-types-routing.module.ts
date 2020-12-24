import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ManageTypesEnum} from '@enums/manage-types.enum';
import {ListComponent} from '@pages/division/pages/division-types/pages/list/list.component';
import {ManageComponent} from '@pages/division/pages/division-types/pages/manage/manage.component';
import {DivisionTypesComponent} from '@pages/division/pages/division-types/division-types.component';

const routes: Routes = [{
  path: '',
  component: DivisionTypesComponent,
  children: [
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
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DivisionTypesRoutingModule {
}
