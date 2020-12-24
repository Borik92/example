import {on} from '@ngrx/store';
import {IUserRegionsStateModel} from '../user-regions-state.interface';
import {
  deleteUserRegionAction,
  deleteUserRegionFailureAction,
  deleteUserRegionSuccessAction
} from '../actions/user-regions-delete.actions';
import {adapter} from '../user-regions-initial.state';

export const deleteUserRegion = on(
  deleteUserRegionAction,
  (state: IUserRegionsStateModel): IUserRegionsStateModel => {
    return {
      ...state,
      isDeletingUserRegion: true,
      validationErrors: null
    };
  });

export const deleteUserRegionSuccess = on(
  deleteUserRegionSuccessAction,
  (state: IUserRegionsStateModel, {id}): IUserRegionsStateModel => {
    return adapter.removeOne(id, {
      ...state,
      isDeletingUserRegion: false,
      validationErrors: null
    });
  });

export const deleteUserRegionFailure = on(
  deleteUserRegionFailureAction,
  (state: IUserRegionsStateModel, {errorResponse}): IUserRegionsStateModel => {
    return {
      ...state,
      isDeletingUserRegion: false,
      validationErrors: errorResponse,
    }
  });
