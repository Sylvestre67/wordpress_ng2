import { Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Mchimp } from '../mchimp';
import { MchimpService } from "../mchimp.service";

@Component({
  selector: 'app-mchimp-form',
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
  templateUrl: './mchimp-form.component.html',
  styleUrls: ['./mchimp-form.component.less'],
  providers : [ MchimpService ],
})
export class MchimpFormComponent implements OnInit {
  subscription: FormGroup;
  submitted : boolean = false;
  error : boolean = false;
  errorMessage : string = '';

  constructor(private fb: FormBuilder, private mchimpService : MchimpService) { }
  onSubmit({ value, valid }: { value: Mchimp, valid: boolean }) {
    (valid)
      ? this.mchimpService.addSubcriberToList(value).subscribe( res => {
        (res['data']['response'].code == 200)
          ? this.submitted = true
          : (console.log(res),this.error = true,this.errorMessage = JSON.parse(res['data']['body'])['detail']);
      })
      : false;
  }

  ngOnInit() {
    this.subscription = this.fb.group({
      email_address: ['', [Validators.required, Validators.minLength(2)]],
      status : ["subscribed"],
    })
  }
}
