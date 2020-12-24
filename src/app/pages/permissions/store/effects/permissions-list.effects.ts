import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {PermissionsService} from '@api/permissions/permissions.service';
import {IPermissionsModel} from '@api/permissions/res/permissions.interface';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  getPermissionsListAction,
  getPermissionsListFailureAction,
  getPermissionsListSuccessAction
} from '@pages/permissions/store/actions/permissions-list.actions';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PermissionsListEffects {

  getPermissionsList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPermissionsListAction),
      switchMap(() => {
        return this.permissionsService.getPermissionsList().pipe(
          map((response: IPermissionsModel[]) => {
            return getPermissionsListSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getPermissionsListFailureAction({errorResponse}));
          })
        );
      })
    ));

  constructor(
    private actions$: Actions,
    private permissionsService: PermissionsService
  ) {
  }
}
