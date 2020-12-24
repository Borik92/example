import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DivisionTypesService} from '@api/division-types/division-types.service';
import {IDivisionTypeModel} from '@api/division-types/res/division-type.interface';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  createDivisionTypeAction,
  createDivisionTypeFailureAction,
  createDivisionTypeSuccessAction
} from '@pages/division/pages/division-types/store/actions/division-types-create.actions';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DivisionTypesCreateEffects {

  createDivisionType$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createDivisionTypeAction),
      switchMap(({request}) => {
        return this.divisionTypesService.createDivisionType(request).pipe(
          map((response: IDivisionTypeModel) => {
            return createDivisionTypeSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(createDivisionTypeFailureAction({errorResponse}));
          })
        );
      })
    ));

  constructor(
    private actions$: Actions,
    private divisionTypesService: DivisionTypesService
  ) {
  }
}
