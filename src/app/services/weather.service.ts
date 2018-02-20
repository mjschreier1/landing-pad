import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class WeatherService {
  proxy: string = "https://cors-anywhere.herokuapp.com";
  apiUrl: string = "https://api.darksky.net/forecast";
  apiKey: string = "";
  latitude: string;
  longitude: string;
  weatherData: Subject<any> = new Subject<any>();

  constructor(public http: HttpClient) {
    navigator.geolocation.getCurrentPosition(position => {
      this.latitude = position.coords.latitude.toString();
      this.longitude = position.coords.longitude.toString();
      this.getWeatherData();
    });
  }

  getWeatherData(): void {
    const getData = () => {
      this.http.get(`${this.proxy}/${this.apiUrl}/${this.apiKey}/${this.latitude},${this.longitude}`)
        .subscribe(data => {
          this.weatherData.next(data);
        });
    };

    setInterval(getData(), 3600000);
  }

  iconSelector(icon): string {
    let iconValidator = {
      "clear-day": "wi-day-sunny",
      "clear-night": "wi-night-clear",
      "rain": "wi-showers",
      "snow": "wi-snow-wind",
      "sleet": "wi-sleet",
      "wind": this.windSelector(),
      "fog": this.fogSelector(),
      "cloudy": "wi-cloudy",
      "partly-cloudy-day": "wi-day-cloudy",
      "partly-cloudy-night": "wi-night-alt-cloudy"
    };

    return iconValidator[icon];
  }

  windSelector(): string {
    return
  }

  fogSelector(): string {
    return
  }
}
