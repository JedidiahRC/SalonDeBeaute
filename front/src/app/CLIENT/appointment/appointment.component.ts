import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  time = '';
  employees: any[] = [];
  services: any[] = [];
  constructor(private http: HttpClient, private userService: UserService) {}

  ngOnInit(): void {
    this.fetchEmployees();
    this.fetchServices();
  }

  fetchEmployees() {
    this.userService.fetchEmployees().subscribe((data) => {
      this.employees = data;
    });
  }

  fetchServices() {
    this.userService.fetchServices().subscribe((data) => {
      this.services = data;
    });
  }

  timeForm = new FormGroup({
    time: new FormControl('', Validators.required),
  });

  onTimeSet(time: string) {
    this.time = time;
  }

  onSubmit() {
    if (this.timeForm.invalid) {
      console.log(this.timeForm.touched);
      return;
    }

    console.log(this.timeForm.value);
  }
}
