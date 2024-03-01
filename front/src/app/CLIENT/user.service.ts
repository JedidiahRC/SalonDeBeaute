import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://127.0.0.1:3000/api';
  employees: any[] = [];

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, credentials);
  }
  loginManager(credentials: {
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}/auth/loginManager`,
      credentials
    );
  }
  loginEmploye(credentials: {
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}/auth/loginEmploye`,
      credentials
    );
  }

  fetchEmployees(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/employe/getEmploye`);
  }
  fetchUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/auth/users`);
  }

  fetchServices(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/service/getAllServices`);
  }
  fetchAppointments(): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.baseUrl}/appointment/getAllAppointments`
    );
  }

  addAppointment(appointmentData: any): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}/appointment/createAppointment`,
      appointmentData
    );
  }

  getAppointmentsByEmployeeId(employeeId: string): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.baseUrl}/appointment/getAppointmentsByUser/${employeeId}`
    );
  }
}
