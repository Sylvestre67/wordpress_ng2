import { Injectable, Pipe, PipeTransform } from '@angular/core';

declare var moment: any;

//import * as moment from 'moment';

@Pipe({
  name: 'eventToCome'
})

@Injectable()
export class EventPipe implements PipeTransform {
  transform(events: any[], args?: any): any {
    return events.filter( event => moment(event.starting_date) >= moment() );
  }
}
