import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DivisionService} from '@api/division/division.service';
import {IDivisionModel} from '@api/division/res/division.interface';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {
  getDivisionListAction,
  getDivisionListFailureAction,
  getDivisionListSuccessAction
} from '@pages/division/pages/division/store/actions/division-list.actions';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DivisionListEffects {

  divisionList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getDivisionListAction),
      switchMap(() => {
        return this.divisionService.getDivisionsList().pipe(
          map((response: IDivisionModel[]) => {
            return getDivisionListSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getDivisionListFailureAction({errorResponse}));
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
