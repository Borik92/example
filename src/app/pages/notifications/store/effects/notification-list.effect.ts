import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {NotificationsService} from '@api/notifications/notifications.service';
import {INotificationModel} from '@api/notifications/res/notification.interface';
import {getNotificationListAction, getNotificationListFailureAction, getNotificationListSuccessAction} from '../actions/notification-list.actions';

@Injectable({
  providedIn: 'root'
})
export class NotificationListEffect {

  getNotificationList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getNotificationListAction),
      switchMap(() => {
        return this.notificationsService.listNotifications().pipe(
          map((response: INotificationModel[]) => {
            return getNotificationListSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getNotificationListFailureAction(errorResponse));
          })
        );
      })
    ));

  constructor(
    private actions$: Actions,
    private notificationsService: NotificationsService
  ) {
  }
}
