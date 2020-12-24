import {on} from '@ngrx/store';
import {
  editUserRegionAction,
  editUserRegionFailureAction,
  editUserRegionSuccessAction
} from '../actions/user-regions-edit.actions';
import {IUserRegionsStateModel} from '../user-regions-state.interface';
import {adapter} from '../user-regions-initial.state';

export const editUserRegion = on(
  editUserRegionAction,
  (state: IUserRegionsStateModel): IUserRegionsStateModel => {
    return {
      ...state,
      isEditingUserRegion: true,
      validationErrors: null
    };
  });

export const editUserRegionSuccess = on(
  editUserRegionSuccessAction,
  (state: IUserRegionsStateModel, {response}): IUserRegionsStateModel => {
    return adapter.upsertOne(response, {
      ...state,
      isEditingUserRegion: false,
      validationErrors: null
    });
  });

export const editUserRegionFailure = on(
  editUserRegionFailureAction,
  (state: IUserRegionsStateModel, {errorResponse}): IUserRegionsStateModel => {
    return {
      ...state,
      isEditingUserRegion: false,
      validationErrors: errorResponse,
    };
  });
