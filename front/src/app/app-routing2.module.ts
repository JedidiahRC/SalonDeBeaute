import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UserComponent } from './user/user/user.component';
import { LoginComponent } from './login/login.component';
import { EmployesComponent } from './MANAGER/employes/employes.component';
import { ServicesComponent } from './MANAGER/services/services.component';
import { PersonelComponent } from './user/personel/personel.component';
import { TestsComponent } from './tests/tests.component';
import { NavbarManagerComponent } from './MANAGER/navbar-manager/navbar-manager.component';
import { ConnectionManagerComponent } from './MANAGER/connection-manager/connection-manager.component';
import { HomeManagerComponent } from './MANAGER/home-manager/home-manager.component';
import { LoginEmployeComponent } from './EMPLOYE/login-employe/login-employe.component';
import { NavbarEmployeComponent } from './EMPLOYE/navbar-employe/navbar-employe.component';
import { ProfilEmployeComponent } from './EMPLOYE/profil-employe/profil-employe.component';
import { HomeEmployeComponent } from './EMPLOYE/home-employe/home-employe.component';

const routes: Routes = [
  { path: 'login-manager', component: ConnectionManagerComponent },

  {
    path: 'manager',
    component: NavbarManagerComponent,
    children: [
      {
        path: 'add-employee',
        component: EmployesComponent,
      },
      {
        path: 'add-service',
        component: ServicesComponent,
      },
      {
        path: 'dashboard',
        component: HomeManagerComponent,
      },
    ],
  },
  { path: 'login-employe', component: LoginEmployeComponent },
  {
    path: 'employe',
    component: NavbarEmployeComponent,
    children: [
      {
        path: 'profil',
        component: ProfilEmployeComponent,
      },
      {
        path: 'home',
        component: HomeEmployeComponent,
      },
      {
        path: 'dashboard',
        component: HomeManagerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule2 {}
