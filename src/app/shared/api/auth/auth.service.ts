import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUsersModel} from '@api/users/res/user.interface';
import {LoginReqModel} from './req/login-req.model';
import {Observable} from 'rxjs';
import {ILoginResModel} from './res/login-res.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  login(data: LoginReqModel): Observable<ILoginResModel> {
    return this.httpClient.post<ILoginResModel>('authenticate', data);
  }

  getUserInfo(): Observable<IUsersModel> {
    return this.httpClient.get<IUsersModel>('users/me');
  }

  setToken(response: ILoginResModel) {
    localStorage.setItem('token', response.jwt);
  }

}
