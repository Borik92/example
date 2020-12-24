import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationsRoutingModule} from './notifications-routing.module';
import {NotificationsComponent} from './notifications.component';
import {ListComponent} from './pages/list/list.component';
import {SharedModule} from '@shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {AppStateTypesEnum} from '@enums/app-state-types.enum';
import {EffectsModule} from '@ngrx/effects';
import {reducers} from './store/notifications.reducer';
import {NotificationListEffect} from './store/effects/notification-list.effect';
import {NotificationsHelperService} from '@pages/notifications/services/notifications-helper.service';

@NgModule({
  declarations: [NotificationsComponent, ListComponent],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    SharedModule,
    StoreModule.forFeature(AppStateTypesEnum.Notifications, reducers),
    EffectsModule.forFeature([NotificationListEffect])
  ],
  providers: [NotificationsHelperService]
})

export class NotificationsModule {
}
