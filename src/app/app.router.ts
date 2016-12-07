import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';

import { PostListComponent } from './post/post-list/post-list.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';

import { PageListComponent } from './page/page-list/page-list.component';
import { PageDetailsComponent } from './page/page-details/page-details.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventListComponent,
    pathMatch: 'full'
  },
  {
    path: 'events/:slug',
    component: EventDetailComponent,
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostListComponent,
    pathMatch: 'full'
  },
  {
    path: 'posts/:slug',
    component: PostDetailsComponent,
    pathMatch: 'full'
  },
  {
    path: 'pages',
    component: PageListComponent,
    pathMatch: 'full'
  },
  {
    path: 'pages/:slug',
    component: PageDetailsComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class appRouter { }
