import {Action, createReducer} from '@ngrx/store';
import {INotificationsStateModel} from './notifications-state.interface';
import {
  getNotificationsList,
  getNotificationsListFailure,
  getNotificationsListSuccess,
} from './reducers/notification-list.reducer';
import {notificationInitialState} from './notification-initial.state';

const initReducer = createReducer(
  notificationInitialState,
  getNotificationsList,
  getNotificationsListSuccess,
  getNotificationsListFailure,
);

export function reducers(state: INotificationsStateModel, action: Action) {
  return initReducer(state, action);
}
