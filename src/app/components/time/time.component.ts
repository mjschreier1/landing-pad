import { Component, OnInit } from '@angular/core';
import { DateService } from '../../services/date.service';
import { SettingsService } from '../../services/settings.service'

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  time: string;
  hours12: string;
  hours: string;
  minutes: string;
  seconds: string;
  displayMilitaryTime: boolean;
  weekday: string;
  month: string;
  date: number;

  constructor(private _dateService: DateService, private _settingsService: SettingsService) { }

  ngOnInit() {
    this._dateService.currentDate.subscribe(currentDate => {
      this.month = this._dateService.monthValidator[currentDate.getMonth()];
      this.weekday = this._dateService.weekdayValidator[currentDate.getDay()];
      this.date = currentDate.getDate();

      let currentTime = currentDate.toTimeString();
      this.time = currentTime.slice(0, 8);
      this.hours = currentTime.slice(0, 2);
      parseInt(currentTime.slice(0, 2)) > 12
        ? this.hours12 = (parseInt(currentTime.slice(0, 2)) - 12).toString()
        : this.hours12 = this.hours;
      if(this.hours12.length === 1) { this.hours12 = `0${this.hours12}` }
      this.minutes = currentTime.slice(3, 5);
      this.seconds = currentTime.slice(6, 8);
    })

    this._settingsService.militaryTime.subscribe(preference => {
      this.displayMilitaryTime = preference
    })
  }

}
