import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.less'],
  providers: [ PostService ],
})
export class PostDetailsComponent implements OnInit {

  constructor( private postService : PostService,
               private route : ActivatedRoute,
               private location : Location ) { }

  private post : Post

  getPostDetails(){
    this.route.params.switchMap((params: Params) => this.postService.getPostDetails(+params['id']))
            .subscribe( res => { this.post = res })
  }

  ngOnInit() {
    this.getPostDetails();
  }

}
