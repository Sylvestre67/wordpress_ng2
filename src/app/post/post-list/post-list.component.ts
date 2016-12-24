import { Component, OnInit } from '@angular/core';

import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
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
