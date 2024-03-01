import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-auth-error-dialog',
  templateUrl: './auth-error-dialog.component.html',
  styleUrls: ['./auth-error-dialog.component.css']
})
export class AuthErrorDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
