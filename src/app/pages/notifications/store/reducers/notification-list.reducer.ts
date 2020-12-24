import {on} from '@ngrx/store';
import {
  getNotificationListAction,
  getNotificationListFailureAction,
  getNotificationListSuccessAction,
  resetNotificationListAction
} from '../actions/notification-list.actions';
import {INotificationsStateModel} from '../notifications-state.interface';
import {HttpErrorResponse} from '@angular/common/http';
import {adapter} from '../notification-initial.state';

export const getNotificationsList = on(
  getNotificationListAction,
  (state: INotificationsStateModel) => ({
    ...state,
    isGettingNotificationsList: true,
    validationErrors: null
  })
);

export const getNotificationsListSuccess = on(
  getNotificationListSuccessAction,
  (state: INotificationsStateModel, {response}) => {
    return adapter.addMany(response, {
      ...state,
      entities: {},
      ids: [],
    });
  }
);

export const getNotificationsListFailure = on(
  getNotificationListFailureAction,
  (state: INotificationsStateModel, errorResponse: HttpErrorResponse) => {
    return {
      ...state,
      validationErrors: errorResponse
    };
  }
);

export const resetNotificationList = on(
  resetNotificationListAction,
  () => adapter.getInitialState()
);
