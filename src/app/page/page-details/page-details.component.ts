import { Component, OnInit, OnDestroy, trigger, style, transition, animate } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { PageService } from '../page.service';
import { Page } from '../page';
import { ParentSlugService } from "../../shared/parent-slug.service";

import {Subscription } from 'rxjs';

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
  pageId : Subscription;
  page : Page;
  childPages : Page[];
  parentSlug : String;
  pageSlug: String;
  loadingBody: boolean = true;

  constructor(
    private pageService : PageService,
    private route : ActivatedRoute,
    private location : Location,
    public parentPageSlugService : ParentSlugService,
  ) { }

  getPageDetails(){
    this.loadingBody = true;

    this.route.params.switchMap((params: Params) => this.pageService.getPageDetails(params['slug']))
      .subscribe( res => {

        // Set child pages for side menu navigation
        this.pageService.getChildPages(res[0].id).subscribe(
          res => {
            this.childPages = res;
            (this.pageSlug)
              ? this.updateBodyContent(
                this.childPages.filter((o) => { return o['slug'] == this.pageSlug })[0]
              )
              : this.updateBodyContent(res[0]);
          }
        );
      }
    );
  }

  updateBodyContent(page : Page){
    this.page = page;

    (page['_embedded']['up'])
      ? this.parentPageSlugService.change(page['_embedded']['up'][0]['slug'])
      : false;

    // Set post url feat image.
    (this.page['featured_media'] !== 0)
      ? this.pageService.getPageFeatMedia(this.page['featured_media']).subscribe(
        res => { this.page['feat_url'] = 'url(' + res['guid']['rendered'] + ')' }
      )
      : false;
  }

  ngOnInit() {
    // subscribe to router event
    this.pageId = this.route.queryParams.subscribe(
      (param: any) => {
        this.pageSlug = param['page'];
      });
    this.getPageDetails();
  }

  ngOnDestroy(){
    $('.child-active').removeClass('child-active');
    this.pageId.unsubscribe();
  }
}
