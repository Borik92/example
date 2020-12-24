import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppStateTypesEnum} from '@enums/app-state-types.enum';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {divisionTypesReducer} from '@pages/division/pages/division-types/store/division-types.reducer';
import {DivisionTypesListEffects} from '@pages/division/pages/division-types/store/effects/division-types-list.effects';
import {divisionReducer} from '@pages/division/pages/division/store/division.reducer';
import {DivisionCreateEffects} from '@pages/division/pages/division/store/effects/division-create.effects';
import {DivisionDeleteEffects} from '@pages/division/pages/division/store/effects/division-delete.effects';
import {DivisionEditEffects} from '@pages/division/pages/division/store/effects/division-edit.effects';
import {DivisionGetOneEffects} from '@pages/division/pages/division/store/effects/division-get-one.effects';
import {DivisionListEffects} from '@pages/division/pages/division/store/effects/division-list.effects';
import {SharedModule} from '@shared/shared.module';

import {DivisionRoutingModule} from './division-routing.module';
import {DivisionComponent} from './division.component';
import {ListComponent} from './pages/list/list.component';
import {ManageComponent} from './pages/manage/manage.component';
import {DivisionHelperService} from '@pages/division/pages/division/services/division-helper.service';


@NgModule({
  declarations: [DivisionComponent, ListComponent, ManageComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(AppStateTypesEnum.Division, divisionReducer),
    StoreModule.forFeature(AppStateTypesEnum.DivisionTypes, divisionTypesReducer),
    EffectsModule.forFeature([
      DivisionListEffects,
      DivisionGetOneEffects,
      DivisionCreateEffects,
      DivisionEditEffects,
      DivisionDeleteEffects,
      DivisionTypesListEffects,
    ]),
    DivisionRoutingModule
  ],
  providers: [DivisionHelperService]
})
export class DivisionModule {
}
