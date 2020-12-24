import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUserRegionsModel} from '@api/user-regions/res/user-regions.interface';

@Injectable({
  providedIn: 'root'
})
export class UserRegionsService {

  constructor(private httpClient: HttpClient) {
  }

  getUserRegionsList(): Observable<IUserRegionsModel[]> {
    return this.httpClient.get<IUserRegionsModel[]>('user-regions');
  }

  getOneUserRegion(id: string): Observable<IUserRegionsModel> {
    return this.httpClient.get<IUserRegionsModel>(`user-regions/${id}`);
  }

  createUserRagion(data): Observable<IUserRegionsModel> {
    return this.httpClient.post<IUserRegionsModel>('user-regions', data);
  }

  editUserRegion(id: string, data): Observable<IUserRegionsModel> {
    return this.httpClient.put<IUserRegionsModel>(`user-regions/${id}`, data);
  }

  deleteUserRegion(id: string) {
    return this.httpClient.delete(`user-regions/${id}`);
  }
}
