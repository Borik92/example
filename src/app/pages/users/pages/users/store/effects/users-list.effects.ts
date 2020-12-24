import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {IUsersModel} from '@api/users/res/user.interface';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {UsersService} from '@api/users/users.service';
import {getUsersListAction, getUsersListFailureAction, getUsersListSuccessAction} from '../actions/users-list.actions';

@Injectable({
  providedIn: 'root'
})

export class UsersListEffects {

  getUsersList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsersListAction),
      switchMap(() => {
        return this.usersService.getUsersList().pipe(
          map((response: IUsersModel[]) => {
            return getUsersListSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getUsersListFailureAction({errorResponse}));
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
