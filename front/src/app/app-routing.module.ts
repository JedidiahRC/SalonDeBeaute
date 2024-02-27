import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule2 } from './app-routing2.module';
import { AppComponent } from './app.component';
import { TestsComponent } from './tests/tests.component';
import { AuthErrorDialogComponent } from './auth-error-dialog/auth-error-dialog.component';
import { AppointmentComponent } from './CLIENT/appointment/appointment.component';
import { AdminComponent } from './admin/admin.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UserComponent } from './user/user/user.component';
import { LoginComponent } from './login/login.component';
import { EmployesComponent } from './employes/employes.component';
import { ServicesComponent } from './services/services.component';
import { PersonelComponent } from './user/personel/personel.component';
import { HomeComponent } from './CLIENT/home/home.component';
import { ConnectionComponent } from './CLIENT/connection/connection.component';

const routes: Routes = [
  {
    path:'Home',
    component: HomeComponent
  },
  {
    path:'Services',
    component: ServicesComponent
  },
  {
    path:'Appointment',
    component: AppointmentComponent
  },
  {
    path:'Connexion',
    component: ConnectionComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'accueil', component: AccueilComponent },
      { path: 'adduser', component: UserComponent },
      { path: 'loginUser', component: LoginComponent },
      { path: 'addEmploye', component: EmployesComponent },
      { path: 'addService', component: ServicesComponent },
      { path: 'showMe', component: PersonelComponent },
    ],
  },
  { path: '', redirectTo: '/admin', pathMatch: 'full' },
  { path: 'tests', component: TestsComponent },
  // { path: 'auth-error', component: AuthErrorDialogComponent },
  // { path: 'appointments', component: AppointmentsComponent },
  // { path: '', redirectTo: '/admin/accueil' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AppRoutingModule2],
  exports: [RouterModule],
})
export class AppRoutingModule {}
