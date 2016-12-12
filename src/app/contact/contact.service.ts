import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Contact } from './contact'

@Injectable()
export class ContactService {

  private contactFormURL : '/contact-form.php';

  submitContactForm(form:Object): Observable<Response>{
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options      = new RequestOptions({ headers: headers }); // Create a request option
    let body           = form

    return this.http.post(this.wp_host + '/contact-form.php', body, options)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  constructor(private http : Http) { }
  private wp_host = environment.wp_host;  
}
