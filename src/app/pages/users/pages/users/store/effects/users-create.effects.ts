import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {IUsersModel} from '@api/users/res/user.interface';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {UsersService} from '@api/users/users.service';
import {createUserAction, createUserFailureAction, createUserSuccessAction} from '../actions/users-create.actions';

@Injectable({
  providedIn: 'root'
})

export class UsersCreateEffects {

  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createUserAction),
      switchMap(({request}) => {
        return this.usersService.createUser(request).pipe(
          map((response: IUsersModel) => {
            return createUserSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(createUserFailureAction({errorResponse}));
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
