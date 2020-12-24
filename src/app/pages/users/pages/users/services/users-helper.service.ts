export class UsersHelperService {
  listOfColumn = [
    {
      title: 'User Group',
      priority: 4,
      search: true,
    },
    {
      title: 'Username',
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
