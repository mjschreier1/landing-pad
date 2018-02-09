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

  constructor(private _dateService: DateService, private _settingsService: SettingsService) { }

  ngOnInit() {
    this._dateService.currentTime.subscribe(currentTime => {
      this.time = currentTime;
      this.hours = currentTime.slice(0, 2);
      parseInt(currentTime.slice(0, 2)) > 12
        ? this.hours12 = (parseInt(currentTime.slice(0, 2)) - 12).toString()
        : this.hours12 = this.hours;
      this.minutes = currentTime.slice(3, 5);
      this.seconds = currentTime.slice(6, 8);
    })

    this._settingsService.militaryTime.subscribe(preference => {
      this.displayMilitaryTime = preference
    })
  }

}
