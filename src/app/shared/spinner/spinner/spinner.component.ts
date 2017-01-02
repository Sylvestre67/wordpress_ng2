import { Component, OnInit,trigger, style, transition, animate, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
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
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.less']
})
export class SpinnerComponent implements OnInit {

  @Input() value : Boolean;
  constructor() { }

  ngOnInit() {
  }
}
