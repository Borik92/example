import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppStateTypesEnum} from '@enums/app-state-types.enum';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {companyReducer} from '@pages/company/store/company.reducer';
import {CompanyListEffects} from '@pages/company/store/effects/company-list.effects';
import {PermissionsListEffects} from '@pages/permissions/store/effects/permissions-list.effects';
import {permissionsReducer} from '@pages/permissions/store/permissions.reducer';
import {RolesListsEffects} from '@pages/users/pages/roles/store/effects/roles-lists.effects';
import {rolesReducer} from '@pages/users/pages/roles/store/roles.reducer';
import {UsersChangePermissionsEffects} from '@pages/users/pages/users/store/effects/users-change-permissions.effects';
import {UsersCreateEffects} from '@pages/users/pages/users/store/effects/users-create.effects';
import {UsersDeleteEffects} from '@pages/users/pages/users/store/effects/users-delete.effects';
import {UsersEditEffects} from '@pages/users/pages/users/store/effects/users-edit.effects';
import {UsersGetOneEffects} from '@pages/users/pages/users/store/effects/users-get-one.effects';
import {UsersListEffects} from '@pages/users/pages/users/store/effects/users-list.effects';
import {UsersResetPasswordEffects} from '@pages/users/pages/users/store/effects/users-reset-password.effects';
import {UsersSetNewPasswordEffects} from '@pages/users/pages/users/store/effects/users-set-new-password.effects';
import {usersReducer} from '@pages/users/pages/users/store/users.reducer';
import {SharedModule} from '@shared/shared.module';

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from './users.component';
import {ListComponent} from './pages/list/list.component';
import {ManageComponent} from './pages/manage/manage.component';
import {UsersHelperService} from '@pages/users/pages/users/services/users-helper.service';


@NgModule({
  declarations: [UsersComponent, ListComponent, ManageComponent],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(AppStateTypesEnum.Users, usersReducer),
    StoreModule.forFeature(AppStateTypesEnum.Roles, rolesReducer),
    StoreModule.forFeature(AppStateTypesEnum.Company, companyReducer),
    StoreModule.forFeature(AppStateTypesEnum.Permissions, permissionsReducer),
    EffectsModule.forFeature([
      UsersSetNewPasswordEffects,
      UsersResetPasswordEffects,
      UsersListEffects,
      UsersGetOneEffects,
      UsersEditEffects,
      UsersDeleteEffects,
      UsersCreateEffects,
      UsersChangePermissionsEffects,
      RolesListsEffects,
      CompanyListEffects,
      PermissionsListEffects
    ]),
    UsersRoutingModule
  ],
  providers: [UsersHelperService]
})
export class UsersModule {
}
