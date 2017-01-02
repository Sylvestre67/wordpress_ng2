import { Component, OnInit,trigger, style, transition, animate } from '@angular/core';


@Component({
  selector: 'app-post-page',
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
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.less'],
})
export class PostPageComponent implements OnInit {
  private ready : Boolean;
  private loadedComponent = [];
  constructor() { }

  updateLoadingThread(component) {
    (component)
      ? this.loadedComponent.push(component)
      : false;
  }

  ngOnInit() {
    this.ready = true;
  }

}
