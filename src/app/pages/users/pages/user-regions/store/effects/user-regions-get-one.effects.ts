import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {UserRegionsService} from '@api/user-regions/user-regions.service';
import {
  getOneUserRegionAction,
  getOneUserRegionFailureAction,
  getOneUserRegionSuccessAction
} from '../actions/user-regions-get-one.action';

@Injectable({
  providedIn: 'root'
})

export class UserRegionsGetOneEffects {


  getOneAUserRegion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getOneUserRegionAction),
      switchMap(({id}) => {
        return this.userRegionsService.getOneUserRegion(id).pipe(
          map((response) => {
            return getOneUserRegionSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getOneUserRegionFailureAction({errorResponse}));
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
