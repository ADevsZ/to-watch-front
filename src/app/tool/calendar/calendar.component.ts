import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CalendarEvent, CalendarEventAction, CalendarView } from 'angular-calendar';
import { ScriptService } from 'src/app/service/script.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, OnDestroy{
  @ViewChild('modalContent', { static: true }) modalContent?: TemplateRef<any>;
  view: CalendarView = CalendarView.Month
  CalendarView = CalendarView;
  viewDate: Date = new Date();

  modalData?: {
    action: string,
    event: CalendarEvent
  };

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    
  }

  constructor () { 
  }

  ngOnDestroy() {
  }

  ngOnInit() {
    
   }

}
