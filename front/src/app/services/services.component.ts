import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { serviceService } from './service.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  servicesForm !: FormGroup;

  constructor(
    private fb: FormBuilder,
    private serviceService: serviceService
    ) {

  this.createForm();
  
  }

  createForm() {
    this.servicesForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.email]],
      duration: ['', Validators.required],
    });
  }


onSubmit() {
  if (this.servicesForm.valid) {
    console.log('Signup Form submitted:', this.servicesForm.value);
    this.serviceService.submitForm(this.servicesForm.value)
      .subscribe(
        response => {
          console.log('Form submitted successfully!', response);
        },
        error => {
          console.error('Error submitting form:', error);
        }
      );
  }
}
}
