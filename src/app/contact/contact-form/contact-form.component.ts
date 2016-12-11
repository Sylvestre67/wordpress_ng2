import { Component, OnInit } from '@angular/core';

import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  //moduleId: module.id,
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.less'],
  providers: [ ContactService ],
})
export class ContactFormComponent implements OnInit {

  model = new Contact('sgug@outlook.com', 'TESTING SUBJECT', 'TESTING MESSAGE');

  newContact() {
    this.model = new Contact('', '', '');
  }
  submitted = false;

  onSubmit() {
    this.contactService.submitContactForm(this.model)
      .subscribe(res => { this.newContact();
                          this.submitted = true;}
                );
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  constructor( private contactService : ContactService) { }

  ngOnInit() {
    //this.setNewModel();
  }

}
