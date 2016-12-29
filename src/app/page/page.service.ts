import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { environment } from '../../environments/environment';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Page } from './page';
import { Media } from '../media/media';

@Injectable()
export class PageService {

  getPages(): Observable<Page[]>{
    return this.http.get(this.wp_api + 'pages')
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
  }

  getPageDetails(slug:string): Observable<Page>{
    return this.http.get(this.wp_api + 'pages?filter[name]=' + slug + '&_embed')
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
  }

  getPageFeatMedia(media_id:number): Observable<Media> {
    return this.http.get(this.wp_api + 'media/' + media_id)
                .map((res:Response) => res.json())
                .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
  }

  getParentPages(): Observable<Page[]>{
    return this.http.get(this.wp_api + 'pages?parent=0')
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
  }

  getChildPages(id:number): Observable<Page[]>{
    return this.http.get(this.wp_api + 'pages?_embed&filter[parent]=' + id + '&filter[orderby]=menu_order&order=asc')
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'))
  }

  constructor(private http : Http){ }
  private wp_api = environment.api_host;

}
