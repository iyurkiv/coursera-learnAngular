import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
