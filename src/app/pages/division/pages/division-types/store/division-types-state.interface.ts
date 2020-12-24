import {HttpErrorResponse} from '@angular/common/http';
import {IDivisionTypeModel} from '@api/division-types/res/division-type.interface';
import {EntityState} from '@ngrx/entity';

export interface IDivisionTypesStateModel extends EntityState<IDivisionTypeModel> {
  isGettingDivisionTypesList: boolean;
  isGettingOneDivisionType: boolean;
  isDeletingDivisionType: boolean;
  isEditingDivisionType: boolean;
  isCreatingDivisionType: boolean;
  validationErrors: HttpErrorResponse;
}
