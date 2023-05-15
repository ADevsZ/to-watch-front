import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit{

  SIZE = 480;
  YEAR = 2013;
  MONTH = 9;
  MONTHS_NAMES = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE",];
  WEEKDAYS_NAMES = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado",];
  COLOR_MONTHS = ["#16a085", "#1abc9c", "#16a085", "#1abc9c", "#16a085", "#1abc9c", "#16a085", "#1abc9c", "#16a085", "#1abc9c", "#16a085", "#1abc9c",];

  calendar;
  cHeader;
  cWeekdays;
  cContent;

  // cWeeksdaysDiv;
  // cContentDiv;

  // cHeaderLeftIcon;
  // cHeaderRightIcon;

  constructor () {
    this.calendar = document.getElementById("calendar")!;
    this.cHeader = document.getElementById("calendar-header")!;
    this.cWeekdays = document.getElementById("calendar-weekdays")!;
    this.cContent = document.querySelector("#calendar-content")!;

    console.log(document.querySelector("#calendar-content"));

    // this.cWeeksdaysDiv = this.cWeekdays.getElementsByTagName("div").item(0)!;
    // this.cContentDiv = this.cWeekdays.getElementsByTagName("div").item(0)!;

    // this.cHeaderLeftIcon = this.cHeader.getElementsByClassName('bi-chevron-left').item(0)!;
    // this.cHeaderRightIcon = this.cHeader.getElementsByClassName('bi-chevron-right').item(0)!;
  }

  ngOnInit() {
    // console.log(this.cWeekdays.getElementsByTagName("div"));
    this.setYearAndMonthToday();
    this.addContent();

    // let iconRight = this.cHeader.getElementsByClassName('bi-chevron-right');

    // this.cHeaderLeftIcon.addEventListener("click", () => {
    //   this.changeYearCalendar("previous");
    // });

    // this.cHeaderRightIcon.addEventListener("click", () => {
    //   this.changeYearCalendar("next");
    // });
  }

  getMonthDay(year: number, month: number) {
    return new Date(year, month, 0).getDate();
  }

  getWeekDay(year: number, month: number, day: number) {
    return new Date(year, month-1, day).getDay();
  }

  getDateFormat(day: Date) {
    return day.getFullYear() + "/" + (day.getMonth() + 1) + "/" + day.getDate();
  }

  checkTodayDate(day: Date) {
    return this.getDateFormat(new Date()) == this.getDateFormat(day);
  }

  setYearAndMonthToday() {
    let date = new Date();
    this.YEAR = date.getFullYear();
    this.MONTH = date.getMonth() + 1;
  }

  changeYearCalendar(year: any) {
    this.MONTH = year == "next" ? this.MONTH + 1 : this.MONTH - 1;

    if (this.MONTH < 1) {
      this.MONTH = 12;
      this.YEAR -= 1;
    } else if (this.MONTH > 12) {
      this.MONTH = 1;
      this.YEAR += 1;
    }

    this.addContent();
  }

  appendWeekdays() {
    // this.cWeekdays;
    for (let e = 0; e < 7; e++) {
      this.cWeekdays?.append("<div>" + this.WEEKDAYS_NAMES[e].substring(0,3) + "</div>");
    }
  }

  appendDayMonthWeek() {
    let list = [];

    for (let r = 1; r < this.getMonthDay(this.YEAR, this.MONTH) + 1; r++) {
      list.push({ day: r, weekday: this.WEEKDAYS_NAMES[this.getWeekDay(this.YEAR, this.MONTH, r)] });
    }

    return list;
  }

  applyContentStyle() {
    // this.calendar.style.width = (this.SIZE + "px");
    // this.cWeekdays.style.width = (this.SIZE + "px");
    // this.cContent.style.width = (this.SIZE + "px");

    // this.cWeeksdaysDiv.style.width = (this.SIZE / 7 + "px");
    // this.cWeeksdaysDiv.style.height = (this.SIZE / 7 + "px");
    // this.cWeeksdaysDiv.style.lineHeight = (this.SIZE / 7 + "px");

    // this.cContentDiv.style.width = (this.SIZE / 7 + "px");
    // this.cContentDiv.style.height = (this.SIZE / 7 + "px");
    // this.cContentDiv.style.lineHeight = (this.SIZE / 7 + "px");

    // this.cHeader.style.height = (this.SIZE * (1/7) + "px");
  }

  addContent() {
    this.appendWeekdays();

    let weekList = this.appendDayMonthWeek();
    let weekdayN = 0;
    let isTodayWeekday = false;

    let divBlank = document.createElement("div");
    divBlank.className = "blank";
    // this.cContent;

    while (!isTodayWeekday) {
      if (this.WEEKDAYS_NAMES[weekdayN] == weekList[0].weekday) {
        isTodayWeekday = true;
      } else {
        // console.log(document.querySelector("#calendar-content")?.appendChild(divBlank));
        this.cContent.appendChild(divBlank);
        weekdayN += 1;
      }
    }

    for (let c = 0; c < 42 - weekdayN; c++) {
      if (c >= weekList.length) {
        this.cContent?.appendChild(divBlank);
      } else {
        let dayN = weekList[c].day;
        let checkTodayHtml = this.checkTodayDate(new Date(this.YEAR, this.MONTH-1, dayN)) ? '<div class="today">' : "<div>";
        this.cContent?.append(checkTodayHtml + "" + dayN + "</div>");
      }
    }

    let color = this.COLOR_MONTHS[this.MONTH-1];
    // let title = this.cHeader.getElementsByTagName("h1").item(0)?.textContent;

    // this.cHeader.style.backgroundColor = color;
    // title = this.MONTHS_NAMES[this.MONTH-1] + " " + this.YEAR;

    // this.applyContentStyle();
  }
}
