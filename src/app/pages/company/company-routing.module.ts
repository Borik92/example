import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ManageTypesEnum} from '@enums/manage-types.enum';
import {CompanyComponent} from '@pages/company/company.component';
import {ListComponent} from '@pages/company/pages/list/list.component';
import {ManageComponent} from '@pages/company/pages/manage/manage.component';

const routes: Routes = [{
  path: '',
  component: CompanyComponent,
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
export class CompanyRoutingModule {
}
