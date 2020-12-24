import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {IUserRegionsModel} from '@api/user-regions/res/user-regions.interface';
import {IUserRegionsStateModel} from './user-regions-state.interface';

export const adapter: EntityAdapter<IUserRegionsModel> = createEntityAdapter<IUserRegionsModel>();

export const userRegionsInitialState: IUserRegionsStateModel = adapter.getInitialState(
  {
    isGettingUserRegionsList: false,
    isGettingOneUserRegion: false,
    isCreatingUserRegion: false,
    isEditingUserRegion: false,
    isDeletingUserRegion: false,
    validationErrors: '',
  }
);
