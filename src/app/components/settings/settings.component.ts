import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  resetNameActivated: boolean = false;

  constructor(public settingsService: SettingsService, public weatherService: WeatherService) { }

  ngOnInit() {
  }

  toggleMilitaryTime(): void {
    this.settingsService.toggleMilitaryTime();
  }

  toggleLocationEntry(): void {
    this.settingsService.toggleLocationEntrySetting();
    if (this.weatherService.locationEntrySetting === true) {
      this.weatherService.submitLocation();
    };
  }

  submitLocation(): void {
    this.weatherService.displayWeather.next(false);
    this.settingsService.storeManualLocation();
    this.weatherService.submitLocation();
  }

  resetName(): void {
    localStorage.removeItem("name")
    this.resetNameActivated = true;
  }
}
