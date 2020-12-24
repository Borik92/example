import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DivisionService} from '@api/division/division.service';
import {IDivisionModel} from '@api/division/res/division.interface';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  createDivisionAction,
  createDivisionFailureAction,
  createDivisionSuccessAction
} from '@pages/division/pages/division/store/actions/division-create.actions';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DivisionCreateEffects {

  createDivision$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createDivisionAction),
      switchMap(({request}) => {
        return this.divisionService.createDivision(request).pipe(
          map((response: IDivisionModel) => {
            return createDivisionSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(createDivisionFailureAction({errorResponse}));
          })
        );
      })
    ));

  constructor(
    private actions$: Actions,
    private divisionService: DivisionService
  ) {
  }
}
