import {IRolesModel} from '@api/roles/res/roles.interface';
import {EntityState} from '@ngrx/entity';

export interface IRolesStateModel extends EntityState<IRolesModel> {
  isGettingRolesList: boolean;
  isGettingOneRole: boolean;
  isEditingRole: boolean;
  isDeletingRole: boolean;
  isCreatingRole: boolean;
  validationErrors: any;
}
