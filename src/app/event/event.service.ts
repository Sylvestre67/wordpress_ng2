import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Event } from './event';
import { Media } from '../media/media';

@Injectable()
export class EventService {

  getEvents(): Observable<Event[]> {
    return this.http.get(this.wp_api + 'events')
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
  } // get list of events

  getEventFeatMedia(media_id:number): Observable<Media> {
    return this.http.get(this.wp_api + 'media/' + media_id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
  }

  getEventDetails(slug:string): Observable<Event> {
    return this.http.get(this.wp_api + 'events?filter[name]=' + slug)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
  } //get one event data

  constructor(private http : Http) { }
  private wp_api = environment.api_host;

}
