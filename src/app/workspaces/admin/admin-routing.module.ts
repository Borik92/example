import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'notifications',
        loadChildren: () => import('../../pages/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'company',
        loadChildren: () => import('../../pages/company/company.module').then(m => m.CompanyModule)
      },
      {
        path: 'division',
        loadChildren: () => import('@pages/division/division.module').then(m => m.DivisionModule)
      },
      {
        path: 'users',
        loadChildren: () => import('../../pages/users/users.module').then(m => m.UsersModule)
      },
      {
        path: '**',
        redirectTo: 'notifications',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
