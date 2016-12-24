import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { Post } from '../post';
import { PostService } from '../post.service';

import { User } from '../../shared/user/user';
import { UserService } from '../../shared/user/user.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.less'],
  providers: [ PostService, UserService ],
})
export class PostDetailsComponent implements OnInit {

  constructor( private postService : PostService,
               private userService : UserService,
               private route : ActivatedRoute,
               private location : Location ) { }

  private post : Post;
  private user : User;

  getPostDetails(){
    this.route.params.switchMap((params: Params) => this.postService.getPostDetails(params['slug']))
            .subscribe(
              res => {
                this.post = res[0];
                this.userService.getAuthorDetails(res[0].author).subscribe(
                  res => { this.user = res }
                )
              }
            )
  }

  ngOnInit() {
    this.getPostDetails();
  }

}
