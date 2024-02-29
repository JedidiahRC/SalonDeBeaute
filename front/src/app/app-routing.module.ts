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
import { EmployesComponent } from './MANAGER/employes/employes.component';
import { ServicesComponent } from './MANAGER/services/services.component';
import { PersonelComponent } from './user/personel/personel.component';
import { HomeComponent } from './CLIENT/home/home.component';
import { ConnectionComponent } from './CLIENT/connection/connection.component';
import { ServiceComponent } from './CLIENT/service/service.component';
import { ClientNavbarComponent } from './CLIENT/navbarClient/client-navbar.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'add-user', component: UserComponent },
  { path: 'login-user', component: ConnectionComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'client',
    component: ClientNavbarComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },

      {
        path: 'service',
        component: ServiceComponent,
      },
      {
        path: 'appointment',
        component: AppointmentComponent,
      },
      { path: 'add-user', component: UserComponent },
      { path: 'login-user', component: ConnectionComponent },
      // { path: 'addEmploye', component: EmployesComponent },
      // { path: 'addService', component: ServicesComponent },
    ],
  },

  // Add other routes as needed

  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
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
