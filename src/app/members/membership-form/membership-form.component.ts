import { Component, OnInit, trigger, style, transition, animate  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Member } from '../member';
import { MemberService } from "../member.service";

@Component({
  selector: 'app-membership-form',
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
  templateUrl: './membership-form.component.html',
  styleUrls: ['./membership-form.component.less'],
  providers: [ MemberService ]
})
export class MembershipFormComponent implements OnInit {
  member: FormGroup;
  submitted : boolean = false;
  ready : boolean = false;

  onSubmit({ value, valid }: { value: Member, valid: boolean }) {

    (valid)
      ? this.memberService.submitMembershipForm(value).subscribe(
        res => {
          this.submitted = true;
        })
      : false;
  }

  constructor(private fb: FormBuilder, private memberService : MemberService) { }

  ngOnInit() {
    this.ready=true;
    this.member = this.fb.group({
      identity: this.fb.group({
        first_name: ['', [Validators.required, Validators.minLength(2)]],
        last_name: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.minLength(2)]],
        mobile_phone: [''],
        dob: ['', [Validators.required]],
        pob: ['', [Validators.required]],
        if_not_alsace_reason: [''],
      }),
      address: this.fb.group({
        address: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
        zip: ['', Validators.required]
      }),
      other: this.fb.group({
         occupation: [''],
         company: [''],
         venue: [''],
         date_membership_application: [''],
         signature: ['', [Validators.required]],
         first_sponsor : [''],
         second_sponsor : [''],
      })
    });
  }
}
