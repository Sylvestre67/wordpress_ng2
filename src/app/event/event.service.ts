import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Event } from './event';

@Injectable()
export class EventService {

  getEvents(): Observable<Event[]> {
    return this.http.get(this.wp_api + 'events')
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
  } // get list of events

  getEventDetails(slug:string): Observable<Event> {
    return this.http.get(this.wp_api + 'events?filter[name]=' + slug)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
  } //get one event data

  constructor(private http : Http) { }
  private wp_api = 'http://localhost:15000/wp-json/wp/v2/'

}
