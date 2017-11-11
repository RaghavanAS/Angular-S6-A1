import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  title;
  name;

  constructor() { }

  ngOnInit() {
    this.title= 'Mr.';
    this.name= 'A S Raghavan';
  }

}
