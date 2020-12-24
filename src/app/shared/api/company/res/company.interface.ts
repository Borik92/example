import {IDivisionModel} from '@api/division/res/division.interface';

export interface ICompanyModel {
  id: string;
  name: string;
  address: string;
  identifier: string;
  division: IDivisionModel;
}
