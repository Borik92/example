import {Component, OnInit} from '@angular/core';
import {NotificationsService} from '@api/notifications/notifications.service';
import {SortingTypesEnum} from '@enums/sorting-types.enum';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {NotificationsHelperService} from '../../services/notifications-helper.service';
import {getNotificationListAction} from '../../store/actions/notification-list.actions';
import {INotificationModel} from '@api/notifications/res/notification.interface';
import {notificationsList} from '../../store/selectors/notification-list.selector';
import {TABLE_MAX_WIDTH} from '@constants/table-max-width';
import {OrderStatusOrderingEnum} from '@enums/order-status-ordering.enum';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  notificationsList$: Observable<INotificationModel[]>;
  tableMaxWidth = TABLE_MAX_WIDTH;
  OrderStatusOrderingEnum = OrderStatusOrderingEnum;
  sort = '';

  visibleUpdatedByFilter = false;

  constructor(public helperService: NotificationsHelperService, private store: Store, public notificationsService: NotificationsService) {
  }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues(): void {
    this.store.dispatch(getNotificationListAction());
    this.notificationsList$ = this.store.pipe(select(notificationsList));
  }

  sortByActionDate(sortType) {
    if (sortType) {
      this.notificationsService.sort = SortingTypesEnum[sortType] + 'updated_at';
    } else {
      this.notificationsService.sort = null;
    }
    this.initializeValues();
  }

}
