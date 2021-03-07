import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public isActive:boolean = true;
  public studenten = ['jan', 'els', 'peter'];

  constructor() { }

  ngOnInit(): void {
  }

}
