import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthErrorDialogComponent } from '../../auth-error-dialog/auth-error-dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UserService } from 'src/app/CLIENT/user.service';

@Component({
  selector: 'app-connection-manager',
  templateUrl: './connection-manager.component.html',
  styleUrls: ['./connection-manager.component.css'],
})
export class ConnectionManagerComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  spinner!: MatProgressSpinnerModule;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['admin@gmail.com', [Validators.required, Validators.email]],
      password: ['123456', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.isLoading = true;
    if (this.loginForm.valid) {
      this.userService.loginManager(this.loginForm.value).subscribe(
        (response) => {
          this.isLoading = false;
          console.log('Login successful!', response);
          this.router.navigate(['/manager/dashboard']);
        },
        (error) => {
          this.isLoading = false;
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
