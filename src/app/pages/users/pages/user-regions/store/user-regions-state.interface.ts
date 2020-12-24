import {EntityState} from '@ngrx/entity';
import {IUserRegionsModel} from '@api/user-regions/res/user-regions.interface';

export interface IUserRegionsStateModel extends EntityState<IUserRegionsModel> {
  isGettingUserRegionsList: boolean;
  isGettingOneUserRegion: boolean;
  isCreatingUserRegion: boolean;
  isEditingUserRegion: boolean;
  isDeletingUserRegion: boolean;
  validationErrors: any;
}
