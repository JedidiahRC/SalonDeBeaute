export interface Appointment {
  service: string;
  date: Date;
  appointmentTime: string;
  employee: string;
  employeeName?: string;
  note?: string;
  price?: number;
  commission?: number;
  duration?: number;
  clientId?: string;
  clientName?: string;
  clientEmail?: string;
}
