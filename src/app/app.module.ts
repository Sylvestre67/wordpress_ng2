import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { appRouter } from './app.router';

import { AppComponent } from './app.component';
//import { EventListComponent } from './event/event-list/event-list.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { HomeComponent } from './home/home.component';

import { EventModule } from './event/event.module';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { PageListComponent } from './page/page-list/page-list.component';
import { PageDetailsComponent } from './page/page-details/page-details.component';
import { PagesNavComponent } from './page/pages-nav/pages-nav.component';
import { TopNavComponent } from './layout/nav/top-nav/top-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostListComponent,
    PostDetailsComponent,
    PageListComponent,
    PageDetailsComponent,
    PagesNavComponent,
    TopNavComponent,
  ],
  imports: [
    AlertModule,
    BrowserModule,
    EventModule,
    FormsModule,
    HttpModule,
    appRouter,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
