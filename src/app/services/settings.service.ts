import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { WeatherService } from './weather.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SettingsService {
  militaryTimeSetting: boolean = localStorage.militaryTimeDefault
    ? JSON.parse(localStorage.militaryTimeDefault)
    : false;
  militaryTime = new BehaviorSubject<boolean>(this.militaryTimeSetting);

  constructor(
    private _http: HttpClient,
    public weatherService: WeatherService
  ) {}

  toggleMilitaryTime(): void {
    event.preventDefault();
    this.militaryTime.getValue() === false
      ? this.militaryTime.next(true)
      : this.militaryTime.next(false);
    localStorage.setItem(
      "militaryTimeDefault",
      this.militaryTime.getValue().toString()
    );
    this.militaryTimeSetting = this.militaryTime.getValue();
  }

  toggleLocationEntrySetting(): void {
    event.preventDefault();
    if(this.weatherService.locationEntrySetting === false) {
      if(this.weatherService.city && this.weatherService.state) { this.weatherService.onAPICall() };
      this.weatherService.locationEntrySetting = true
    } else {
      this.weatherService.onAPICall();
      this.weatherService.locationEntrySetting = false;
      this.weatherService.initializeGeolocation();
    }
    localStorage.setItem("locationEntry", this.weatherService.locationEntrySetting.toString());
  }

  storeManualLocation(): void {
    localStorage.setItem("city", this.weatherService.city);
    localStorage.setItem("state", this.weatherService.state);
  }
}
