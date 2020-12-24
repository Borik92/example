import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {UserRegionsService} from '@api/user-regions/user-regions.service';
import {
  deleteUserRegionAction,
  deleteUserRegionFailureAction,
  deleteUserRegionSuccessAction
} from '../actions/user-regions-delete.actions';


@Injectable({
  providedIn: 'root'
})

export class UserRegionsDeleteEffects {

  deleteUserRegion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteUserRegionAction),
      switchMap(({id}) => {
        return this.userRegionsService.deleteUserRegion(id).pipe(
          map(() => {
            return deleteUserRegionSuccessAction({id});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(deleteUserRegionFailureAction({errorResponse}));
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
