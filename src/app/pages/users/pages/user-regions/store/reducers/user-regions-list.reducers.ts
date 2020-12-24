import {on} from '@ngrx/store';
import {adapter} from '../user-regions-initial.state';
import {IUserRegionsStateModel} from '../user-regions-state.interface';
import {
  getUserRegionsListAction,
  getUserRegionsListFailureAction,
  getUserRegionsListSuccessAction
} from '../actions/user-regions-list.actions';

export const getUserRegionsList = on(
  getUserRegionsListAction,
  (state: IUserRegionsStateModel): IUserRegionsStateModel => {
    return {
      ...state,
      isGettingUserRegionsList: true,
      validationErrors: null
    };
  });

export const getUserRegionsListSuccess = on(
  getUserRegionsListSuccessAction,
  (state: IUserRegionsStateModel, {response}): IUserRegionsStateModel => {
    return adapter.addMany(response, {
      ...state,
      entities: {},
      ids: [],
      isGettingUserRegionsList: false,
      validationErrors: null
    });
  });

export const getUserRegionsListFailure = on(
  getUserRegionsListFailureAction,
  (state: IUserRegionsStateModel, {errorResponse}): IUserRegionsStateModel => {
    return {
      ...state,
      isGettingUserRegionsList: false,
      validationErrors: errorResponse,
    };
  });
