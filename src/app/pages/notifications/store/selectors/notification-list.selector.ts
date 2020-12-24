import {createFeatureSelector, createSelector} from '@ngrx/store';
import {IAppStateModel} from '@interfaces/app-state.interface';
import {AppStateTypesEnum} from '@enums/app-state-types.enum';
import {adapter} from '../notification-initial.state';
import {INotificationsStateModel} from '../notifications-state.interface';

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const notificationsFeatureSelector = createFeatureSelector<IAppStateModel,
  INotificationsStateModel>
(AppStateTypesEnum.Notifications);

export const isGettingNotificationsList = createSelector(
  notificationsFeatureSelector,
  (notificationsState: INotificationsStateModel) => notificationsState.isGettingNotificationsList
);

export const notificationsList = createSelector(
  notificationsFeatureSelector,
  (notificationsState: INotificationsStateModel) => selectAll(notificationsState)
);
