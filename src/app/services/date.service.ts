import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class DateService {
  currentTime: Observable<string> = new Observable(observer => {
    const interval = setInterval(() => {
      observer.next(new Date().toTimeString().slice(0, 8))
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  })

  constructor() { }

}
