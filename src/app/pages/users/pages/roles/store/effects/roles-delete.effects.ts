import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {RolesService} from '@api/roles/roles.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {
  deleteRolesAction,
  deleteRolesFailureAction,
  deleteRolesSuccessAction
} from '@pages/users/pages/roles/store/actions/roles-delete.actions';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RolesDeleteEffects {

  deleteRoles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteRolesAction),
      switchMap((data) => {
        return this.rolesService.deleteRole(data.id).pipe(
          map(() => {
            return deleteRolesSuccessAction({id: data.id});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(deleteRolesFailureAction({errorResponse}));
          })
        );
      })
    ));

  constructor(
    private actions$: Actions,
    private rolesService: RolesService,
    private store: Store
  ) {
  }
}
