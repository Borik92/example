import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppStateTypesEnum} from '@enums/app-state-types.enum';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {PermissionsListEffects} from '@pages/permissions/store/effects/permissions-list.effects';
import {permissionsReducer} from '@pages/permissions/store/permissions.reducer';
import {SharedModule} from '@shared/shared.module';

import { PermissionsRoutingModule } from './permissions-routing.module';
import { PermissionsComponent } from './permissions.component';
import { ListComponent } from './pages/list/list.component';
import {PermissionsHelperService} from '@pages/permissions/services/permissions-helper.service';


@NgModule({
  declarations: [PermissionsComponent, ListComponent],
  imports: [
    CommonModule,
    PermissionsRoutingModule,
    SharedModule,
    StoreModule.forFeature(AppStateTypesEnum.Permissions, permissionsReducer),
    EffectsModule.forFeature([PermissionsListEffects])
  ],
  providers: [PermissionsHelperService]
})
export class PermissionsModule { }
