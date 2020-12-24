import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {UsersService} from '@api/users/users.service';
import {editUserAction, editUserFailureAction, editUserSuccessAction} from '../actions/users-edit.actions';
import {IUsersModel} from '@api/users/res/user.interface';

@Injectable({
  providedIn: 'root'
})

export class UsersEditEffects {

  editUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editUserAction),
      switchMap(({id, request}) => {
        return this.usersService.editUser(id, request).pipe(
          map((response: IUsersModel) => {
            return editUserSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(editUserFailureAction({errorResponse}));
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
