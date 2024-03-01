import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  signupForm!: FormGroup;
  test: Date = new Date();
  focus: any;
  focus1: any;
  http: any;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Signup Form submitted:', this.signupForm.value);
      this.userService.submitForm(this.signupForm.value).subscribe(
        (response) => {
          console.log('Form submitted successfully!', response);
          this.router.navigate(['/login-user']);
        },
        (error) => {
          console.error('Error submitting form:', error);
        }
      );
    }
    if (this.signupForm.valid) {
      this.http.post('/sendEmail', this.signupForm.value).subscribe(
        (response: any) => {
          console.log('Email sent successfully:', response);
          // You can handle success here (e.g., show a success message to the user)
        },
        (error: any) => {
          console.error('Error sending email:', error);
          // You can handle errors here (e.g., show an error message to the user)
        }
      );
    }
  }
}
