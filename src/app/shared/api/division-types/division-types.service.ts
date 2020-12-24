import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {IDivisionTypeModel} from '@api/division-types/res/division-type.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DivisionTypesService {
  filterName = '';
  filterDescription = '';
  filterIdentifier = '';

  constructor(private httpClient: HttpClient) {
  }

  getDivisionTypesList(): Observable<IDivisionTypeModel[]> {
    let params = new HttpParams();
    if (this.filterName) {
      params = params.set('filterName', this.filterName);
    }
    if (this.filterDescription) {
      params = params.set('filterDescription', this.filterDescription);
    }
    if (this.filterIdentifier) {
      params = params.set('filterIdentifier', this.filterIdentifier);
    }
    return this.httpClient.get<IDivisionTypeModel[]>('division-types', {params});
  }

  getOneDivisionType(id: string): Observable<IDivisionTypeModel> {
    return this.httpClient.get<IDivisionTypeModel>(`division-types/${id}`);
  }

  createDivisionType(data): Observable<IDivisionTypeModel> {
    return this.httpClient.post<IDivisionTypeModel>('division-types', data);
  }

  editDivisionType(id: string, data): Observable<IDivisionTypeModel> {
    return this.httpClient.put<IDivisionTypeModel>(`division-types/${id}`, data);
  }

  deleteDivisionType(id: string) {
    return this.httpClient.delete(`division-types/${id}`);
  }

  resetAllFilters() {
    this.filterName = '';
    this.filterDescription = '';
    this.filterIdentifier = '';
  }
}
