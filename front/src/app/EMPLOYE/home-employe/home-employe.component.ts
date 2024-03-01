import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/CLIENT/user.service';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home-employe',
  templateUrl: './home-employe.component.html',
  styleUrls: ['./home-employe.component.css'],
})
export class HomeEmployeComponent implements OnInit, OnDestroy {
  appointmentHistory: any[] = [];
  employeeId: string | null = null;
  private unsubscribe$ = new Subject<void>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.employeeId = localStorage.getItem('userId');
    console.log('local storage id:', localStorage.getItem('userId'));

    if (this.employeeId) {
      console.log('getting appointments');

      this.userService
        .getAppointmentsByEmployeeId(this.employeeId)
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe(
          (appointments) => {
            this.appointmentHistory = appointments;
            console.log('Appointments:', this.appointmentHistory);
          },
          (error) => {
            console.error('Error fetching appointments:', error);
          }
        );
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
