import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://127.0.0.1:3000/api/auth';
  employees: any[] = [];

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, credentials);
  }

  fetchEmployees(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/employe/getEmploye');
  }

  fetchServices(): Observable<any[]> {
    return this.http.get<any[]>(
      'http://localhost:3000/api/service/getAllServices'
    );
  }
}
