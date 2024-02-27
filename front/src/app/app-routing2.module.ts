import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AccueilComponent } from './accueil/accueil.component';
import { UserComponent } from './user/user/user.component';
import { LoginComponent } from './login/login.component';
import { EmployesComponent } from './employes/employes.component';
import { ServicesComponent } from './services/services.component';
import { PersonelComponent } from './user/personel/personel.component';

const routes: Routes = [
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
      { path: 'manehoPersisonelina', component: PersonelComponent },
    ],
  },
  // Add other admin routes as needed
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule2 {}
