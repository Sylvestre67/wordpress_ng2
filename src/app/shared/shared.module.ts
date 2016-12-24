import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GoogleMapComponent } from './google-map/google-map/google-map.component';
import { SharedPipe } from './shared.pipe';
import { SafePipe } from './shared.pipe';
import { UserService } from './user/user.service';
import { SponsorDetailComponent } from './sponsor/sponsor-detail/sponsor-detail.component';
import { SponsorListComponent } from './sponsor/sponsor-list/sponsor-list.component';

@NgModule({
  declarations: [ GoogleMapComponent, SharedPipe, SafePipe, SponsorDetailComponent, SponsorListComponent ],
  exports: [ GoogleMapComponent, SponsorListComponent ],
  bootstrap: [ ],
  imports: [ BrowserModule ],
  providers: [ UserService ]
})

export class SharedModule { }
