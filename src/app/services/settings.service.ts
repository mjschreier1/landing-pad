import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class SettingsService {
  militaryTimeSetting: boolean = localStorage.militaryTimeDefault
    ? JSON.parse(localStorage.militaryTimeDefault)
    : false;
  militaryTime = new BehaviorSubject<boolean>(this.militaryTimeSetting)

  constructor() { }

  toggleMilitaryTime() {
    event.preventDefault();
    this.militaryTime.getValue() === false
      ? this.militaryTime.next(true)
      : this.militaryTime.next(false);
    localStorage.setItem("militaryTimeDefault", this.militaryTime.getValue().toString());
    this.militaryTimeSetting = this.militaryTime.getValue();
  }

}
