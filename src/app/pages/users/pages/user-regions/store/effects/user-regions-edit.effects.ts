import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {UserRegionsService} from '@api/user-regions/user-regions.service';
import {
  editUserRegionAction,
  editUserRegionFailureAction,
  editUserRegionSuccessAction
} from '../actions/user-regions-edit.actions';

@Injectable({
  providedIn: 'root'
})

export class UserRegionsEditEffects {


  editUserRegion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editUserRegionAction),
      switchMap(({id, request}) => {
        return this.userRegionsService.editUserRegion(id, request).pipe(
          map((response) => {
            return editUserRegionSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(editUserRegionFailureAction({errorResponse}));
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
