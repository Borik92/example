import {on} from '@ngrx/store';
import {
  getOneUserRegionAction,
  getOneUserRegionFailureAction,
  getOneUserRegionSuccessAction
} from '../actions/user-regions-get-one.action';
import {IUserRegionsStateModel} from '../user-regions-state.interface';
import {adapter} from '../user-regions-initial.state';

export const getOneUserRegion = on(
  getOneUserRegionAction,
  (state: IUserRegionsStateModel): IUserRegionsStateModel => {
    return {
      ...state,
      isGettingOneUserRegion: true,
      validationErrors: null
    };
  });

export const getOneUserRegionSuccess = on(
  getOneUserRegionSuccessAction,
  (state: IUserRegionsStateModel, {response}): IUserRegionsStateModel => {
    return adapter.addOne(response, {
      ...state,
      isGettingOneUserRegion: false,
      validationErrors: null
    });
  });

export const getOneUserRegionFailure = on(
  getOneUserRegionFailureAction,
  (state: IUserRegionsStateModel, {errorResponse}): IUserRegionsStateModel => {
    return {
      ...state,
      isGettingOneUserRegion: false,
      validationErrors: errorResponse,
    };
  });
