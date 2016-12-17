import { Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';

import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-form',
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
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.less'],
  providers: [ ContactService ],
})
export class ContactFormComponent implements OnInit {

  model = new Contact('', '', '');
  submitted = false;

  newContact() {
    this.model = new Contact('', '', '');
  }

  onSubmit() {

    this.submitted = true

    this.contactService.submitContactForm(this.model)
      .subscribe(res => { this.newContact();
                          this.submitted = true;}
                );
  }

  constructor( private contactService : ContactService) { }

  ngOnInit() {
    this.newContact();
  }

}
