import { Component, OnInit } from '@angular/core';
import { DateService } from '../../services/date.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  time: string;

  constructor(private _dateService: DateService) { }

  ngOnInit() {
    this._dateService.currentTime.subscribe(currentTime => {
      this.time = currentTime
    })
  }

}
