import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CompanyService} from '@api/company/company.service';
import {ICompanyModel} from '@api/company/res/company.interface';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  createCompanyAction,
  createCompanyFailureAction,
  createCompanySuccessAction
} from '@pages/company/store/actions/company-create.actions';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyCreateEffects {

  createCompany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createCompanyAction),
      switchMap(({request}) => {
        return this.companyService.createCompany(request).pipe(
          map((response: ICompanyModel) => {
            return createCompanySuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(createCompanyFailureAction({errorResponse}));
          })
        );
      })
    ));

  constructor(
    private actions$: Actions,
    private companyService: CompanyService
  ) {
  }
}
