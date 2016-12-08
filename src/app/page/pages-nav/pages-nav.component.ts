import { Component, OnInit } from '@angular/core';

import { Page } from '../page';
import { PageService } from '../page.service';

@Component({
  selector: 'app-pages-nav',
  templateUrl: './pages-nav.component.html',
  styleUrls: ['./pages-nav.component.less'],
  providers: [ PageService ]
})
export class PagesNavComponent implements OnInit {

  constructor( private pageService : PageService) { }

  private pages : Page[];

  getPages(){
    this.pageService.getPages().subscribe(res => { this.pages = res; })
  }

  ngOnInit() {
    this.getPages();
  }

}
