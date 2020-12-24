import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {IRolesModel} from '@api/roles/res/roles.interface';
import {RolesService} from '@api/roles/roles.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {
  editRoleAction,
  editRoleFailureAction,
  editRoleSuccessAction
} from '@pages/users/pages/roles/store/actions/roles-edit.actions';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RolesEditEffects {

  editRole$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editRoleAction),
      switchMap(({id, request}) => {
        return this.rolesService.editRole(id, request).pipe(
          map((response: IRolesModel) => {
            return editRoleSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(editRoleFailureAction({errorResponse}));
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
