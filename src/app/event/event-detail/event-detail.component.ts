import { Component, OnInit,trigger, style, transition, animate } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-detail',
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
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.less'],
  providers: [ EventService ]
})

export class EventDetailComponent implements OnInit {

  private event : Event;

  constructor(
    private eventService : EventService,
    private route : ActivatedRoute,
    private location : Location
  ) { }

  getEventDetails(){
    this.route.params.switchMap((params: Params) => this.eventService.getEventDetails(params['slug']))
            .subscribe( res => {
              this.event = res[0];
              (res[0].featured_media > 0)
                ? (this.eventService.getEventFeatMedia(res[0].featured_media).subscribe(
                  res => {
                    this.event['feat_media'] = res;
                    this.event['feat_url'] = 'url(\'' + this.event['feat_media'].media_details.sizes.full.source_url + '\')';
                  }
                ))
                : (
                  this.event['feat_media'] = false,
                  this.event['feat_url']='url(\'/assets/img/alsace_nyc_default.jpg\')'
                );
            })
  }

  ngOnInit() {
    this.getEventDetails()
  }

}
