import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { isSameDay, isSameMonth } from 'date-fns';
import { Subject } from 'rxjs';
import { EventColor } from 'calendar-utils';
import { MediaService } from 'src/app/service/media.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  mediaPremiere: any;
  events: CalendarEvent[] = [];

  colors: Record<string, EventColor> = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3',
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF',
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA',
    },
  };

  refresh = new Subject<void>();
  activeDayIsOpen: boolean = false;

  constructor(
    private mediaService: MediaService) { }

  ngOnInit() {
    this.mediaService.getAllMediaPremieres().subscribe((response) => {
      this.mediaPremiere = response;
      console.log(this.mediaPremiere);

      for (let mp of this.mediaPremiere) {
        let event = {
          start: new Date(mp.releaseDate),
          end: new Date(mp.releaseDate),
          title: `Estreno de ${mp.mediaType == 'Film' ? 'Película' : 'Serie'}: ${mp.mediaTitle}`,
          color: mp.mediaType == 'Film' ? { ...this.colors['blue'] } : { ...this.colors['red'] },
          allDay: true,
        }

        this.events.push(event);
        if (isSameMonth(this.viewDate, this.viewDate)) {
          if (
            (isSameDay(this.viewDate, this.viewDate) && this.activeDayIsOpen === true) ||
            this.events.length === 0
          ) {
            this.activeDayIsOpen = false;
          } else {
            this.activeDayIsOpen = true;
          }
          this.viewDate = new Date();
        }
      }
    });
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

}
