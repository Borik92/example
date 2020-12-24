import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IPermissionsModel} from '@api/permissions/res/permissions.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor(private httpClient: HttpClient) { }

  getPermissionsList(): Observable<IPermissionsModel[]> {
    return this.httpClient.get<IPermissionsModel[]>('permissions');
  }
}
