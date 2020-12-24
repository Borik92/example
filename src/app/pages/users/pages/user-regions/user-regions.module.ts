import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRegionsRoutingModule} from './user-regions-routing.module';
import {UserRegionsComponent} from './user-regions.component';
import {ListComponent} from './pages/list/list.component';
import {ManageComponent} from './pages/manage/manage.component';
import {SharedModule} from '@shared/shared.module';
import {EffectsModule} from '@ngrx/effects';
import {userRegionsReducer} from './store/user-regions.reducer';
import {UserRegionsListEffects} from './store/effects/user-regions-list.effects';
import {AppStateTypesEnum} from '@enums/app-state-types.enum';
import {StoreModule} from '@ngrx/store';
import {UserRegionsCreateEffects} from './store/effects/user-regions-create.effects';
import {UserRegionsDeleteEffects} from './store/effects/user-regions-delete.effects';
import {UserRegionsEditEffects} from './store/effects/user-regions-edit.effects';
import {UserRegionsGetOneEffects} from './store/effects/user-regions-get-one.effects';
import {UserRegionsHelperService} from '@pages/users/pages/user-regions/services/user-regions-helper.service';


@NgModule({
  declarations: [UserRegionsComponent, ListComponent, ManageComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(AppStateTypesEnum.UserRegions, userRegionsReducer),
    EffectsModule.forFeature([
      UserRegionsListEffects,
      UserRegionsCreateEffects,
      UserRegionsDeleteEffects,
      UserRegionsEditEffects,
      UserRegionsGetOneEffects,
    ]),
    UserRegionsRoutingModule
  ],
  providers: [UserRegionsHelperService]
})
export class UserRegionsModule {
}
