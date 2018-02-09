import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private _settingsService: SettingsService) { }

  ngOnInit() {
  }

  toggleMilitaryTime() {
    this._settingsService.militaryTime.next(!this._settingsService.militaryTime)
  }

}