import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { RouterOutlet } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private spinner: NgxSpinnerService
  ) {}
  showLoader: boolean = false;
  appointmentForm!: FormGroup;
  appointmentHistory: any[] = [];
  time = '';
  employees: any[] = [];
  services: any[] = [];

  ngOnInit(): void {
    this.loadAppointmentHistory();
  }

  loadAppointmentHistory(): void {
    this.showLoader = true;
    this.spinner.show();
    // Fetch appointment history from service
    this.userService.fetchAppointments().subscribe(
      (history) => {
        this.showLoader = false;
        this.spinner.hide();
        this.appointmentHistory = history;
      },
      (error) => {
        this.showLoader = false;
        this.spinner.hide();
        console.error('Error fetching appointment history:', error);
      }
    );
  }
}
