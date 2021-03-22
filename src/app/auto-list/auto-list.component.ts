import { Component, OnInit } from '@angular/core';
import { AutoService } from '../auto.service';
import { Auto } from '../_models/auto';

@Component({
  selector: 'app-auto-list',
  templateUrl: './auto-list.component.html',
  styleUrls: ['./auto-list.component.css']
})
export class AutoListComponent implements OnInit {
  public autos : Auto[]

  constructor(private _autoService: AutoService) {
    this.autos = _autoService.getAutos();
  }

  ngOnInit(): void {
  }

}
