// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class EmployeeService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe } from './employe.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:3000/api/employe/addEmploye'; // Update with your backend URL

  constructor(private http: HttpClient) { }


  submitForm(formData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, formData);
  }

  // Implement other CRUD methods like addEmployee, updateEmployee, deleteEmployee
}

