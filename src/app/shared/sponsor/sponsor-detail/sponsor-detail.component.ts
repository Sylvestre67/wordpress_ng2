import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-sponsor-detail',
  templateUrl: './sponsor-detail.component.html',
  styleUrls: ['./sponsor-detail.component.less']
})
export class SponsorDetailComponent implements OnInit {
  @Input() sponsor;
  constructor() { }

  ngOnInit() {
  }

}
