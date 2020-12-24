import {on} from '@ngrx/store';
import {
  createUserRegionAction,
  createUserRegionFailureAction,
  createUserRegionSuccessAction
} from '../actions/user-regions-create.actions';
import {IUserRegionsStateModel} from '../user-regions-state.interface';
import {adapter} from '../user-regions-initial.state';

export const createUserRegion = on(
  createUserRegionAction,
  (state: IUserRegionsStateModel): IUserRegionsStateModel => {
    return {
      ...state,
      isCreatingUserRegion: true,
      validationErrors: null
    };
  });

export const createUserRegionSuccess = on(
  createUserRegionSuccessAction,
  (state: IUserRegionsStateModel, {response}): IUserRegionsStateModel => {
    return adapter.addOne(response, {
      ...state,
      isCreatingUserRegion: false,
      validationErrors: null
    });
  });

export const createUserRegionFailure = on(
  createUserRegionFailureAction,
  (state: IUserRegionsStateModel, {errorResponse}): IUserRegionsStateModel => {
    return {
      ...state,
      isCreatingUserRegion: false,
      validationErrors: errorResponse,
    };
  });
