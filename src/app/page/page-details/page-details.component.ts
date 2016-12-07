import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { PageService } from '../page.service';
import { Page } from '../page';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.less'],
  providers: [ PageService ]
})

export class PageDetailsComponent implements OnInit {
  page : Page

  getPageDetails(){
    this.route.params.switchMap((params: Params) => this.pageService.getPageDetails(params['slug']))
            .subscribe( res => { this.page = res[0] })
  }

  constructor(
    private pageService : PageService,
    private route : ActivatedRoute,
    private location : Location
    ) { }

    ngOnInit() {
      this.getPageDetails();
    }

}
