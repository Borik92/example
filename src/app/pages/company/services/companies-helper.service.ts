import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompaniesHelperService {
  identifier = {
    title: 'Identifier',
    priority: 5,
    search: true,
  };

  name = {
    title: 'Name',
    priority: 4,
    search: true,
  };
  address = {
    title: 'Address',
    priority: 3,
    search: true,
  };
  division = {
    title: 'Division',
    priority: 2,
    search: true,
  };
  actions = {
    title: 'Actions',
    width: '300px'
  };

  constructor() {
  }
}
