import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import {
  DateRangePickerComponent,
  CalendarView,
} from '@syncfusion/ej2-angular-calendars';
import { AuthService } from '../core/auth/auth.service';
import { Dorm } from '../models/Dorm.model';
import { LoginError } from '../models/Error.model';
import { Router } from '@angular/router';
import { DormListService } from '../dormServices/dorm-list.service';




@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  public start: CalendarView = 'Year';
  public depth: CalendarView = 'Year';
  public format: string = 'MMM yyyy';
  public min: Date = new Date(); // Set the minimum selectable month to the current month and year
  public max: Date = new Date(new Date().getFullYear() + 2, new Date().getMonth(), 1);
  @ViewChild('daterangepicker') dateRangePicker: DateRangePickerComponent;
  openCalendar() {
    this.dateRangePicker.show();
  }

  calendarDate: Date; //Useless, just for form validation

  startDate: Date;
  endDate: Date;
  NumberOfGuests: number = 1;
  Location: string = 'LAU Beirut';

  constructor(private dormService : DormListService) {
  }

  
  onSearchForm() {
    // onSearchForm(Location, StartDate, EndDate, NumberOfGuests, PriceDist?: string, Rating?: string, Gender?: string, SharedKitchen?: boolean, Parking?: boolean) {  

    localStorage.setItem('Location', this.Location);
    this.dormService.onSearchForm(this.Location, this.startDate, this.endDate, this.NumberOfGuests, "default", 0 , "default", false, false);

  //   const startDate = this.formatDate(this.startDate);
  //   const endDate = this.formatDate(this.endDate);

  //   const durationInMonths = this.calculateDurationInMonths(this.startDate, this.endDate);
    
  //   this.authService.MainSearch(this.Location, startDate, endDate, this.NumberOfGuests).subscribe(
  //     (Dorms: Dorm[]) => {
  //       console.log("Dorms length: " +Dorms.length);
  //       this.dormService.DormsSearchResult.next(Dorms);
  //       localStorage.setItem('dorms', JSON.stringify(Dorms));
  //       this.dormService.DuratonOfStay.next(durationInMonths);
  //       localStorage.setItem('duration', JSON.stringify(durationInMonths));
  //       this.dormService.CheckinDate.next(startDate);
  //       localStorage.setItem('CheckinDate', JSON.stringify(startDate));
  //       this.dormService.CheckoutDate.next(endDate);
  //       localStorage.setItem('CheckoutDate', JSON.stringify(endDate));


  //       this.dormService.ReturnedError.next('');
  //       this.router.navigate(['/propertyList']);

  //     }, (ResponseError: any) => {
  //       this.dormService.DormsSearchResult.next(null);
  //       this.dormService.ReturnedError.next(ResponseError.error.message);
  //       this.router.navigate(['/propertyList']);
  //     });
  }

  // private formatDate(date: Date): string {
  //   const options: any = { month: 'short', year: 'numeric' };
  //   return new Intl.DateTimeFormat('en-US', options).format(date);
  // }

  // private calculateDurationInMonths(startDate: Date, endDate: Date): number {
  //   // Calculate the difference in milliseconds
  //   const timeDifference = endDate.getTime() - startDate.getTime();
  
  //   // Convert the difference to months
  //   const durationInMonths = timeDifference / (1000 * 60 * 60 * 24 * 30.44); // An average month duration
  
  //   // Round the result to get the whole months
  //   return Math.round(durationInMonths);
  // }
}
