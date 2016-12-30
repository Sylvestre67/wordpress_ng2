import { Component, OnInit,trigger, style, transition, animate } from '@angular/core';

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
                // Set post url feat image.
                (res[0]._links['wp:featuredmedia'])
                  ? this.post['feat_url'] = res[0]._links['wp:featuredmedia'][0].href
                  : '';
                // Get Author details.
                this.userService.getAuthorDetails(res[0].author).subscribe(
                  res => { this.user = res }
                );
              }
            )
  }

  ngOnInit() {
    this.getPostDetails();
  }

}
