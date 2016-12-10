import { Component, OnInit } from '@angular/core';

import { Contact } from '../contact';

@Component({
  //moduleId: module.id,
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.less']
})
export class ContactFormComponent implements OnInit {

  model = new Contact('', '', '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  newContact() {
    this.model = new Contact('', '', '');
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  constructor() { }

  ngOnInit() {
    //this.setNewModel();
  }

}
