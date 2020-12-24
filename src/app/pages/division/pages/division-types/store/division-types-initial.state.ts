import {IDivisionTypeModel} from '@api/division-types/res/division-type.interface';
import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {IDivisionTypesStateModel} from '@pages/division/pages/division-types/store/division-types-state.interface';

export const adapter: EntityAdapter<IDivisionTypeModel> = createEntityAdapter<IDivisionTypeModel>();

export const divisionTypesInitialState: IDivisionTypesStateModel = adapter.getInitialState({
    isGettingDivisionTypesList: false,
    isGettingOneDivisionType: false,
    isDeletingDivisionType: false,
    isEditingDivisionType: false,
    isCreatingDivisionType: false,
    validationErrors: null,
  }
);
