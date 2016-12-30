import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mchimp-form',
  templateUrl: './mchimp-form.component.html',
  styleUrls: ['./mchimp-form.component.less']
})
export class MchimpFormComponent implements OnInit {

  constructor( ) { }

  public loadScript() {
    console.log('preparing to load...')
    let node = document.createElement('script');
    node.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
    node.type = 'text/javascript';
    node.async = true;
    node.charset = 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  ngOnInit() {
    this.loadScript();
  }
}
