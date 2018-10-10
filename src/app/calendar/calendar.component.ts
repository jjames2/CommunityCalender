import { Component, OnInit } from '@angular/core';
import { CalendarView } from 'angular-calendar';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  constructor() { }

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewData: Date = new Date();

  ngOnInit() {}
}
