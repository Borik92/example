import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {UserRegionsService} from '@api/user-regions/user-regions.service';
import {
  createUserRegionAction,
  createUserRegionFailureAction,
  createUserRegionSuccessAction
} from '../actions/user-regions-create.actions';
import {IUserRegionsModel} from '@api/user-regions/res/user-regions.interface';

@Injectable({
  providedIn: 'root'
})

export class UserRegionsCreateEffects {

  createUserRegion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createUserRegionAction),
      switchMap(({request}) => {
        return this.userRegionsService.createUserRagion(request).pipe(
          map((response: IUserRegionsModel) => {
            return createUserRegionSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(createUserRegionFailureAction({errorResponse}));
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
