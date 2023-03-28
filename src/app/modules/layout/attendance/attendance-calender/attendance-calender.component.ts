import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
@Component({
  selector: 'app-attendance-calender',
  templateUrl: './attendance-calender.component.html',
  styleUrls: ['./attendance-calender.component.scss']
})
export class AttendanceCalenderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      // left: 'prev,next today',
      // center: 'title',
      // right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
  }

}
