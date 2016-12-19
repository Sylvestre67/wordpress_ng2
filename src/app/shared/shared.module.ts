import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GoogleMapComponent } from './google-map/google-map/google-map.component';
import { SharedPipe } from './shared.pipe';
import { SafePipe } from './shared.pipe';

@NgModule({
  declarations: [ GoogleMapComponent, SharedPipe, SafePipe ],
  exports: [ GoogleMapComponent ],
  bootstrap: [ ],
  imports: [ ],
})

export class SharedModule { }
