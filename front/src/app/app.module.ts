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
import { ServicesComponent } from './services/services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { EmployesComponent } from './employes/employes.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './CLIENT/home/home.component';
import { AppointmentComponent } from './CLIENT/appointment/appointment.component';
import { ConnectionComponent } from './CLIENT/connection/connection.component';
import { ServiceComponent } from './CLIENT/service/service.component';


import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';





const routes: Routes = [
  
  
  { path: 'admin',
  component: AdminComponent,
  children: [
    {
      path:'Home',
      component: HomeComponent
    },

    {
      path:'Service',
      component: ServiceComponent
    },
    {
      path:'Appointment',
      component: AppointmentComponent
    },
    {
      path:'Connexion',
      component: ConnectionComponent
    },
      { path: 'adduser', component: UserComponent },
      { path: 'loginUser', component: LoginComponent },
      { path: 'addEmploye', component: EmployesComponent },
      { path: 'addService', component: ServicesComponent },

    ]
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
    EmployesComponent
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
    MatIconModule,
    FormsModule,
    MatOptionModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
