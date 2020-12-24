import {DatePipe} from '@angular/common';
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AppHelper} from '@services/app-helper.service';
import {Observable} from 'rxjs';
import {INotificationModel} from './res/notification.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  dateFormat = 'yyy-MM-dd hh:mm:ss';

  filterUpdatedBy = '';
  filterOrderRequestId = '';
  filterStatusId = '';
  sort = '';

  constructor(private httpClient: HttpClient, private datePipe: DatePipe) {
  }

  listNotifications(): Observable<INotificationModel[]> {
    let params = new HttpParams();
    if (this.filterUpdatedBy) {
      params = params.set('filterUpdatedBy', this.filterUpdatedBy);
    }
    if (this.filterOrderRequestId) {
      params = params.set('filterOrderRequestId', this.filterOrderRequestId);
    }
    if (this.filterStatusId) {
      params = params.set('filterStatusId', this.filterStatusId);
    }
    if (this.sort) {
      params = params.set('sort', this.sort);
    }
    return this.httpClient.get<INotificationModel[]>('notifications', {params});
  }
}
