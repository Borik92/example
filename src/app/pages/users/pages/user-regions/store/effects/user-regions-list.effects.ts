import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {UserRegionsService} from '@api/user-regions/user-regions.service';
import {
  getUserRegionsListAction,
  getUserRegionsListFailureAction,
  getUserRegionsListSuccessAction
} from '../actions/user-regions-list.actions';


@Injectable({
  providedIn: 'root'
})

export class UserRegionsListEffects {

  UserRegionsList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserRegionsListAction),
      switchMap(() => {
        return this.userRegionsService.getUserRegionsList().pipe(
          map((response) => {
            return getUserRegionsListSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getUserRegionsListFailureAction({errorResponse}));
          })
        );
      })
    ));

  constructor(
    private userRegionsService: UserRegionsService,
    private actions$: Actions,
  ) {
  }
}
