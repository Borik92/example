import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DivisionTypesService} from '@api/division-types/division-types.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {
  deleteDivisionTypeAction,
  deleteDivisionTypeFailureAction,
  deleteDivisionTypeSuccessAction
} from '@pages/division/pages/division-types/store/actions/division-types-delete.actions';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DivisionTypesDeleteEffects {

  deleteDivisionType$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteDivisionTypeAction),
      switchMap(({id}) => {
        return this.divisionTypesService.deleteDivisionType(id).pipe(
          map(() => {
            return deleteDivisionTypeSuccessAction({id});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(deleteDivisionTypeFailureAction({errorResponse}));
          })
        );
      })
    ));

  constructor(
    private actions$: Actions,
    private divisionTypesService: DivisionTypesService,
    private store: Store
  ) {
  }
}
