import {on} from '@ngrx/store';
import {
  getPermissionsListAction,
  getPermissionsListFailureAction,
  getPermissionsListSuccessAction
} from '@pages/permissions/store/actions/permissions-list.actions';
import {adapter} from '@pages/permissions/store/permissions-initial.state';
import {IPermissionsStateModel} from '@pages/permissions/store/permissions-state.interface';

export const getPermissionsList = on(
  getPermissionsListAction,
  (state: IPermissionsStateModel): IPermissionsStateModel => {
    return {
      ...state,
      isGettingPermissionsList: true,
      validationErrors: null
    };
  });

export const getPermissionsListSuccess = on(
  getPermissionsListSuccessAction,
  (state: IPermissionsStateModel, {response}): IPermissionsStateModel => {
    return adapter.addMany(response, {
      ...state,
      entities: {},
      ids: [],
      isGettingPermissionsList: false,
      validationErrors: null
    });
  }
);

export const getPermissionsListFailure = on(
  getPermissionsListFailureAction,
  (state: IPermissionsStateModel, {errorResponse}): IPermissionsStateModel => {
    return {
      ...state,
      isGettingPermissionsList: false,
      validationErrors: errorResponse
    };
  });
