import { Injectable, Pipe, PipeTransform } from '@angular/core';
declare var moment: any;

@Pipe({
  name: 'eventToCome'
})

@Injectable()
export class EventPipe implements PipeTransform {
  transform(events: any[], args?: any): any {
    return events.filter( event => moment(event.starting_date) >= moment() );
  }
}

@Pipe({
  name: 'moment'
})

@Injectable()
export class MomentPipe implements PipeTransform {
  transform(date: any, args?: any): any {
    return moment(date);
  }
}
