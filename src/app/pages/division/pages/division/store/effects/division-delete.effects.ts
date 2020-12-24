import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DivisionService} from '@api/division/division.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {
  deleteDivisionAction,
  deleteDivisionFailureAction,
  deleteDivisionSuccessAction
} from '@pages/division/pages/division/store/actions/division-delete.actions';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DivisionDeleteEffects {

  deleteDivision$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteDivisionAction),
      switchMap(({id}) => {
        return this.divisionService.deleteDivision(id).pipe(
          map(() => {
            return deleteDivisionSuccessAction({id});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(deleteDivisionFailureAction({errorResponse}));
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
