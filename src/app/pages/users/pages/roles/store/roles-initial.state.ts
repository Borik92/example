import {IRolesModel} from '@api/roles/res/roles.interface';
import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {IRolesStateModel} from '@pages/users/pages/roles/store/roles-state.interface';

export const adapter: EntityAdapter<IRolesModel> = createEntityAdapter<IRolesModel>();

export const rolesInitialState: IRolesStateModel = adapter.getInitialState({
    isGettingRolesList: false,
    isGettingOneRole: false,
    isCreatingRole: false,
  isEditingRole: false,
    isDeletingRole: false,
    validationErrors: null,
  }
);
