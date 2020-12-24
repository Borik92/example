import {createAction, props} from '@ngrx/store';
import {INotificationModel} from '@api/notifications/res/notification.interface';
import {NotificationActionTypeEnum} from '../notification-action-type.enum';

export const getNotificationListAction = createAction(
  NotificationActionTypeEnum.GetNotificationList
);

export const getNotificationListSuccessAction = createAction(
  NotificationActionTypeEnum.GetNotificationListSuccess,
  props<{ response: INotificationModel[] }>()
);

export const getNotificationListFailureAction = createAction(
  NotificationActionTypeEnum.GetNotificationListFailure,
  props<any>()
);

export const resetNotificationListAction = createAction(
  NotificationActionTypeEnum.ResetNotificationState
);
