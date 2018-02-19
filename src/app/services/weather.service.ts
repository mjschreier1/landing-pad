import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {
  apiUrl: string = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast";
  apiKey: string = "";
  latitude: string = "39";
  longitude: string = "-105";

  constructor(public http: HttpClient) {
    navigator.geolocation.getCurrentPosition(position => {
      this.latitude = position.coords.latitude.toString();
      this.longitude = position.coords.longitude.toString();
    });
  }

  getWeatherData(): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/${this.apiKey}/${this.latitude},${this.longitude}`
    );
  }
}
