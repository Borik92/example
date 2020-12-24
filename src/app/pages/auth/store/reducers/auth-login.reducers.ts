import {Action, createReducer, on} from '@ngrx/store';
import {getUsersListFailureAction} from '@pages/users/pages/users/store/actions/users-list.actions';
import {
  getUserInfoSuccessAction,
  loginAction,
  loginFailureAction,
  loginSuccessAction
} from '../actions/auth-login.actions';
import {IAuthStateModel} from '@pages/auth/store/auth-state.interface';
import {AppHelper} from '@services/app-helper.service';
import {ILoginResModel} from '@api/auth/res/login-res.interface';
import {HttpErrorResponse} from '@angular/common/http';

const initialState: IAuthStateModel = {
  isSubmitting: false,
  isLoggedIn: null,
  validationErrors: null,
  user: null,
  jwt: null,
};

const authLoginReducers = createReducer(
  initialState,
  on(
    loginAction,
    (state): IAuthStateModel => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(
    loginSuccessAction,
    (state, action: ILoginResModel): IAuthStateModel => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      jwt: action.jwt,
      validationErrors: null,
      user: AppHelper.jwtDecode(action.jwt)
    })
  ),
  on(
    loginFailureAction,
    (state, errorResponse: HttpErrorResponse): IAuthStateModel => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: false,
      validationErrors: errorResponse
    })
  ),
  on(
    getUserInfoSuccessAction,
    (state, {response}): IAuthStateModel => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      validationErrors: null,
      jwt: localStorage.getItem('token'),
      user: response
    })
  ),
  on(
    getUsersListFailureAction,
    (state, {errorResponse}): IAuthStateModel => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      validationErrors: errorResponse,
      user: null,
    })
  ),
);

export function authState(state: IAuthStateModel, action: Action) {
  return authLoginReducers(state, action);
}
