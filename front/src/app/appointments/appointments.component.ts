// appointments.component.ts
import { Component } from '@angular/core';
import { DateFilterFn } from '@angular/material/datepicker';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css'],
})
export class AppointmentsComponent {
  services: string[] = ['Haircut', 'Manicure', 'Pedicure', 'Facial'];
  daysOfWeek: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  appointmentTimes: string[] = [
    '09:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '01:00 PM',
    '02:00 PM',
    '03:00 PM',
    '04:00 PM',
  ];
  employees: string[] = ['Employee 1', 'Employee 2', 'Employee 3']; // Mock employee data
  // You can add more properties and methods as needed

  today = new Date();

  filterPastDates: DateFilterFn<Date | null> = (date: Date | null): boolean => {
    // Your logic to filter past dates here
    const today = new Date();
    return date ? date >= today : false;
  };
}
