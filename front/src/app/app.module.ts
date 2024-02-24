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

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'adduser', component: UserComponent },
      { path: 'loginUser', component: LoginComponent },
      { path: 'addEmploye', component: EmployesComponent },
      { path: 'addService', component: ServicesComponent },
      { path: 'showMe', component: PersonelComponent },
      { path: 'manehoPersisonelina', component: PersonelComponent },
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
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
