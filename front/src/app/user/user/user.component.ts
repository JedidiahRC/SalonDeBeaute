import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  signupForm!: FormGroup;
  test : Date = new Date();
    focus: any;
    focus1: any;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
    ) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {

  }

   onSubmit() {
    if (this.signupForm.valid) {
      console.log('Signup Form submitted:', this.signupForm.value);
      this.userService.submitForm(this.signupForm.value)
        .subscribe(
          response => {
            console.log('Form submitted successfully!', response);
            // Optionally, you can reset the form after successful submission
            this.signupForm.reset();
          },
          error => {
            console.error('Error submitting form:', error);
          }
        );
    }
  }
}
