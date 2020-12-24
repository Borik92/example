import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {IUsersModel} from '@api/users/res/user.interface';
import {IUsersStateModel} from './users-state.interface';

export const adapter: EntityAdapter<IUsersModel> = createEntityAdapter<IUsersModel>();

export const usersInitialState: IUsersStateModel = adapter.getInitialState(
  {
    isGettingUsersList: false,
    isGettingOneUser: false,
    isCreatingUser: false,
    isEditingUser: false,
    isDeletingUser: false,
    isChangingUserPermissions: false,
    isResetingUserPassword: false,
    isSettingNewUserPassword: false,
    validationErrors: null,
  }
);
