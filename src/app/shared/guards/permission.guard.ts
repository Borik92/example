import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {AuthHelperService} from '@pages/auth/services/auth-helper.service';
import {AppHelper} from '@services/app-helper.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {
  constructor(private authHelperService: AuthHelperService, private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree | any {
      if (!AppHelper.intersection(this.authHelperService.availablePermissionsList, next.data.permissions).length) {
        this.router.navigate(['', 'orders', 'list']);
      } else {
        return true;
      }
  }
}
