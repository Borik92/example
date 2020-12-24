import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {IUsersModel} from '@api/users/res/user.interface';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {UsersService} from '@api/users/users.service';
import {getOneUserAction, getOneUserFailureAction, getOneUserSuccessAction} from '../actions/users-get-one.actions';

@Injectable({
  providedIn: 'root'
})

export class UsersGetOneEffects {

  getOneUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getOneUserAction),
      switchMap(({id}) => {
        return this.usersService.getOneUser(id).pipe(
          map((response: IUsersModel) => {
            return getOneUserSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getOneUserFailureAction({errorResponse}));
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
