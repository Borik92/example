import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {IUsersModel} from '@api/users/res/user.interface';
import {MenuItemTypeEnum} from '@enums/menu-item-type.enum';
import {PermissionsEnum} from '@enums/permissions.enum';
import {Actions} from '@ngrx/effects';
import {select, Store} from '@ngrx/store';
import {userInfoSelector} from '@pages/auth/store/selectors/auth-login.selectors';
import {Observable} from 'rxjs';
import {MenuHelperService} from './services/menu-helper.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  isCollapsed = false;
  isOpenPlaceAnOrderModal = false;
  menuItemTypeEnum = MenuItemTypeEnum;
  user$: Observable<IUsersModel>;
  PermissionsEnum = PermissionsEnum;
  constructor(
    public helperService: MenuHelperService,
    public router: Router,
    private store: Store,
    private actionsSubject: Actions
  ) {
  }

  ngOnInit(): void {
    this.initializeValues();
  }

  logOut() {
    localStorage.clear();
    window.location.href = window.location.origin;
  }

  initializeValues() {
    this.user$ = this.store.pipe(select(userInfoSelector));
  }
}


