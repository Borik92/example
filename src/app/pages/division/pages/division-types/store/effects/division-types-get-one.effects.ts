import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DivisionTypesService} from '@api/division-types/division-types.service';
import {IDivisionTypeModel} from '@api/division-types/res/division-type.interface';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {
  getOneDivisionTypeAction,
  getOneDivisionTypeFailureAction,
  getOneDivisionTypeSuccessAction
} from '@pages/division/pages/division-types/store/actions/division-types-get-one.actions';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DivisionTypesGetOneEffects {

  getOneDivisonType$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getOneDivisionTypeAction),
      switchMap(({id}) => {
        return this.divisionTypesService.getOneDivisionType(id).pipe(
          map((response: IDivisionTypeModel) => {
            return getOneDivisionTypeSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getOneDivisionTypeFailureAction({errorResponse}));
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
