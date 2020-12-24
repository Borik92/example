import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {IUsersModel} from '@api/users/res/user.interface';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {UsersService} from '@api/users/users.service';
import {
  resetUserPasswordAction,
  resetUserPasswordFailureAction,
  resetUserPasswordSuccessAction
} from '../actions/users-reset-password.actions';

@Injectable({
  providedIn: 'root'
})

export class UsersResetPasswordEffects {

  resetPasswordUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(resetUserPasswordAction),
      switchMap(({id, request}) => {
        return this.usersService.editUser(id, request).pipe(
          map((response: IUsersModel) => {
            return resetUserPasswordSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(resetUserPasswordFailureAction({errorResponse}));
          })
        );
      })
    ));

  constructor(
    private usersService: UsersService,
    private actions$: Actions,
  ) {
  }
}
