import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {RolesService} from '@api/roles/roles.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {
  createRoleAction,
  createRoleFailureAction,
  createRoleSuccessAction
} from '@pages/users/pages/roles/store/actions/roles-create.actions';
import {NzMessageService} from 'ng-zorro-antd';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RolesCreateEffects {

  createRole$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createRoleAction),
      switchMap(({request}) => {
        return this.rolesService.createRole(request).pipe(
          map((response) => {
            return createRoleSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(createRoleFailureAction({errorResponse}));
          })
        );
      })
    ));

  constructor(
    private actions$: Actions,
    private rolesService: RolesService,
    private store: Store,
    private message: NzMessageService,
  ) {
  }
}
