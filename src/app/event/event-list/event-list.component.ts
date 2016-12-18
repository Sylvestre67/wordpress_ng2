import { Component, OnInit } from '@angular/core';

import { EventService } from '../event.service';
import { Event } from '../event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.less'],
  providers: [EventService],
})
export class EventListComponent implements OnInit {
  events: Event[];

  constructor(private eventService : EventService) { }

  getEvents(){
    this.eventService
      .getEvents().subscribe(
        res => { this.events = res; }
      )
  }

  ngOnInit() {
    this.getEvents();
  }

}
