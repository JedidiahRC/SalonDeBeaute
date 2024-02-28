import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatIconModule } from '@angular/material/icon';
import { UserComponent } from './user/user/user.component';
import { PersonelComponent } from './user/personel/personel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { TestsComponent } from './tests/tests.component';
import { LoginComponent } from './login/login.component';
// import { ServicesComponent } from '.CLIENT/service/service.component';
import { ServiceComponent } from './CLIENT/service/service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EmployesComponent } from './employes/employes.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AuthErrorDialogComponent } from './auth-error-dialog/auth-error-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AccueilComponent } from './accueil/accueil.component';
import { MatButtonModule } from '@angular/material/button';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointmentComponent } from './CLIENT/appointment/appointment.component';
import { MatSliderModule } from '@angular/material/slider';
import { ConnectionComponent } from './CLIENT/connection/connection.component';
import { ClientNavbarComponent } from './CLIENT/navbarClient/client-navbar.component';
import { HomeComponent } from './CLIENT/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PersonelComponent,
    AdminComponent,
    TestsComponent,
    LoginComponent,
    ServiceComponent,
    UserComponent,
    EmployesComponent,
    AccueilComponent,
    AuthErrorDialogComponent,
    ConnectionComponent,
    HomeComponent,
    AppointmentComponent,
    ClientNavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatOptionModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AppRoutingModule,
    MatSliderModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
