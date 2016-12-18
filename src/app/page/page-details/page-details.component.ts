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

  page : Page;

  getPageDetails(){
    this.route.params.switchMap((params: Params) => this.pageService.getPageDetails(params['slug']))
            .subscribe( res => {
              this.page = res[0];

              this.pageService.getPageFeatMedia(res[0].featured_media).subscribe(
                res => {
                  this.page['feat_media'] = res;
                  this.page['feat_url'] = 'url(\'' + this.page['feat_media'].media_details.sizes.full.source_url + '\')';
                  console.info(this.page);
                }
              )
            })
  }

  constructor(
    private pageService : PageService,
    private route : ActivatedRoute,
    private location : Location,
    ) { }

    ngOnInit() {
      this.getPageDetails();
    }

}
