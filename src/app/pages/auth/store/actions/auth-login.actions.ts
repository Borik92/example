import {HttpErrorResponse} from '@angular/common/http';
import {IUsersModel} from '@api/users/res/user.interface';
import {createAction, props} from '@ngrx/store';
import {ILoginResModel} from '@api/auth/res/login-res.interface';
import {LoginReqModel} from '@api/auth/req/login-req.model';
import {AuthActionTypesEnum} from '@pages/auth/store/auth-action-types.enum';

export const loginAction = createAction(
  AuthActionTypesEnum.Login,
  props<LoginReqModel>()
);

export const loginSuccessAction = createAction(
  AuthActionTypesEnum.LoginSuccess,
  props<ILoginResModel>()
);

export const loginFailureAction = createAction(
  AuthActionTypesEnum.LoginFailure,
  props<any>()
);

export const getUserInfoAction = createAction(
  AuthActionTypesEnum.GetUserInfo
);

export const getUserInfoSuccessAction = createAction(
  AuthActionTypesEnum.GetUserInfoSuccess,
  props<{ response: IUsersModel }>()
);

export const getUserInfoFailureAction = createAction(
  AuthActionTypesEnum.GetUserInfoFailure,
  props<{ errorResponse: HttpErrorResponse }>()
);
