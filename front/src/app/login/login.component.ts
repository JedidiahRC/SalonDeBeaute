import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth-service.service';
import { MatDialog } from '@angular/material/dialog';
import { AuthErrorDialogComponent } from '../auth-error-dialog/auth-error-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (response) => {
          console.log('Login successful!', response);
          this.router.navigate(['/admin/accueil']);
        },
        (error) => {
          console.error('Error logging in:', error);
          this.openErrorDialog(
            'Authentication failed. Please check your credentials.'
          );
        }
      );
    }
  }

  openErrorDialog(errorMessage: string): void {
    this.dialog.open(AuthErrorDialogComponent, {
      data: { errorMessage: errorMessage },
    });
  }
}
