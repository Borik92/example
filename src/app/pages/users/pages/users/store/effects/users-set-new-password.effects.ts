import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {IUsersModel} from '@api/users/res/user.interface';
import {UsersService} from '@api/users/users.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {
  setNewPasswordUserAction,
  setNewPasswordUserFailureAction,
  setNewPasswordUserSuccessAction
} from '../actions/users-set-new-password.actions';

@Injectable({
  providedIn: 'root'
})

export class UsersSetNewPasswordEffects {

  setUserNewPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setNewPasswordUserAction),
      switchMap(({id, request}) => {
        return this.usersService.editUserPassword(id, request).pipe(
          map((response: IUsersModel) => {
            return setNewPasswordUserSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(setNewPasswordUserFailureAction({errorResponse}));
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
