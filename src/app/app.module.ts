import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { appRouter } from './app.router';

import { AppComponent } from './app.component';
//import { EventListComponent } from './event/event-list/event-list.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { HomeComponent } from './home/home.component';

import { EventModule } from './event/event.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EventModule,
    appRouter,
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule { }
