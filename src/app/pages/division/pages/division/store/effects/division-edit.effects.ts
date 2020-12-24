import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DivisionService} from '@api/division/division.service';
import {IDivisionModel} from '@api/division/res/division.interface';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {
  editDivisionAction,
  editDivisionFailureAction,
  editDivisionSuccessAction
} from '@pages/division/pages/division/store/actions/division-edit.actions';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DivisionEditEffects {

  editDivision$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editDivisionAction),
      switchMap(({id, request}) => {
        return this.divisonService.editDivision(id, request).pipe(
          map((response: IDivisionModel) => {
            return editDivisionSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(editDivisionFailureAction({errorResponse}));
          })
        );
      })
    ));

  constructor(
    private actions$: Actions,
    private divisonService: DivisionService,
    private store: Store
  ) {
  }
}
