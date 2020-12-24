import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {
  changeUserPermissionsAction,
  changeUserPermissionsFailureAction,
  changeUserPermissionsSuccessAction
} from '../actions/users-change-permissions.actions';
import {UsersService} from '@api/users/users.service';
import {IUsersModel} from '@api/users/res/user.interface';

@Injectable({
  providedIn: 'root'
})

export class UsersChangePermissionsEffects {

  changeUserPermissions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changeUserPermissionsAction),
      switchMap(({id, request}) => {
        return this.usersService.editUserPermissions(id, request).pipe(
          map((response: IUsersModel) => {
            return changeUserPermissionsSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(changeUserPermissionsFailureAction({errorResponse}));
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
