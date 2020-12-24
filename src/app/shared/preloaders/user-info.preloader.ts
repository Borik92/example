import {Injectable} from '@angular/core';
import {AuthService} from '@api/auth/auth.service';
import {Store} from '@ngrx/store';
import {AuthHelperService} from '@pages/auth/services/auth-helper.service';
import {getUserInfoSuccessAction} from '@pages/auth/store/actions/auth-login.actions';

@Injectable({
  providedIn: 'root'
})
export class UserInfoPreloader {

  constructor(
    private authService: AuthService,
    private authHelperService: AuthHelperService,
    private store: Store,
  ) {
  }

  load() {
    return new Promise(async (resolve, reject) => {
      if (localStorage.getItem('token')) {
        this.authService.getUserInfo().subscribe((userInfo) => {
          this.authHelperService.availablePermissionsList = userInfo.permissions.map(permission => permission.name);
          this.store.dispatch(getUserInfoSuccessAction({response: userInfo}));
          resolve(true);
        });
      } else {
        resolve(true);
      }
    });
  }
}
