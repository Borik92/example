import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppStateTypesEnum} from '@enums/app-state-types.enum';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {divisionTypesReducer} from '@pages/division/pages/division-types/store/division-types.reducer';
import {DivisionTypesCreateEffects} from '@pages/division/pages/division-types/store/effects/division-types-create.effects';
import {DivisionTypesDeleteEffects} from '@pages/division/pages/division-types/store/effects/division-types-delete.effects';
import {DivisionTypesEditEffects} from '@pages/division/pages/division-types/store/effects/division-types-edit.effects';
import {DivisionTypesGetOneEffects} from '@pages/division/pages/division-types/store/effects/division-types-get-one.effects';
import {DivisionTypesListEffects} from '@pages/division/pages/division-types/store/effects/division-types-list.effects';
import {SharedModule} from '@shared/shared.module';

import { DivisionTypesRoutingModule } from './division-types-routing.module';
import { DivisionTypesComponent } from './division-types.component';
import { ListComponent } from './pages/list/list.component';
import { ManageComponent } from './pages/manage/manage.component';


@NgModule({
  declarations: [DivisionTypesComponent, ListComponent, ManageComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(AppStateTypesEnum.DivisionTypes, divisionTypesReducer),
    EffectsModule.forFeature([
      DivisionTypesListEffects,
      DivisionTypesGetOneEffects,
      DivisionTypesCreateEffects,
      DivisionTypesEditEffects,
      DivisionTypesDeleteEffects,
    ]),
    DivisionTypesRoutingModule
  ]
})
export class DivisionTypesModule { }
