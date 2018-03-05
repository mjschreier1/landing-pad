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

  constructor(private _settingsService: SettingsService, private _weatherService: WeatherService) { }

  ngOnInit() {
  }

  toggleMilitaryTime(): void {
    this._settingsService.toggleMilitaryTime();
  }

  toggleLocationEntry(): void {
    this._settingsService.toggleLocationEntrySetting();
    if (this._weatherService.locationEntrySetting === true) {
      this._weatherService.submitLocation();
    };
  }

  submitLocation(): void {
    this._weatherService.displayWeather.next(false);
    this._settingsService.storeManualLocation();
    this._weatherService.submitLocation();
  }

  resetName(): void {
    localStorage.removeItem("name")
    this.resetNameActivated = true;
  }
}
