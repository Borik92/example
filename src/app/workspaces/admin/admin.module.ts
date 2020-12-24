import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {SharedModule} from '@shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {AppStateTypesEnum} from '@enums/app-state-types.enum';
import {authState} from '@pages/auth/store/reducers/auth-login.reducers';
import {EffectsModule} from '@ngrx/effects';
import {AuthLoginEffects} from '@pages/auth/store/effects/auth-login.effects';


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    StoreModule.forFeature(AppStateTypesEnum.Auth, authState),
    EffectsModule.forFeature([AuthLoginEffects])
  ]
})

export class AdminModule {
}
