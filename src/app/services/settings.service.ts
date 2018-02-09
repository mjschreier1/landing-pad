import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class SettingsService {
  militaryTimeCounter: number = 0;
  militaryTime = new BehaviorSubject<boolean>(true)

  constructor() { }

  toggleMilitaryTime() {
    this.militaryTimeCounter % 2 === 0
      ? this.militaryTime.next(false)
      : this.militaryTime.next(true)
    this.militaryTimeCounter++
  }

}
