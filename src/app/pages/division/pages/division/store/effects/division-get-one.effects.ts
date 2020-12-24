import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DivisionService} from '@api/division/division.service';
import {IDivisionModel} from '@api/division/res/division.interface';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {
  getOneDivisionAction,
  getOneDivisionFailureAction,
  getOneDivisionSuccessAction
} from '@pages/division/pages/division/store/actions/division-get-one.actions';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DivisionGetOneEffects {

  getOneDivison$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getOneDivisionAction),
      switchMap(({id}) => {
        return this.divisionService.getOneDivision(id).pipe(
          map((response: IDivisionModel) => {
            return getOneDivisionSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getOneDivisionFailureAction({errorResponse}));
          })
        );
      })
    ));

  constructor(
    private actions$: Actions,
    private divisionService: DivisionService,
    private store: Store
  ) {
  }
}
