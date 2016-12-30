import { Component, OnInit, OnDestroy, trigger, style, transition, animate } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { PageService } from '../page.service';
import { Page } from '../page';
import { ParentSlugService } from "../../shared/parent-slug.service";

declare var $:any;

@Component({
  selector: 'app-page-details',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(500, style({opacity:1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(50, style({opacity:0}))
      ])
    ])
  ],
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.less'],
  providers: [ PageService ]
})

export class PageDetailsComponent implements OnInit,OnDestroy {

  page : Page;
  childPages : Page[];
  parentSlug : String;

  constructor(
    private pageService : PageService,
    private route : ActivatedRoute,
    private location : Location,
    public parentPageSlugService : ParentSlugService,
  ) { }

  getPageDetails(){
    this.route.params.switchMap((params: Params) => this.pageService.getPageDetails(params['slug']))
            .subscribe( res => {
              this.page = res[0];

              (res[0]['_embedded']['up'])
                ? this.parentPageSlugService.change(res[0]['_embedded']['up'][0]['slug'])
                : false;

              // Set post url feat image.
              (this.page['featured_media'] !== 0)
                ? this.pageService.getPageFeatMedia(this.page['featured_media']).subscribe(
                  res => { this.page['feat_url'] = 'url(' + res['guid']['rendered'] + ')' }
                )
                : false;

              // Set child pages for side menu navigation
              this.pageService.getChildPages(res[0].id).subscribe(
                res => {
                  this.childPages = res;
                }
              );

            });
  }

    ngOnInit() {
      this.getPageDetails();
    }

    ngOnDestroy(){
      $('.child-active').removeClass('child-active');
    }
}
