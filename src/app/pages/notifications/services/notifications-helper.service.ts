import {NotificationsService} from '@api/notifications/notifications.service';

export class NotificationsHelperService {

  dateFormat = 'dd-MM-yyy hh:mm:ss';


  from = {
    title: 'From',
    priority: 4,
    width: '200px'
  };
  orderId = {
    title: 'Order ID',
    compare: (a, b) => a.chinese - b.chinese,
    priority: 3,
    width: '200px'
  };

  status = {
    title: 'Status',
    compare: (a, b) => a.status - b.status,
    priority: 2,
    width: '200px'
  };

  actionDate = {
    title: 'Action Date',
    compare: (a, b) => a.date - b.date,
    priority: 1,
    width: '200px'
  };

  constructor(private notificationsService: NotificationsService) {
  }
}
