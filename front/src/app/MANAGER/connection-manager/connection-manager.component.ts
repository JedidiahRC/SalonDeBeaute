import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthErrorDialogComponent } from '../../auth-error-dialog/auth-error-dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UserService } from 'src/app/CLIENT/connection/user.service';

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
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    this.isLoading = true;
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe(
        (response) => {
          this.isLoading = false;
          console.log('Login successful!', response);
          this.router.navigate(['/client/home']);
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
