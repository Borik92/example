import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {RolesService} from '@api/roles/roles.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {
  getOneRoleAction,
  getOneRoleFailureAction,
  getOneRoleSuccessAction
} from '@pages/users/pages/roles/store/actions/roles-get-one.actions';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RolesGetOneEffects {

  getRole = createEffect(() =>
    this.actions$.pipe(
      ofType(getOneRoleAction),
      switchMap(({id}) => {
        return this.rolesService.getOneRole(id).pipe(
          map((response) => {
            return getOneRoleSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            this.router.navigate(['', 'users', 'roles', 'list']);
            return of(getOneRoleFailureAction({errorResponse}));
          })
        );
      })
    ));

  constructor(
    private actions$: Actions,
    private rolesService: RolesService,
    private store: Store,
    private router: Router,
  ) {
  }
}
