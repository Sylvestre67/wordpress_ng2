import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';

import { User } from './user';

@Injectable()
export class UserService {

  getAuthorDetails(id:number): Observable<User> {
    return this.http.get(this.wp_host + '/wp-json/wp/v2/users/' + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
  }

  constructor( private http : Http ) { }
  private wp_host = environment.wp_host;

}
