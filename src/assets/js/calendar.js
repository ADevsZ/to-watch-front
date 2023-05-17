$(function () {

    var size = 480;
    var year = 2013;
    var month = 9;
    var r = [];
    var monthsNames = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE",];
    var weekdayNames = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado",];
    var colorMonths = ["#16a085", "#1abc9c", "#16a085", "#1abc9c", "#16a085", "#1abc9c", "#16a085", "#1abc9c", "#16a085", "#1abc9c", "#16a085", "#1abc9c",];
    var calendar = $("#calendar");
    var header = calendar.find("#calendar-header");
    var weekdays = calendar.find("#calendar-weekdays");
    var content = calendar.find("#calendar-content");

    setYearAndMonthToday();
    addContent();

    header.find('i[class^="bi bi-chevron"]').on("click", function() {
        var iconButton = $(this);

        var changeYearCalendar = function (e) {
            month = e == "next" ? month + 1 : month - 1;

            if (month < 1) {
                month = 12;
                year--;
            } else if (month > 12) {
                month = 1;
                year++;
            }

            addContent();
        };

        if (iconButton.attr("class").indexOf("left") != -1) {
            changeYearCalendar("previous");
        } else {
            changeYearCalendar("next");
        }
    });

    document.getElementById('calendar-style').href = '/assets/styles/calendar-styles.css';
    
    function addContent() {

        appendWeekdays();

        var weekList = appendDayMonthWeek();
        var weekdayN = 0;
        var isTodayWeekday = false;

        content.empty();

        while (!isTodayWeekday) {
            if (weekdayNames[weekdayN] == weekList[0].weekday) {
                isTodayWeekday = true;
            } else {
                content.append('<div class="blank"></div>');
                weekdayN++;
            }
        }

        for (var c = 0; c < 42 - weekdayN; c++) {
            if (c >= weekList.length) {
                content.append('<div class="blank"></div>');
            } else {
                var dayN = weekList[c].day;
                var checkTodayHtml = checkTodayDate(new Date(year, month-1, dayN)) ? '<div class="today">' : "<div>";
                content.append(checkTodayHtml + "" + dayN + "</div>");
            }
        }

        var color = colorMonths[month-1];

        header.css("background-color", color).find("h1").text(monthsNames[month-1] + " " + year);
        weekdays.find("div").css("color", color);
        content.find(".today").css("background-color", color);

        applyContentStyle();
    }

    function appendDayMonthWeek() {
        var list = [];

        for (var r = 1; r < getMonthDay(year, month) + 1; r++) {
            list.push({ day: r, weekday: weekdayNames[getWeekDay(year, month, r)] });
        }

        return list;
    }
    
    function appendWeekdays() {
        weekdays.empty();

        for (var e = 0; e < 7; e++) {
            weekdays.append("<div>" + weekdayNames[e].substring(0, 3) + "</div>");
        }
    }

    function applyContentStyle() {
        var calendarClassesNames = "#calendar-weekdays, #calendar-content";
        var n = $("#calendar").css("width", size + "px");
        
        n.find(calendarClassesNames).css("width", size + "px").find("div").css({ width: size / 7 + "px", height: size / 7 + "px", "line-height": size / 7 + "px", });
        n.find("#calendar-header").css({ height: size * (1 / 7) + "px" }).find('i[class^="fa fa-chevron"]').css("line-height", size * (1 / 7) + "px");
    }

    function getMonthDay(e, t) {
        return new Date(e, t, 0).getDate();
    }

    function getWeekDay(e, t, n) {
        return new Date(e, t - 1, n).getDay();
    }

    function checkTodayDate(e) {
        return getDateFormat(new Date()) == getDateFormat(e);
    }

    function getDateFormat(e) {
        return e.getFullYear() + "/" + (e.getMonth() + 1) + "/" + e.getDate();
    }

    function setYearAndMonthToday() {
        var e = new Date();
        year = e.getFullYear();
        month = e.getMonth() + 1;
    }
});