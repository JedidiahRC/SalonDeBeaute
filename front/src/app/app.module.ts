import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './user/user/user.component';
import { PersonelComponent } from './user/personel/personel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { TestsComponent } from './tests/tests.component';
import { LoginComponent } from './login/login.component';
import { ServicesComponent } from './services/services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EmployesComponent } from './employes/employes.component';
// import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AuthErrorDialogComponent } from './auth-error-dialog/auth-error-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AccueilComponent } from './accueil/accueil.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppointmentsComponent } from './appointments/appointments.component';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'accueil', component: AccueilComponent },
      { path: 'add-user', component: UserComponent },
      { path: 'login-user', component: LoginComponent },
      { path: 'addEmploye', component: EmployesComponent },
      { path: 'add-appointment', component: AppointmentsComponent },
    ],
  },
  // Add other routes as needed
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PersonelComponent,
    AdminComponent,
    TestsComponent,
    LoginComponent,
    ServicesComponent,
    EmployesComponent,
    AuthErrorDialogComponent,
    AccueilComponent,
    AppointmentsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSliderModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatCardModule,
    MatSelectModule,
    MatNativeDateModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
