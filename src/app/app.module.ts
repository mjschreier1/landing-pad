import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";

import { MatButtonModule, MatCheckboxModule } from "@angular/material";

import { DateService } from './services/date.service'


import { AppComponent } from './app.component';
import { TimeComponent } from './components/time/time.component';
import { WeatherComponent } from './components/weather/weather.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { NameComponent } from './components/name/name.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    WeatherComponent,
    CalendarComponent,
    NameComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule
  ],
  providers: [DateService],
  bootstrap: [AppComponent]
})
export class AppModule {}
