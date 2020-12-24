import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CompanyService} from '@api/company/company.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  deleteCompanyAction,
  deleteCompanyFailureAction,
  deleteCompanySuccessAction
} from '@pages/company/store/actions/company-delete.actions';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyDeleteEffects {

  deleteCompany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteCompanyAction),
      switchMap(({id}) => {
        return this.companyService.deleteCompany(id).pipe(
          map(() => {
            return deleteCompanySuccessAction({id});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(deleteCompanyFailureAction({errorResponse}));
          })
        );
      })
    ));

  constructor(
    private actions$: Actions,
    private companyService: CompanyService,
  ) {
  }
}
