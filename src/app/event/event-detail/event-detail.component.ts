import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.less'],
  providers: [ EventService ]
})

export class EventDetailComponent implements OnInit {

  private event : Event

  constructor(
    private eventService : EventService,
    private route : ActivatedRoute,
    private location : Location
  ) { }

  getEventDetails(){
    this.route.params.switchMap((params: Params) => this.eventService.getEventDetails(params['slug']))
            .subscribe( res => { this.event = res[0] })
  }

  ngOnInit() {
    this.getEventDetails()
  }

}
