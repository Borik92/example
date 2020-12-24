import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUsersModel} from '@api/users/res/user.interface';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private httpClient: HttpClient) {
  }

  getUsersList(): Observable<IUsersModel[]> {
    return this.httpClient.get<IUsersModel[]>('users');
  }

  getOneUser(id: string): Observable<IUsersModel> {
    return this.httpClient.get<IUsersModel>(`users/${id}`);
  }

  createUser(data): Observable<IUsersModel> {
    return this.httpClient.post<IUsersModel>('users', data);
  }

  createNewPassword(id: string, data): Observable<IUsersModel> {
    return this.httpClient.post<IUsersModel>('users/set-password', data);
  }

  editUser(id: string, data): Observable<IUsersModel> {
    return this.httpClient.put<IUsersModel>(`users/${id}`, data);
  }

  editUserPermissions(id: string, data): Observable<IUsersModel> {
    return this.httpClient.post<IUsersModel>(`users/${id}/change-permissions`, data);
  }

  editUserPassword(id: string, data): Observable<IUsersModel> {
    return this.httpClient.post<IUsersModel>(`users/${id}`, data);
  }

  deleteUser(id: string) {
    return this.httpClient.delete(`users/${id}`);
  }
}
