import {INotificationModel} from '@api/notifications/res/notification.interface';
import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {INotificationsStateModel} from './notifications-state.interface';

export const adapter: EntityAdapter<INotificationModel> = createEntityAdapter<INotificationModel>();

export const notificationInitialState: INotificationsStateModel = adapter.getInitialState(
  {
    isGettingNotificationsList: false,
    validationErrors: null
  });
