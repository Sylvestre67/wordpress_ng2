import { Component, OnInit,trigger, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-event-page',
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
  templateUrl: 'event-page.component.html',
  styleUrls: ['event-page.component.less']
})
export class EventPageComponent implements OnInit {
  private ready : Boolean;
  constructor() { }

  ngOnInit() {
    this.ready = true;
  }
}
