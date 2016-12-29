import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ParentSlugService{
  // Observable string source
  private pageSlug = new Subject<string>();

  // Observable string stream
  dataString$ = this.pageSlug.asObservable();

  // Service message commands
  change(slug:string) {
    this.pageSlug.next(slug)
  }
  constructor() { }
}
