import { Component, OnInit,trigger, style, transition, animate } from '@angular/core';

import { EventService } from '../event.service';
import { Event } from '../event';

@Component({
  selector: 'app-event-list',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(500, style({opacity:1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(50, style({opacity:0}))
      ])
    ])
  ],
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.less'],
  providers: [EventService],
})
export class EventListComponent implements OnInit {
  events: Event[] = [];

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
