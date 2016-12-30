import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

@Injectable()
export class MemberService {

  submitMembershipForm(form:Object): Observable<Response>{
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options      = new RequestOptions({ headers: headers }); // Create a request option
    let body         = form;

    return this.http.post(this.wp_host + '/membership-form.php', body, options)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  constructor(private http : Http) { }
  private wp_host = environment.wp_host;

}
