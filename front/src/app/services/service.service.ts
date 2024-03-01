// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ServiceService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from './service.model';

@Injectable({
  providedIn: 'root'
})
export class serviceService {
  private baseUrl = 'http://localhost:3000/api/service/addService'; // Update with your backend URL

  constructor(private http: HttpClient) { }


  submitForm(formData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, formData);
  }

  // Implement other CRUD methods like addEmployee, updateEmployee, deleteEmployee
}
