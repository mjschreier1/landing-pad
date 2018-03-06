import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class WeatherService {
  proxy: string = "https://cors-anywhere.herokuapp.com";
  apiUrl: string = "https://api.darksky.net/forecast";
  apiKey: string = "bcfdd8fb4ac9bd97fba5821434ebffe5";
  weatherData: Subject<any> = new Subject<any>();
  displayWeather: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  locationEntrySetting: boolean = localStorage.locationEntry
    ? JSON.parse(localStorage.locationEntry)
    : false;
  city: string = localStorage.city ? localStorage.city : "";
  state: string = localStorage.state ? localStorage.state : "";
  geocodeUrl: string = "https://api.geocod.io/v1.2/geocode";
  geocodeKey: string = "f24a6a4bb528276fb20695b2c9ba8c0504985ef";

  constructor(public http: HttpClient) {
    if (this.locationEntrySetting === false) {
      this.initializeGeolocation();
    } else {
      this.submitLocation();
    }
  }

  initializeGeolocation() {
    navigator.geolocation.getCurrentPosition(position => {
      this.getWeatherData(position.coords.latitude, position.coords.longitude);
    });
  }

  onAPICall(): void {
    this.displayWeather.next(false);
  }

  getWeatherData(lat: number, long: number): void {
    const getData = () => {
      this.http
        .get(`${this.proxy}/${this.apiUrl}/${this.apiKey}/${lat},${long}`)
        .subscribe(data => {
          this.weatherData.next(data);
        });
    };

    setInterval(getData(), 3600000);
  }

  submitLocation(): void {
    this.http
      .get<any>(
        `${this.geocodeUrl}?q=${this.city}+${this.state}&api_key=${
          this.geocodeKey
        }`
      )
      .subscribe(data => {
        this.getWeatherData(
          data.results[0].location.lat,
          data.results[0].location.lng
        );
      });
  }

  iconSelector(icon): string {
    let iconValidator = {
      "clear-day": "wi-day-sunny",
      "clear-night": "wi-night-clear",
      rain: "wi-showers",
      snow: "wi-snow-wind",
      sleet: "wi-sleet",
      wind: "wi-day-windy",
      fog: "wi-day-light-wind",
      cloudy: "wi-cloudy",
      "partly-cloudy-day": "wi-day-cloudy",
      "partly-cloudy-night": "wi-night-alt-cloudy"
    };

    return iconValidator[icon];
  }
}
