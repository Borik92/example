import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ICompanyModel} from '@api/company/res/company.interface';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) { }

  getCompanyList(): Observable<ICompanyModel[]> {
    return this.httpClient.get<ICompanyModel[]>('companies');
  }

  getOneCompany(id: string): Observable<ICompanyModel> {
    return this.httpClient.get<ICompanyModel>(`companies/${id}`);
  }

  createCompany(data): Observable<ICompanyModel> {
    return this.httpClient.post<ICompanyModel>('companies', data);
  }

  editCompany(id: string, data): Observable<ICompanyModel> {
    return this.httpClient.put<ICompanyModel>(`companies/${id}`, data);
  }

  deleteCompany(id: string) {
    return this.httpClient.delete(`companies/${id}`);
  }
}
