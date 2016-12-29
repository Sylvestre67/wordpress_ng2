import { Component } from '@angular/core';
import { ParentSlugService } from "./shared/parent-slug.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  providers: [ ParentSlugService ]
})
export class AppComponent {
  title = 'Alsace.nyc';
  constructor() {}
}
