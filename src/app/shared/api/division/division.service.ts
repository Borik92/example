import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IDivisionModel} from '@api/division/res/division.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {
  filterIdentifier = '';
  filterName = '';
  filterAddress = '';


  constructor(private httpClient: HttpClient) { }

  getDivisionsList(): Observable<IDivisionModel[]> {
    let params = new HttpParams();
    if (this.filterIdentifier) {
      params = params.set('filterIdentifier', this.filterIdentifier);
    }
    if (this.filterName) {
      params = params.set('filterName', this.filterName);
    }
    if (this.filterAddress) {
      params = params.set('filterAddress', this.filterAddress);
    }
    return this.httpClient.get<IDivisionModel[]>('divisions', {params});
  }

  getOneDivision(id: string): Observable<IDivisionModel> {
    return this.httpClient.get<IDivisionModel>(`divisions/${id}`);
  }

  createDivision(data): Observable<IDivisionModel> {
    return this.httpClient.post<IDivisionModel>('divisions', data);
  }

  editDivision(id: string, data): Observable<IDivisionModel> {
    return this.httpClient.put<IDivisionModel>(`divisions/${id}`, data);
  }

  deleteDivision(id: string) {
    return this.httpClient.delete(`divisions/${id}`);
  }

  resetAllFilters() {
    this.filterIdentifier = '';
    this.filterName = '';
    this.filterAddress = '';
  }
}
