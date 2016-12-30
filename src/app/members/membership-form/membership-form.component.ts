import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Member } from '../member';
import { MemberService } from "../member.service";

@Component({
  selector: 'app-membership-form',
  templateUrl: './membership-form.component.html',
  styleUrls: ['./membership-form.component.less'],
  providers: [ MemberService ]
})
export class MembershipFormComponent implements OnInit {
  member: FormGroup;
  submitted : boolean = false;

  onSubmit({ value, valid }: { value: Member, valid: boolean }) {

    (valid)
      ? this.memberService.submitMembershipForm(value).subscribe(res => {
        this.submitted = true;
      })
      : false;
  }

  constructor(private fb: FormBuilder, private memberService : MemberService) { }

  ngOnInit() {
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
