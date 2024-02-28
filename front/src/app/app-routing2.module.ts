import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UserComponent } from './user/user/user.component';
import { LoginComponent } from './login/login.component';
import { EmployesComponent } from './employes/employes.component';
import { ServicesComponent } from './services/services.component';
import { PersonelComponent } from './user/personel/personel.component';
import { TestsComponent } from './tests/tests.component';

const routes: Routes = [
  { path: 'testauth2', component: TestsComponent },
  // {
  //   path: 'admin',
  //   component: AdminComponent,
  //   children: [
  //     {
  //       path: 'Home',
  //       component: HomeAdminComponent,
  //     },
  //     {
  //       path: 'Service',
  //       component: ServiceComponent,
  //     },
  //     {
  //       path: 'Connexion',
  //       component: ConnectionManagerComponent,
  //     },
  //     { path: 'add-user', component: UserComponent },
  //     { path: 'login-user', component: ConnectionComponent },
  //     { path: 'addEmploye', component: EmployesComponent },
  //     { path: 'addService', component: ServicesComponent },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule2 {}
