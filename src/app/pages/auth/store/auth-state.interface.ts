import {IUsersModel} from '@api/users/res/user.interface';

export interface IAuthStateModel {
  isSubmitting: boolean;
  isLoggedIn: boolean | null;
  validationErrors: any;
  user: IUsersModel;
  jwt: string;
}
