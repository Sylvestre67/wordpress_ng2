import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class MchimpService {

  constructor( private http: Http, private jsonp : Jsonp) { }

  addSubcriberToList(subscriber:Object): Observable<Response>{
    let headers      = new Headers({'Content-Type': 'application/json',});
    let options      = new RequestOptions({ headers: headers });
    let body         = subscriber;

    return this.http.post('/mchimp-form.php', body, options)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
