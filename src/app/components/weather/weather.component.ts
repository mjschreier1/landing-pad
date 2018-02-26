import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherData: Object;
  current: Object;
  wb: string;
  windDirection: string;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this._weatherService.weatherData.subscribe(data => {
      this.weatherData = data;
      this.current = data.currently;
      this.wb = data.currently.windBearing;
      this.calculateWindDirection(this.wb);
      console.log(data)
    });
  }

  calculateWindDirection(wb): void {
    if (wb >= 348.75 || wb < 11.25) {this.windDirection = "N"}
    else if(wb >= 11.25 && wb < 33.75) {this.windDirection = "NNE"}
    else if(wb >= 33.75 && wb < 56.25) {this.windDirection = "NE"}
    else if(wb >= 56.25 && wb < 78.75) {this.windDirection = "ENE"}
    else if(wb >= 78.75 && wb < 101.25) {this.windDirection = "E"}
    else if(wb >= 101.25 && wb < 123.75) {this.windDirection = "ESE"}
    else if(wb >= 123.75 && wb < 146.25) {this.windDirection = "SE"}
    else if(wb >= 146.25 && wb < 168.75) {this.windDirection = "SSE"}
    else if(wb >= 168.75 && wb < 191.25) {this.windDirection = "S"}
    else if(wb >= 191.25 && wb < 213.75) {this.windDirection = "SSW"}
    else if(wb >= 213.75 && wb < 236.25) {this.windDirection = "SW"}
    else if(wb >= 236.25 && wb < 258.75) {this.windDirection = "WSW"}
    else if(wb >= 258.75 && wb < 281.25) {this.windDirection = "W"}
    else if(wb >= 281.25 && wb < 303.75) {this.windDirection = "WNW"}
    else if(wb >= 303.75 && wb < 326.25) {this.windDirection = "NW"}
    else if(wb >= 326.25 && wb < 348.75) {this.windDirection = "NNW"}
    else {this.windDirection = "Oops! Could not calculate wind direction"}
  }

}
