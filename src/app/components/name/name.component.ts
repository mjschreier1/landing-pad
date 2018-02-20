import { Component, OnInit } from '@angular/core';
import { DateService } from '../../services/date.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  name: string;
  hasName: boolean = false;
  militaryHours: number;

  constructor(private _dateService: DateService) { }

  ngOnInit() {
    this._dateService.currentDate.subscribe(currentDate => {
      this.militaryHours = currentDate.getHours();
    })
    this.handleName();
  }

  handleName(): void {
    if (localStorage.name) {
      this.hasName = true;
      this.name = localStorage.name;
    }
  }

  onSubmit(data): void {
    event.preventDefault();
    localStorage.setItem("name", this.name);
    this.handleName();
  }

}
