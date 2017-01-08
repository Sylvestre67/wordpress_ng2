import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-page-body',
  templateUrl: './page-body.component.html',
  styleUrls: ['./page-body.component.less']
})
export class PageBodyComponent implements OnInit,OnDestroy {

  constructor() { }

  @Input()
  public loading: boolean = true;

  ngOnInit() {
  }

  ngOnDestroy() {
    this.loading = true;
  }

}
