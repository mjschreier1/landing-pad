import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class SettingsService {
  militaryTime = new BehaviorSubject<boolean>(true)

  constructor() { }

}
