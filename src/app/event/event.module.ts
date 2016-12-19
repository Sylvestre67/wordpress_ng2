import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule }     from '@angular/router';
import { CommonModule }     from '@angular/common';
import { FormsModule }      from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component'
import { EventPageComponent } from './event-page/event-page.component';
import { EventPipe } from './event.pipe';
import { MomentPipe } from './event.pipe';

@NgModule({
    declarations: [ EventListComponent, EventDetailComponent, EventPageComponent, EventPipe, MomentPipe,],
    exports: [ EventListComponent ],
    bootstrap:    [ EventListComponent ],
    imports: [ RouterModule, CommonModule, FormsModule, SharedModule ],
})

export class EventModule { }
