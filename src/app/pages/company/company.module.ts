import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {AppStateTypesEnum} from '@enums/app-state-types.enum';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {companyReducer} from '@pages/company/store/company.reducer';
import {CompanyCreateEffects} from '@pages/company/store/effects/company-create.effects';
import {CompanyDeleteEffects} from '@pages/company/store/effects/company-delete.effects';
import {CompanyEditEffects} from '@pages/company/store/effects/company-edit.effects';
import {CompanyGetOneEffects} from '@pages/company/store/effects/company-get-one.effects';
import {CompanyListEffects} from '@pages/company/store/effects/company-list.effects';
import {divisionReducer} from '@pages/division/pages/division/store/division.reducer';
import {DivisionListEffects} from '@pages/division/pages/division/store/effects/division-list.effects';
import {SharedModule} from '@shared/shared.module';

import {CompanyRoutingModule} from './company-routing.module';
import {CompanyComponent} from './company.component';
import { ListComponent } from './pages/list/list.component';
import { ManageComponent } from './pages/manage/manage.component';


@NgModule({
  declarations: [CompanyComponent, ListComponent, ManageComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(AppStateTypesEnum.Company, companyReducer),
    StoreModule.forFeature(AppStateTypesEnum.Division, divisionReducer),
    EffectsModule.forFeature([
      CompanyListEffects,
      CompanyGetOneEffects,
      CompanyEditEffects,
      CompanyDeleteEffects,
      CompanyCreateEffects,
      DivisionListEffects
    ]),
    CompanyRoutingModule
  ]
})
export class CompanyModule {
}
