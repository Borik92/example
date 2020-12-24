import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CompanyService} from '@api/company/company.service';
import {ICompanyModel} from '@api/company/res/company.interface';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  getOneCompanyAction,
  getOneCompanyFailureAction,
  getOneCompanySuccessAction
} from '@pages/company/store/actions/company-get-one.actions';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyGetOneEffects {

  getOneCompany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getOneCompanyAction),
      switchMap(({id}) => {
        return this.companyService.getOneCompany(id).pipe(
          map((response: ICompanyModel) => {
            return getOneCompanySuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getOneCompanyFailureAction({errorResponse}));
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
