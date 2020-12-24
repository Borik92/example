import {Injectable} from '@angular/core';
import {MenuItemTypeEnum} from '@enums/menu-item-type.enum';
import {PermissionsEnum} from '@enums/permissions.enum';
import {MenuItemListModel, MenuItemModel} from '@models/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuHelperService {

  menuItems = [
    new MenuItemModel(
      'Notifications',
      MenuItemTypeEnum.Button,
      'notifications',
      'notification',
      [],
      [PermissionsEnum.AllowAnyway]
    ),
    new MenuItemModel(
      'Company',
      MenuItemTypeEnum.Button,
      'company',
      'sketch',
      [],
      [
        PermissionsEnum.CreateUpdateCompany,
        PermissionsEnum.DeleteCompany,
        PermissionsEnum.ViewALLCompaniesList,
      ]
    ),
    new MenuItemModel(
      'Division',
      MenuItemTypeEnum.Dropdown,
      'division',
      'environment',
      [
        new MenuItemListModel(
          'Division',
          'division',
          [
            PermissionsEnum.DeleteDivision,
            PermissionsEnum.CreateUpdateDivision,
            PermissionsEnum.ViewDivisionsList,
          ]
        ),
        new MenuItemListModel(
          'Division Types',
          'division-types',
          [
            PermissionsEnum.CreateUpdateDivisionType,
            PermissionsEnum.ViewDivisionTypesList,
          ]
        ),
      ],
      [
        PermissionsEnum.ViewDivisionsList,
        PermissionsEnum.ViewDivisionTypesList,
      ]
    ),
    new MenuItemModel(
      'Users',
      MenuItemTypeEnum.Dropdown,
      'users',
      'team',
      [
        new MenuItemListModel(
          'Users',
          'users',
          [
            PermissionsEnum.ViewUsersList,
            PermissionsEnum.DeleteUser,
            PermissionsEnum.CreateUpdateUser,
          ]
        ),
        new MenuItemListModel(
          'User Regions',
          'user-regions',
          [
            PermissionsEnum.CreateUserRegion,
            PermissionsEnum.ViewUserRegionsList,
          ]
        ),
        new MenuItemListModel(
          'Roles',
          'roles',
          [
            PermissionsEnum.ViewRolesList,
            PermissionsEnum.CreateUpdateRole,
            PermissionsEnum.DeleteRole
          ]
        ),
        new MenuItemListModel(
          'Permissions',
          'permissions'
        )
      ],
      [
        PermissionsEnum.ViewRolesList,
        PermissionsEnum.CreateUpdateRole,
        PermissionsEnum.DeleteRole,
        PermissionsEnum.CreateUserRegion,
        PermissionsEnum.ViewUserRegionsList,
        PermissionsEnum.ViewUsersList,
        PermissionsEnum.CreateUpdateUser,
        PermissionsEnum.DeleteUser,
      ]
    ),
  ];

  constructor() {
  }
}
