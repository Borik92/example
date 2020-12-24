import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {IRolesModel} from '@api/roles/res/roles.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private httpClient: HttpClient) {
  }

  getRolesList(): Observable<IRolesModel[]> {
    return this.httpClient.get<IRolesModel[]>('roles');
  }

  getOneRole(id: string): Observable<IRolesModel> {
    return this.httpClient.get<IRolesModel>(`roles/${id}`);
  }

  createRole(data): Observable<IRolesModel> {
    return this.httpClient.post<IRolesModel>('roles', data);
  }

  editRole(id: string, data): Observable<IRolesModel> {
    return this.httpClient.put<IRolesModel>(`roles/${id}`, data);
  }

  deleteRole(id: string) {
    return this.httpClient.delete(`roles/${id}`);
  }
}
