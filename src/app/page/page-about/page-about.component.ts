import { Component, OnInit } from '@angular/core';

import { Page } from '../page';
import { PageService } from '../page.service';

@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.less'],
  providers : [ PageService ],
})
export class PageAboutComponent implements OnInit {
  page : Page;

  constructor( private pageService : PageService ) { }

  ngOnInit() {
    this.pageService.getPageDetails('about')
      .subscribe(res => { this.page = res[0]; })

  }

}
