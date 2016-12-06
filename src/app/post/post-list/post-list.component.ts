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

  getPosts(){
    return this.postService
               .getPosts()
               .subscribe( res => { this.posts = res; })
  }

  ngOnInit() {
    this.getPosts()
  }

}
