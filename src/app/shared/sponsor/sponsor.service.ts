import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';

import { Sponsor } from './sponsor';

@Injectable()
export class SponsorService {

  getSponsors(): Observable<Sponsor[]> {
    return this.http.get(this.wp_host + '/wp-json/wp/v2/sponsors/?_embed')
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
  }

  getSponsorDetails(id:number): Observable<Sponsor> {
    return this.http.get(this.wp_host + '/wp-json/wp/v2/sponsors/' + id + '?_embed')
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
  }

  constructor(
    private http : Http,
  ) { }
  private wp_host = environment.wp_host;

}
