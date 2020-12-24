import {ManageTypesEnum} from '@enums/manage-types.enum';
import {Router} from '@angular/router';

export class UserRegionsHelperService {
  listOfColumn = {
    description: {
      title: 'Description',
      priority: 4,
      search: true,
      inputType: 'text',
      compare: (a, b) => a.serie.localeCompare(b.serie)
    },
    name: {
      title: 'Name',
      priority: 3,
      search: true,
      inputType: 'number',
      compare: (a, b) => a.from - b.from
    },
    actions: {
      title: 'Actions',
      width: '300px'
    }
  };

  constructor(private router: Router) {
  }

  checkManageType() {
    return this.router
      .url
      .includes(ManageTypesEnum.Edit) ? ManageTypesEnum.Edit : ManageTypesEnum.Preview;
  }
}
