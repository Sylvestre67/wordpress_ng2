import { Component, OnInit } from '@angular/core';

import { SponsorService } from '../sponsor.service';
import { Sponsor } from '../sponsor';

@Component({
  selector: 'app-sponsor-list',
  templateUrl: './sponsor-list.component.html',
  styleUrls: ['./sponsor-list.component.less'],
  providers: [ SponsorService ]
})
export class SponsorListComponent implements OnInit {
  sponsors: Sponsor[] = [];

  getSponsors(){
    this.sponsorService.getSponsors()
      .subscribe(
          res => { this.sponsors = res; }
        )
  };

  constructor( private sponsorService : SponsorService ) { }

  ngOnInit() {
    this.getSponsors();
  }

}
