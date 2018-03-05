import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TimeComponent } from './components/time/time.component';
import { NameComponent } from './components/name/name.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(NameComponent) nameComponent;
  timeAndTempTop: string = "0px";

}
