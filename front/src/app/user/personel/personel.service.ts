import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class PersonelService {
  private url = environment.backendUrl;
  private baseUrl = `${this.url}/signup`;

  constructor(private http: HttpClient) {}

  submitForm(formData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, formData);
  }
}
