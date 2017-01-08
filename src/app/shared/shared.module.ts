import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GoogleMapComponent } from './google-map/google-map/google-map.component';

import { SharedPipe } from './shared.pipe';
import { SafePipe } from './shared.pipe';

import { UserService } from './user/user.service';
import { ParentSlugService } from './parent-slug.service';

import { SponsorDetailComponent } from './sponsor/sponsor-detail/sponsor-detail.component';
import { SponsorListComponent } from './sponsor/sponsor-list/sponsor-list.component';
import { DonateFormComponent } from './donate/donate-form/donate-form.component';
import { SpinnerComponent } from './spinner/spinner/spinner.component';

import { MchimpFormComponent } from './mchimp/mchimp-form/mchimp-form.component';

@NgModule({
  declarations: [ GoogleMapComponent, SharedPipe, SafePipe,
    SponsorDetailComponent, SponsorListComponent, DonateFormComponent, SpinnerComponent, MchimpFormComponent ],
  exports: [ GoogleMapComponent, SponsorListComponent, SpinnerComponent, MchimpFormComponent ],
  bootstrap: [ ],
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule ],
  providers: [ UserService, ParentSlugService ]
})

export class SharedModule { }
