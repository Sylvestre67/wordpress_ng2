import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'shared' })
export class SharedPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}

@Pipe({ name: 'safeUrl' })
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
