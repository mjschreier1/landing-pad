import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class DateService {
  currentDate: Observable<Date> = new Observable(observer => {
    const interval = setInterval(() => {
      observer.next(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  monthValidator: Object = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
  };

  weekdayValidator: Object = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
  };

  constructor() {}
}
