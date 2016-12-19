import { Component, OnInit, Input } from '@angular/core';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.less']
})
export class GoogleMapComponent implements OnInit {

  private api_key = environment.google_api_key;
  private src : string;

  @Input() address: string;

  constructor() { }

  ngOnInit() {
    this.src = 'https://www.google.com/maps/embed/v1/place?key=' + this.api_key + '&q=' + this.address.replace(/ /g,'+');
  }

}
