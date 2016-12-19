import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../environments/environment';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Post } from './post';

@Injectable()
export class PostService {
  getPosts(page:number): Observable<Post[]>{
    return this.http.get(this.wp_api + 'posts/'
      + '?filter[posts_per_page]=5' + '&filter[paged]=' + page)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
  }

  getPostDetails(slug:string): Observable<Post>{
    return this.http.get(this.wp_api
      + 'posts?filter[name]=' + slug)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
  }

  constructor(private http : Http) { }
  private wp_api = environment.api_host;

}
