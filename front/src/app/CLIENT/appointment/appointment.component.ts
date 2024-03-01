import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService
  ) {}
  userId: string | null = null;
  showLoader: boolean = false;
  appointmentForm!: FormGroup;
  appointmentHistory: any[] = [];
  time = '';
  employees: any[] = [];
  services: any[] = [];
  users: any[] = [];

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
    console.log('local storage id:', localStorage.getItem('userId'));
    this.initForm();
    this.loadAppointmentHistory();
    this.fetchEmployees();
    this.fetchServices();
    this.fetchUsers();
    this.fetchAppointments();
    this.appointmentForm = this.formBuilder.group({
      service: ['', Validators.required],
      date: ['', Validators.required],
      appointmentTime: ['', Validators.required],
      employee: ['', Validators.required],
      employeeName: [''],
      note: [''],
      price: [''],
      comission: [''],
      duration: [''],
      clientId: [localStorage.getItem('userId')],
      clientName: [''],
      clientEmail: [''],
    });
  }

  initForm(): void {
    this.appointmentForm = this.formBuilder.group({
      service: ['', Validators.required],
      date: ['', Validators.required],
      appointmentTime: ['', Validators.required],
      employee: ['', Validators.required],
      employeeName: [''],
      note: [''],
      price: [''],
      duration: [''],
      clientName: [''],
      clientEmail: [''],
    });
  }

  fetchEmployees() {
    this.userService.fetchEmployees().subscribe((data) => {
      this.employees = data;
      console.log(data);
    });
  }

  fetchUsers() {
    this.userService.fetchUsers().subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  }

  fetchServices() {
    this.userService.fetchServices().subscribe((data) => {
      this.services = data;
      console.log(data);
    });
  }

  fetchAppointments() {
    this.userService.fetchAppointments().subscribe((data) => {
      this.appointmentHistory = data;
      console.log(data);
    });
  }

  timeForm = new FormGroup({
    time: new FormControl('', Validators.required),
  });

  onTimeSet(time: string) {
    this.time = time;
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      this.showLoader = true;
      this.spinner.show();
      // Fill up the employeeName based on selected employeeid
      const selectedEmployee = this.employees.find(
        (employee) => employee._id === this.appointmentForm.value.employee
      );
      console.log(selectedEmployee);
      if (selectedEmployee) {
        this.appointmentForm.patchValue({
          employeeName: selectedEmployee.name,
        });
      }

      // Find the corresponding service
      const selectedService = this.services.find(
        (service) => service.name === this.appointmentForm.value.service
      );
      if (selectedService) {
        // Fill up price, commission, and duration based on the selected service
        console.log(selectedService);
        const commissionPercentage = parseFloat(selectedService.comission);
        const price = parseFloat(selectedService.price);
        this.appointmentForm.patchValue({
          price: selectedService.price,
          comission: price * (commissionPercentage / 100),
          duration: selectedService.duration,
        });
      }

      const selectedUser = this.users.find((user) => user._id === this.userId);
      if (selectedUser) {
        console.log(selectedUser);
        this.appointmentForm.patchValue({
          clientName: selectedUser.firstName,
          clientEmail: selectedUser.email,
        });
      }

      // Log the filled-up form values
      console.log('Form submitted with values: ', this.appointmentForm.value);
      this.userService.addAppointment(this.appointmentForm.value).subscribe(
        (response) => {
          console.log('Form submitted successfully!', response);
          // this.router.navigate(['/login-user']);
          this.loadAppointmentHistory();
          this.appointmentForm.reset();
          this.showLoader = false;
          this.spinner.hide();
        },
        (error) => {
          this.showLoader = false;
          this.spinner.hide();
          console.error('Error submitting form:', error);
        }
      );
    } else {
      alert('Please, fill up all the input fields');
      console.log('Form is invalid');
    }
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
