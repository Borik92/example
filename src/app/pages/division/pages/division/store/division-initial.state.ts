import {IDivisionModel} from '@api/division/res/division.interface';
import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {IDivisionStateModel} from '@pages/division/pages/division/store/division-state.interface';

export const adapter: EntityAdapter<IDivisionModel> = createEntityAdapter<IDivisionModel>();

export const divisionInitialState: IDivisionStateModel = adapter.getInitialState({
    isGettingDivisionList: false,
    isGettingOneDivision: false,
    isDeletingDivision: false,
    isEditingDivision: false,
    isCreatingDivision: false,
    validationErrors: null,
  }
);
