import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CompanyService} from '@api/company/company.service';
import {ICompanyModel} from '@api/company/res/company.interface';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  getCompanyListAction,
  getCompanyListFailureAction,
  getCompanyListSuccessAction
} from '@pages/company/store/actions/company-list.actions';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyListEffects {

  companyList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCompanyListAction),
      switchMap(() => {
        return this.companyService.getCompanyList().pipe(
          map((response: ICompanyModel[]) => {
            return getCompanyListSuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(getCompanyListFailureAction({errorResponse}));
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
