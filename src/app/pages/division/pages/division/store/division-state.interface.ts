import {HttpErrorResponse} from '@angular/common/http';
import {IDivisionModel} from '@api/division/res/division.interface';
import {EntityState} from '@ngrx/entity';

export interface IDivisionStateModel extends EntityState<IDivisionModel> {
  isGettingDivisionList: boolean;
  isGettingOneDivision: boolean;
  isDeletingDivision: boolean;
  isEditingDivision: boolean;
  isCreatingDivision: boolean;
  validationErrors: HttpErrorResponse;
}
