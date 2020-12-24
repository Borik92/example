import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DivisionTypesService} from '@api/division-types/division-types.service';
import {IDivisionTypeModel} from '@api/division-types/res/division-type.interface';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {
  getDivisionTypesListAction,
  getDivisionTypesListFailureAction,
  getDivisionTypesListSuccessAction
} from '@pages/division/pages/division-types/store/actions/division-types-list.actions';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DivisionTypesListEffects {

  divisionTypesList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getDivisionTypesListAction),
      switchMap(() => {
        return this.divisionTypesService.getDivisionTypesList().pipe(
          map((response: IDivisionTypeModel[]) => {
            return getDivisionTypesListSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getDivisionTypesListFailureAction({errorResponse}));
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
