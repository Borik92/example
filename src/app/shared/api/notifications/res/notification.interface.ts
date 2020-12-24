import {StatusTypesEnum} from '@enums/status-types.enum';

export interface INotificationModel {
  id: string;
  oldStatus: StatusTypesEnum;
  newStatus: StatusTypesEnum;
  updatedBy: {
    id: string;
  };
  updatedAt: string;
}


