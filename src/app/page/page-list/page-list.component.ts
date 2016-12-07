import { Component, OnInit } from '@angular/core';

import { Page } from '../page' ;
import { PageService } from '../page.service';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.less'],
  providers: [ PageService ]
})
export class PageListComponent implements OnInit {

  constructor( private pageService : PageService) { }

  private pages : Page[];

  getPages(){
    this.pageService.getPages().subscribe(res => { this.pages = res });
  }

  ngOnInit() {
    this.getPages();
  }

}
