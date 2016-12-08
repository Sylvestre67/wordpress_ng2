import { Component, OnInit } from '@angular/core';

import { Page } from '../../../page/page';
import { PageService } from '../../../page/page.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.less'],
  providers: [ PageService ],
})
export class TopNavComponent implements OnInit {
  private parentPages : Page[];

  constructor( private pageService : PageService) { }

  getParentPages(){
    this.pageService.getParentPages().subscribe(pages => {
      this.parentPages = pages;
    })
  }

  ngOnInit() {
    this.getParentPages();
  }

}
