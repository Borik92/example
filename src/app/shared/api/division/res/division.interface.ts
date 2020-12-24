import {IDivisionTypeModel} from '@api/division-types/res/division-type.interface';

export interface IDivisionModel {
  id: string;
  name?: string;
  identifier: string;
  address: string;
  phone: string;
  contactPerson: string;
  divisionType: IDivisionTypeModel;
}
