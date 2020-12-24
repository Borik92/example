import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '@api/auth/auth.service';
import {ILoginResModel} from '@api/auth/res/login-res.interface';
import {IUsersModel} from '@api/users/res/user.interface';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {AuthHelperService} from '@pages/auth/services/auth-helper.service';
import {of} from 'rxjs';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {
  getUserInfoAction,
  getUserInfoFailureAction,
  getUserInfoSuccessAction,
  loginAction,
  loginFailureAction,
  loginSuccessAction
} from '../actions/auth-login.actions';
import {NzMessageService} from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})

export class AuthLoginEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap((request) => {
        const newObj = {...request};
        delete newObj.type;
        return this.authService.login(newObj).pipe(
          map((response: ILoginResModel) => {
            this.authService.setToken(response);
            return loginSuccessAction(response);
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            this.message.create('error', `Wrong email address or password!`);
            return of(loginFailureAction(errorResponse));
          })
        );
      })
    ));

  getUserInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserInfoAction),
      switchMap(() => {
        return this.authService.getUserInfo().pipe(
          map((response: IUsersModel) => {
            return getUserInfoSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getUserInfoFailureAction({errorResponse}));
          })
        );
      })
    ));

  redirectAfterSubmit$ = createEffect(() =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.authService.getUserInfo().subscribe((userInfo) => {
            this.authHelperService.availablePermissionsList = userInfo.permissions.map(permission => permission.name);
            this.store.dispatch(getUserInfoSuccessAction({response: userInfo}));
            this.router.navigate(['dashboard']);
          });
        })
      ),
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    private store: Store,
    private message: NzMessageService,
    private authHelperService: AuthHelperService
  ) {
  }
}
