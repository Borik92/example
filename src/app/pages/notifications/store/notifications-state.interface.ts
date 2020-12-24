import {EntityState} from '@ngrx/entity';
import {INotificationModel} from '@api/notifications/res/notification.interface';

export interface INotificationsStateModel extends EntityState<INotificationModel> {
  isGettingNotificationsList: boolean;
  validationErrors: any;
}
