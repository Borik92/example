import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {IRolesModel} from '@api/roles/res/roles.interface';
import {RolesService} from '@api/roles/roles.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {
  getRolesListAction,
  getRolesListFailureAction,
  getRolesListSuccessAction
} from '@pages/users/pages/roles/store/actions/roles-lists.actions';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RolesListsEffects {

  getRolesList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getRolesListAction),
      switchMap(() => {
        return this.rolesService.getRolesList().pipe(
          map((response: IRolesModel[]) => {
            return getRolesListSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getRolesListFailureAction({errorResponse}));
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
