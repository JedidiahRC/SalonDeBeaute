// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-employes',
//   templateUrl: './employes.component.html',
//   styleUrls: ['./employes.component.css']
// })
// export class EmployesComponent {

// }



// import { Component, OnInit } from '@angular/core';
// import { EmployeeService } from './employee.service';
// import { Employe } from './employe.model';

// @Component({
//   selector: 'app-employes',
//   templateUrl: './employes.component.html',
//   styleUrls: ['./employes.component.css']
// })
// export class EmployesComponent implements OnInit {
// [x: string]: any;
//   employes: Employe[] | undefined;
// employe: any;

//   constructor(private employeeService: EmployeeService) { }

//   ngOnInit(): void {
//     this.employeeService.getAllEmployees().subscribe(employees => {
//       this.employes = employees;
//     });
//   }
// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent {
  employeeForm !: FormGroup;
  signupForm!: FormGroup<any>;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
    ) {

  this.createForm();
  
  }

  createForm() {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      adresse: ['', Validators.required],
      contact: ['', Validators.required],
      specialite: ['', Validators.required],
      horaire: ['', Validators.required],
      salaire: [null, Validators.required],
      statut: ['', Validators.required],
      is_admin: [0, Validators.required] // Assuming default value is 0
    });
  }




onSubmit() {
  if (this.employeeForm.valid) {
    console.log('Signup Form submitted:', this.employeeForm.value);
    this.employeeService.submitForm(this.employeeForm.value)
      .subscribe(
        response => {
          console.log('Form submitted successfully!', response);
          // Optionally, you can reset the form after successful submission
          // this.employeeForm.reset();
        },
        error => {
          console.error('Error submitting form:', error);
        }
      );
  }
}}


