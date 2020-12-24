import {EntityState} from '@ngrx/entity';
import {IUsersModel} from '@api/users/res/user.interface';
import {HttpErrorResponse} from '@angular/common/http';

export interface IUsersStateModel extends EntityState<IUsersModel> {
  isChangingUserPermissions: boolean;
  isCreatingUser: boolean;
  isEditingUser: boolean;
  isDeletingUser: boolean;
  isGettingUsersList: boolean;
  isGettingOneUser: boolean;
  isResetingUserPassword: boolean;
  isSettingNewUserPassword: boolean;
  validationErrors: HttpErrorResponse;
}
