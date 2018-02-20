import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatListModule
} from "@angular/material";

import { DateService } from './services/date.service';
import { SettingsService } from './services/settings.service';
import { WeatherService } from './services/weather.service';


import { AppComponent } from './app.component';
import { TimeComponent } from './components/time/time.component';
import { WeatherComponent } from './components/weather/weather.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { NameComponent } from './components/name/name.component';
import { AboutComponent } from './components/about/about.component';
import { SettingsComponent } from './components/settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    WeatherComponent,
    CalendarComponent,
    NameComponent,
    AboutComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [DateService, SettingsService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
