import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppStateTypesEnum} from '@enums/app-state-types.enum';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {divisionReducer} from '@pages/division/pages/division/store/division.reducer';
import {DivisionListEffects} from '@pages/division/pages/division/store/effects/division-list.effects';
import {PermissionsListEffects} from '@pages/permissions/store/effects/permissions-list.effects';
import {permissionsReducer} from '@pages/permissions/store/permissions.reducer';
import {RolesCreateEffects} from '@pages/users/pages/roles/store/effects/roles-create.effects';
import {RolesDeleteEffects} from '@pages/users/pages/roles/store/effects/roles-delete.effects';
import {RolesEditEffects} from '@pages/users/pages/roles/store/effects/roles-edit.effects';
import {RolesGetOneEffects} from '@pages/users/pages/roles/store/effects/roles-get-one.effects';
import {RolesListsEffects} from '@pages/users/pages/roles/store/effects/roles-lists.effects';
import {rolesReducer} from '@pages/users/pages/roles/store/roles.reducer';
import {SharedModule} from '@shared/shared.module';

import {RolesRoutingModule} from './roles-routing.module';
import {RolesComponent} from './roles.component';
import {ListComponent} from './pages/list/list.component';
import {ManageComponent} from './pages/manage/manage.component';


@NgModule({
  declarations: [RolesComponent, ListComponent, ManageComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(AppStateTypesEnum.Roles, rolesReducer),
    StoreModule.forFeature(AppStateTypesEnum.Division, divisionReducer),
    StoreModule.forFeature(AppStateTypesEnum.Permissions, permissionsReducer),
    EffectsModule.forFeature([
      RolesListsEffects,
      RolesGetOneEffects,
      RolesEditEffects,
      RolesDeleteEffects,
      RolesCreateEffects,
      RolesDeleteEffects,
      DivisionListEffects,
      PermissionsListEffects
    ]),
    RolesRoutingModule
  ]
})
export class RolesModule {
}
