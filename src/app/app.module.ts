import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DatePickerModule } from 'ng2-datepicker';

import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';

import { appRouter } from './app.router';

import { AppComponent } from './app.component';

import { PostListComponent } from './post/post-list/post-list.component';
import { HomeComponent } from './home/home.component';

import { EventModule } from './event/event.module';

import { SharedModule } from './shared/shared.module';

import { PostDetailsComponent } from './post/post-details/post-details.component';
import { PageListComponent } from './page/page-list/page-list.component';

import { PageDetailsComponent } from './page/page-details/page-details.component';
import { PagesNavComponent } from './page/pages-nav/pages-nav.component';

import { TopNavComponent } from './layout/nav/top-nav/top-nav.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';

import { APP_BASE_HREF } from '@angular/common';
import { XsNavComponent } from './layout/nav/xs-nav/xs-nav.component';
import { MchimpFormComponent } from './mchimp/mchimp-form/mchimp-form.component';
import { PostPageComponent } from './post/post-page/post-page.component';
import { PageAboutComponent } from './page/page-about/page-about.component';
import { MembershipFormComponent } from './members/membership-form/membership-form.component';

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
    ContactFormComponent,
    XsNavComponent,
    MchimpFormComponent,
    PostPageComponent,
    PageAboutComponent,
    MembershipFormComponent,
  ],
  imports: [
    AlertModule,
    BrowserModule,

    EventModule,
    SharedModule,

    FormsModule,
    ReactiveFormsModule,

    HttpModule,
    DatePickerModule,

    appRouter,
  ],
  exports:[ ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent],
})

export class AppModule { }
