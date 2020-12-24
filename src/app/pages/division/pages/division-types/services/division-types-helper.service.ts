import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DivisionTypesHelperService {
  listOfColumn = {
    name: {
      title: 'Name',
      priority: 4,
      search: true,
      width: '250px'
    },
    descriotion: {
      title: 'Name',
      priority: 4,
      search: true,
      width: '250px'
    },
    identifier: {
      title: 'Name',
      priority: 4,
      search: true,
      width: '250px'
    },
  };

  actions = {
    title: 'Actions',
    width: '100px'
  };

  constructor() {
  }
}
