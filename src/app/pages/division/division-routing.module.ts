import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DivisionComponent} from '@pages/division/division.component';


const routes: Routes = [{
  path: '',
  component: DivisionComponent,
  children: [
    {
      path: 'division',
      loadChildren: () => import('./pages/division/division.module').then(m => m.DivisionModule)
    },
    {
      path: 'division-types',
      loadChildren: () => import('./pages/division-types/division-types.module').then(m => m.DivisionTypesModule)
    },
    {
      path: '**',
      redirectTo: 'region',
      pathMatch: 'full',
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DivisionRoutingModule { }
