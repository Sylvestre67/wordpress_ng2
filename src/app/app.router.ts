import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, NavigationStart } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { EventPageComponent } from './event/event-page/event-page.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';

import { PostListComponent } from './post/post-list/post-list.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { PostPageComponent } from './post/post-page/post-page.component';

import { PageListComponent } from './page/page-list/page-list.component';
import { PageDetailsComponent } from './page/page-details/page-details.component';
import { PageAboutComponent } from './page/page-about/page-about.component';


import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { ParentSlugService } from "./shared/parent-slug.service";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'event/:slug',
    component: EventDetailComponent,
    pathMatch: 'full'
  },
  {
    path: 'blog-post',
    component: PostPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'blog-post/:slug',
    component: PostDetailsComponent,
    pathMatch: 'full'
  },
  {
    path: 'p',
    component: PageListComponent,
    pathMatch: 'full'
  },
  {
    path: 'p/:slug',
    component: PageDetailsComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact-us',
    component: ContactFormComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ ParentSlugService ]
})

export class appRouter {

  constructor(private router: Router, private slugService: ParentSlugService) {
    router.events.subscribe((val) => {});
  }

}
