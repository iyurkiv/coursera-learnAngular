import { HttpClient } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { ProviderClass } from '../models/providers.class';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  apiUrl = 'http://localhost:3000/api/providers/'

  constructor(private http: HttpClient) { }

  // GET all records
  getProviders(): Observable<any>{
    return this.http.get(this.apiUrl);
  }

  // GET one record
  getProvider(id: number): Observable<any>{
    return this.http.get(this.apiUrl + id);
  }

  // PUT - Update a record
  updateProvider(id: number, newProvider: ProviderClass): Observable<ProviderClass>{
    return this.http.put<ProviderClass>(this.apiUrl + id, newProvider );
  }

  // POST
  addProvider(newProvider: ProviderClass): Observable<any>{
    return this.http.post(this.apiUrl, newProvider);
  }

  // GE

}
