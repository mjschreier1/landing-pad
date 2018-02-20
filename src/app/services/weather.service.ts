import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AsyncSubject } from 'rxjs/AsyncSubject';

@Injectable()
export class WeatherService {
  proxy: string = "https://cors-anywhere.herokuapp.com";
  apiUrl: string = "https://api.darksky.net/forecast";
  apiKey: string = "";
  latitude: string;
  longitude: string;
  weatherData: AsyncSubject<any> = new AsyncSubject<any>();

  constructor(public http: HttpClient) {
    navigator.geolocation.getCurrentPosition(position => {
      this.latitude = position.coords.latitude.toString();
      this.longitude = position.coords.longitude.toString();
      this.getWeatherData();
    });
  }

  getWeatherData(): void {
    this.http.get(`${this.proxy}/${this.apiUrl}/${this.apiKey}/${this.latitude},${this.longitude}`)
      .subscribe(data => {
        this.weatherData.next(data);
        this.weatherData.complete();
    });
  }

}
