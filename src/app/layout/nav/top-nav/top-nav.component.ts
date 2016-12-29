import { Component, OnInit } from '@angular/core';

import { Page } from '../../../page/page';
import { PageService } from '../../../page/page.service';
import { ParentSlugService } from "../../../shared/parent-slug.service";

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.less'],
  providers: [ PageService ],
})
export class TopNavComponent implements OnInit {
  private parentPages : Page[];
  private parentSlug : string;

  constructor( private pageService : PageService,
               public parentSlugService : ParentSlugService) {}

  getParentPages(){
    this.pageService.getParentPages().subscribe(pages => {
      this.parentPages = pages;
    })
  }

  ngOnInit() {
    this.getParentPages();
    this.parentSlugService.dataString$.subscribe(
      slug => {
        this.parentSlug = slug;
      });
  }

}
