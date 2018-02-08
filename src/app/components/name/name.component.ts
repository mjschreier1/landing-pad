import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  name: string;
  hasName: boolean = false;

  constructor() { }

  ngOnInit() {
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
