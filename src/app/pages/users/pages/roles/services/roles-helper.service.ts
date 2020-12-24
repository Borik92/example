import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RolesHelperService {
  listOfColumn = [
    {
      title: 'Name',
      priority: 3,
      search: true,
    },
  ];
  actions = {
    title: 'Actions',
    width: '100px'
  };

  constructor() {
  }
}
