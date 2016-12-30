import { Component, OnInit,trigger, style, transition, animate } from '@angular/core';

import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
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
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.less'],
  providers: [ PostService ],
})

export class PostListComponent implements OnInit {

  constructor( private postService : PostService) { }

  posts : Post[];
  current_page: number;

  getPosts(page:number){
    return this.postService
               .getPosts(page)
               .subscribe( res => {
                 this.posts = res;
               })
  }

  getNextPageOfPost(){
    this.current_page += 1;
    return this.getPosts(this.current_page);
  }

  getPreviousPageOfPost(){
    this.current_page += -1;
    return this.getPosts(this.current_page);
  }

  ngOnInit() {
    this.current_page = 1;
    this.getPosts(this.current_page);
  }

}
