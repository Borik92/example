export class DivisionHelperService {
  listOfColumn = {
    name: {
      title: 'Name',
      priority: 4,
      search: true,
    },
    type: {
      title: 'Type',
      priority: 3,
      search: true,
    },
    address: {
      title: 'Address',
      priority: 2,
      search: true,
    },
  };

  actions = {
    title: 'Actions',
    width: '50px'
  };

  constructor() {
  }
}
