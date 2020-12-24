import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CompanyService} from '@api/company/company.service';
import {ICompanyModel} from '@api/company/res/company.interface';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  editCompanyAction,
  editCompanyFailureAction,
  editCompanySuccessAction
} from '@pages/company/store/actions/company-edit.actions';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CompanyEditEffects {

  editCompany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editCompanyAction),
      switchMap(({id, request}) => {
        return this.companyService.editCompany(id, request).pipe(
          map((response: ICompanyModel) => {
            return editCompanySuccessAction({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(editCompanyFailureAction({errorResponse}));
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
