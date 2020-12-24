import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {DivisionTypesService} from '@api/division-types/division-types.service';
import {IDivisionTypeModel} from '@api/division-types/res/division-type.interface';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {
  editDivisionTypeAction,
  editDivisionTypeFailureAction,
  editDivisionTypeSuccessAction
} from '@pages/division/pages/division-types/store/actions/division-types-edit.actions';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DivisionTypesEditEffects {

  editDivisionType$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editDivisionTypeAction),
      switchMap(({id, request}) => {
        return this.divisionTypesService.editDivisionType(id, request).pipe(
          map((response: IDivisionTypeModel) => {
            return editDivisionTypeSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(editDivisionTypeFailureAction({errorResponse}));
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
