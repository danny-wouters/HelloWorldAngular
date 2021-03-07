import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  public isActive:boolean = true;
  public studenten = ['jan', 'els', 'peter'];
  public getal:number = 2;
  public successClass:string = "text-success";
  public hasError:boolean = true;
  public isSpecial:boolean = true;
  public messageClasses = {
    'text-success': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  };

  constructor() { }

  ngOnInit(): void {
  }

}
